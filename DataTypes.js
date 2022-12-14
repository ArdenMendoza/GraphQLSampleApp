const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql")
const { authors, books } = require("./data")

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents an author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter((f) => f.authorId === author.id)
      },
    },
  }),
})

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find((author) => author.id === book.authorId)
      },
    },
  }),
})

module.exports = { AuthorType, BookType }
