const express = require('express');
const sequelize = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Example route to show the API is still working
app.get('/api/books', (req, res) => {
    res.send('Books API is working');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.authenticate()
        .then(() => console.log('Database connected...'))
        .catch(err => console.log('Error: ' + err));
});

// Sync the models with the database
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log('Error: ' + err));
