const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql")
const { BookType } = require("../DataTypes")
const { books } = require("../data")

module.exports = {
  addBook: {
    type: BookType,
    description: "Add a book",
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      authorId: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: (parent, args) => {
      const { name, authorId } = args
      const book = {
        id: books.length + 1,
        name,
        authorId,
      }
      books.push(book)
      return book
    },
  },
}
