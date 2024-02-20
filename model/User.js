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
  selectedCountry: {
    type: String,
    required: true,
    // trim: true,
  },
  selectedState: {
    type: String,
    required: true,
    // trim: true,
  },
  selectedCity: {
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


