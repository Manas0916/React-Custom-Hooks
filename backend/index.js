const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3500;

let tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

app.use(bodyParser.json());
app.use(cors());

app.get('/task', (req, res)=>{
    console.log("got the request");
    res.send(tasks);
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  