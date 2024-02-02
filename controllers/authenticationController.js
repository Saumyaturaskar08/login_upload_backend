// // backend/controllers/authenticationController.js

// import User from '../model/User.js';
// import generateToken from '../utils/generateToken.js';

// // Check user authentication status
// export const checkAuthStatus = async (req, res) => {
//   try {
//     // If the request reaches this point, it means the user is authenticated
//     res.status(200).json({ authenticated: true, user: req.user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Login
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Check the password (In a real-world scenario, you'd use bcrypt for password hashing)
//     if (user.password !== password) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate and send JWT token
//     const token = generateToken(user._id);
//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
