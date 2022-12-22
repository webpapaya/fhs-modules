import { openDB } from 'https://cdn.jsdelivr.net/npm/idb@7/+esm';

const database = await openDB('fhs-quiz', 1, {
    upgrade(db, currentVersion) {
         if (currentVersion === 0) {
            db.createObjectStore('questions', { keyPath: 'id' })

            const userStore = db.createObjectStore('user', { keyPath: 'id' })
            userStore.createIndex('userNameIdx', 'name')
        }
    }
})

await database.put('user', { id: 1, name: "Sepp1" })
await database.put('user', { id: 2, name: "Sepp2" })
await database.put('user', { id: 3, name: "Sepp3" })

window.database = database