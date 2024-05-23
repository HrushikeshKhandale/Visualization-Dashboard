const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const dataRoutes = require('./routes/dataRoutes');
const fs = require('fs');
const Data = require('./models/Data');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected...');
        // Seed the database
        seedDB();
    })
    .catch(err => console.log(err));

// Routes
app.use('/api/data', dataRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Seeding function
const seedDB = async () => {
    try {
        // Check if the database is already seeded
        const count = await Data.countDocuments();
        if (count === 0) {
            // Seed the database with jsondata.json
            const jsonData = JSON.parse(fs.readFileSync('jsondata.json', 'utf-8'));
            await Data.insertMany(jsonData);
            console.log('Data Seeded!');
        } else {
            console.log('Database already seeded!');
        }
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};
