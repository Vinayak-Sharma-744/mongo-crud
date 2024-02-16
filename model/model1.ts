import * as mongoose from "mongoose"

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String ,
  age: Number,
  username: String ,
  password: String ,
});

const userModel = mongoose.model('User', userSchema);

export default userModel