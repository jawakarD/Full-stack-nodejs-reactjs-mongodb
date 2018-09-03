import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//object shows the shape of the database entries;
const CommentSchema = new Schema({
  auther : String,
  text : String,
},{
  timestamp : true
});

const Comment = mongoose.model('Comment',CommentSchema);

export default Comment;
