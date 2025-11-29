async function fetchData() 
{
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts"
    ];
    try{
        const [userResponse, postResponse] = await Promise.all(
            urls.map(url => fetch(url))
        );

        const [users, posts] = await Promise.all([
            userResponse.json(),
            postResponse.json()
        ]);
        return [...users, ...posts];
    }
    catch(error){
        console.error("error", error);
        return []
    }
    
}
fetchData().then(data => console.log(data));