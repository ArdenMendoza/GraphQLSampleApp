const { BookType } = require("../DataTypes")
const { GraphQLList, GraphQLInt } = require("graphql")
const { books } = require("../data")

module.exports = {
  book: {
    type: BookType,
    description: "A single book",
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => books.find((f) => f.id === args.id),
  },
  books: {
    type: new GraphQLList(BookType),
    description: "List of books",
    resolve: () => books,
  },
}
