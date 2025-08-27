const express = require('express');
const app = express();
const port = 3000;

const students = [
    { id: 1, name: 'Sanidhya'},
    { id: 2, name: 'Tanvi' },
    { id: 3, name: 'Garima' },
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
