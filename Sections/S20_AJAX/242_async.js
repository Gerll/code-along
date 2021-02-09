//  Finally
const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
.then(array => {
    throw Error;
    console.log('1',array[0])
    console.log('1',array[1])
    console.log('1',array[2])
    console.log('1',array[3])
})
.catch(err => console.log('fix it',err))
//  finally sirve para lanzar el código sin importar
.finally(() => console.log('extra'));

//  for await of
//  Example 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
//  function original
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

const loopThroughUrls = url => {
    for (url of urls){
        console.log(url);
    }
}
//  for await of
// Esta es otra forma de obtener los datos de variable urls
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));{
        for await (let request of arrayOfPromises){
            const data = await request.json();
            console.log(data);
        }
    }
}