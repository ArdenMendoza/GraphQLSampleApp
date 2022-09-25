const BooksQueries = require("./q_books")
const AuthorsQueries = require("./q_authors")
const { GraphQLObjectType } = require("graphql")

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    ...BooksQueries,
    ...AuthorsQueries,
  }),
})

module.exports = { RootQueryType }
