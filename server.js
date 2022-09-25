const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { GraphQLSchema } = require("graphql")
const app = express()

const { RootMutationType } = require("./gql_Mutations")
const { RootQueryType } = require("./gql_Queries")

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)
app.listen(5000, () => console.log("server running"))
