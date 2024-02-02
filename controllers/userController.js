import User from "../model/User.js";
import generateToken from '../utils/generateToken.js';

// Register a new user
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, country, state, city, password } = req.body ;

    // Check if any required field is missing
    if (!firstName || !lastName || !email || !country || !state || !city || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email is already registered
    const isEmailTaken = await User.exists({ email });
    if (isEmailTaken) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      country,
      state,
      city,
      password, // In a real-world scenario, this password should be hashed
    });

    // Generate and send JWT token
    const token = generateToken(newUser._id);
    res.status(201).json({ message: 'Registration successful', token });
  } catch (error) {
    console.error('Error during registration:', error);

    // Check for specific error types
    if (error.name === 'ValidationError') {
      // Handle validation errors
      const validationErrors = Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      }));
      return res.status(400).json({ message: 'Validation failed', errors: validationErrors });
    }

    res.status(500).json({ message: 'Saurabh Show Error Internal Server Error' });
  }
};

// Login a new user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check the password (In a real-world scenario, you'd use bcrypt for password hashing)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate and send JWT token
    const token = generateToken(user._id);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// import User from '../model/User.js';
// import generateToken from '../utils/generateToken.js';

// export const register = async (req, res) => {
//   try {
//     console.log('Received request:', req);
//     console.log('Received request body:', req.body);
//     const { firstName, lastName, email, country, state, city, password } = req.body;

//     const isEmailTaken = await User.exists({ email });
//     if (isEmailTaken) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const newUser = await User.create({
//       firstName,
//       lastName,
//       email,
//       country,
//       state,
//       city,
//       password, // In a real-world scenario, this password should be hashed
//     });

//     // Generate and send JWT token
//     const token = generateToken(newUser._id);
//     res.status(201).json({ message: 'Registration successful', token });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'saurabh Internal Server Error' });
//   }
// };
