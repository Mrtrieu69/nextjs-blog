
export default (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data => res.status(200).json(data))
}