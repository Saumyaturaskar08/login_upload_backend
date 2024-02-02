import mongoose from 'mongoose';

 const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    // trim: true,
  },
  lastName: {
    type: String,
    required: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // trim: true,
    lowercase: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email address',
    },
  },
  country: {
    type: String,
    required: true,
    // trim: true,
  },
  state: {
    type: String,
    required: true,
    // trim: true,
  },
  city: {
    type: String,
    required: true,
    // trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
},
{
  timestamps:true
}
);

const User = mongoose.model('User', userSchema);

export default User;


