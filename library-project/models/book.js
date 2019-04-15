const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    author: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Author'
      }
    ],
    rating: {
      type: Number
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
