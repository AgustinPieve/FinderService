import { Schema, model, models } from "mongoose";

var employerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es requerida"],
    },
    birthdate: {
      type: Date,
      required: [true, "La fecha de nacimiento es requerida"],
    },
    age: Number,
    email: {
      type: String,
      require: [true, "El correo es requerido"],
    },
    rating: {
      type: String,
    },
    profilepic: {
      type: String,
      default:
        "https://res.cloudinary.com/dacl2du1v/image/upload/v1684330929/userAvt_tkcm8u.png",
    },
    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    salt: {
      type: String,
    },
    validator: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    reviews: {
      type: String,
      description: String,
    },
    phone: Number,
    profile: {
      type: String,
      default: "employer",
    },
    state: {
      type: String,
      default: "available",
    },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: false, versionKey: false }
);
var Employer = models.Employer || model("Employer", employerSchema);
module.exports = Employer;
