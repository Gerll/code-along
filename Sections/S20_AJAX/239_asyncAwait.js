//  ASYNC AWAIT

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))
//  Ejemplo de un caso
async function platerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}
//  Example 1
//promise   this
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)
//async await   to this
async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

//  Example 2
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posta', array[1])
    console.log('albums', array[2])
}).catch('Opps');

const getData = async function(){
    try {
        const [users, posta, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posta', posta)
        console.log('albums', albums)
    } catch (err) {
        console.log('Oops', err)
    }
}