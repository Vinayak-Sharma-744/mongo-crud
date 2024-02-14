import * as mongoose from "mongoose"

const Schema = mongoose.Schema;

const mySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  title: String ,
  price: Number,
  category: String ,
  description: String ,
  image: String
});

const myModel = mongoose.model('Example', mySchema);

export default myModel