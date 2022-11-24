import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log('DB connection successfully 👏')
} catch (error) {
    console.log('Error trying to connect to DB 💀' + error)
}
