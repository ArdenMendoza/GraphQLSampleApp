const BooksMutations = require("./m_books")
const AuthorMutations = require("./m_authors")
const { GraphQLObjectType } = require("graphql")

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    ...BooksMutations,
    ...AuthorMutations,
  }),
})

module.exports = { RootMutationType }
