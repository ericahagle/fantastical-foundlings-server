const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffBio = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { data: Buffer, contentType: String, required: false },
    fave: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('staff', StaffBio);
