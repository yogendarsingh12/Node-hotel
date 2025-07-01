const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/hotels'; // replace with your DB name

// Set up MongoDB connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;


//i am doing comment for testing 


