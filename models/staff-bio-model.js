const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffBio = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    fave: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('staff', StaffBio);
