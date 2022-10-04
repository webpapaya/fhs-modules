const fetchAsync = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executing', url)
            resolve({data: url});
            console.log('execution done', url)
        }, Math.random() * 1000)
    });
}

function a() {}
function b() {}
function c() {}

async function fetchBestFriendsAddress() {
    try {
        const [user, weather] = await Promise.all([
            fetchAsync('/api/current-user'),
            fetchAsync('/api/weather')
        ])

        const bestFriend = await fetchAsync(`/api/users/${user.id}/best-friend`)
        const address = await fetchAsync(`/api/users/${bestFriend.id}/address`)

        console.log(address)
    } catch(e) {
        console.error(e)
    }
}

async function main() {
    a()
    b()
    await fetchBestFriendsAddress()
    c()
}


