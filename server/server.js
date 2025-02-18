// // Import required modules
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize express app
// const app = express();
// const port = 5000;

// // Middleware setup
// app.use(bodyParser.json());  // Parse incoming JSON data
// app.use(cors());  // Allow cross-origin requests

// // MongoDB Atlas connection URI
// const dbURI = 'mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/user?retryWrites=true&w=majority';  // database name 'user'

// // Connect to MongoDB
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch((err) => console.log('Failed to connect to MongoDB', err));

// // Define User Schema for registration
// const userSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     mobile: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     confirmPassword: {
//         type: String,
//         required: true,
//     },
// });

// // Create User model using the 'user' collection in the 'user' database
// const User = mongoose.model('User', userSchema, 'user');  // 'user' is the collection name

// // POST route to handle user registration
// app.post('/api/register', async (req, res) => {
//     const { fullname, email, mobile, password, confirmPassword } = req.body;

//     try {
//         // Check if passwords match
//         if (password !== confirmPassword) {
//             return res.status(400).json({ message: 'Passwords do not match' });
//         }

//         // Check if email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email already registered' });
//         }

//         // Create a new user
//         const newUser = new User({ fullname, email, mobile, password, confirmPassword });
//         await newUser.save();

//         // Send success response
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Server Error', error: err });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // to parse incoming JSON data

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/user?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// User registration route
app.post('/api/register', async (req, res) => {
  try {
    const { fullname, email, mobile, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullname, email, mobile, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// User login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Server listening
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
