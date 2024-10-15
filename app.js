const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sample_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.render('index', { tasks: results });
    });
});

app.post('/addtask', (req, res) => {
    const task = req.body.newtask;
    const createdAt = new Date();
    connection.query('INSERT INTO tasks (task, created_at) VALUES (?, ?)', [task, createdAt], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/deletetask', (req, res) => {
    const taskId = req.body.taskId;
    connection.query('DELETE FROM tasks WHERE id = ?', [taskId], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/search', (req, res) => {
    const searchQuery = req.body.searchQuery;
    const query = `SELECT * FROM tasks WHERE task LIKE ?`;
    connection.query(query, [`%${searchQuery}%`], (err, results) => {
        if (err) throw err;
        res.render('index', { tasks: results });
    });
});

app.listen(port, () => {
    console.log(`To-Do App listening at http://localhost:${port}`);
});
