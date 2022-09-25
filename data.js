const authors = [
  { id: 1, name: "author1" },
  { id: 2, name: "author2" },
  { id: 3, name: "author3" },
]

const books = [
  { id: 1, name: "Book1" },
  { id: 2, name: "Book2" },
  { id: 3, name: "Book3", authorId: 1 },
  { id: 4, name: "Book4", authorId: 2 },
  { id: 5, name: "Book5", authorId: 3 },
  { id: 6, name: "Book6", authorId: 2 },
  { id: 7, name: "Book7", authorId: 3 },
]

module.exports = { authors, books }
