const fetchAsync = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executing', url)
            resolve({data: url});
            console.log('execution done', url)
        }, Math.random() * 1000)
    });
}

fetchAsync('/api/current-user')
    .then((user) => fetchAsync(`/api/users/${user.id}/best-friend`))
    .then((bestFriend) => fetchAsync(`/api/users/${bestFriend.id}/address`))
    .then((data) => console.log(data))
    .catch((data) => console.error(data))

