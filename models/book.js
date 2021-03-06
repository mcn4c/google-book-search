const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  link: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;