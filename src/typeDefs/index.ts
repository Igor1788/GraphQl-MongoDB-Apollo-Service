import { makeExecutableSchema } from '@graphql-tools/schema'
import types from "./types";
import queries from "./queries";
import mutation from "./mutation";

export default makeExecutableSchema({
    typeDefs: [
        types.typeDef,
        queries.typeDef,
        mutation.typeDef
    ]
})
