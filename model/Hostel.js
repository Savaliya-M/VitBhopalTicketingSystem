import { Schema, model, models } from "mongoose";

const hostelschema = new Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  hostelNo: {
    type: String,
    require: true,
    trim: true,
  },
  roomNo: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    trim: true,
  },
  reason: {
    type: String,
    require: true,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
});

const hostel = models.hostel || model("hostel", hostelschema);

export default hostel;
