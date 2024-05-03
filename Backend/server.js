const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'umiyapowdercoating'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define route handlers for each category
app.get('/colors/glossy', (req, res) => {
  const query = `SELECT colour_name AS name, colour_hex AS hex FROM glossy`; // Only select data from the glossyfinish table
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching glossy colors:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    const categoryData = {
      name: 'glossy',
      colors: results
    };
    console.log(categoryData)
    res.json({ categories: [categoryData] });
  });
});


app.get('/colors/semiglossy', (req, res) => {
  const query = `SELECT colour_name AS name, colour_hex AS hex FROM semiglossy`; // Only select data from the glossyfinish table
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching semi glossy colors:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    const categoryData = {
      name: 'semiglossy',
      colors: results
    };
    console.log(categoryData)
    res.json({ categories: [categoryData] });
  });
});

app.get('/colors/matt', (req, res) => {
  const query = `SELECT colour_name AS name, colour_hex AS hex FROM matt`; // Only select data from the glossyfinish table
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching matt colors:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    const categoryData = {
      name: 'matt',
      colors: results
    };
    console.log(categoryData)
    res.json({ categories: [categoryData] });
  });
});

app.get('/colors/polyester', (req, res) => {
  const query = `SELECT colour_name AS name, colour_hex AS hex FROM polyester`; // Only select data from the glossyfinish table
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching polyester colors:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    const categoryData = {
      name: 'polyester',
      colors: results
    };
    console.log(categoryData)
    res.json({ categories: [categoryData] });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
