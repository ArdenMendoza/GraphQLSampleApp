const { AuthorType } = require("../DataTypes")
const { GraphQLList, GraphQLInt } = require("graphql")
const { authors } = require("../data")

module.exports = {
  author: {
    type: AuthorType,
    description: "A single author",
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => authors.find((f) => f.id === args.id),
  },
  authors: {
    type: new GraphQLList(AuthorType),
    description: "List of Authors",
    resolve: () => authors,
  },
}
