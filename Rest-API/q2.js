async function createPost(title, body) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body })
  });
  return await res.json();
}
createPost("Hello", "Erica").then(
    result => {
            console.log(result);
    });

