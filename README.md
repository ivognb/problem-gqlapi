E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\graphql\validation\validate.js:107
    throw new Error(errors.map(function (error) {
    ^

Error: Field "Query.posts" can only be defined once.
    at assertValidSDL (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\graphql\validation\validate.js:107:11)       
    at Object.buildASTSchema (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\graphql\utilities\buildASTSchema.js:45:34)
    at Object.buildSchemaFromTypeDefinitions (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\graphql-tools\src\generate\buildSchemaFromTypeDefinitions.ts:45:32)
    at Object.makeExecutableSchema (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\graphql-tools\src\makeExecutableSchema.ts:52:16)
    at ApolloServer.constructSchema (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\apollo-server-core\src\ApolloServer.ts:814:12)
    at new ApolloServerBase (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\apollo-server-core\src\ApolloServer.ts:423:16)
    at new ApolloServer (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\apollo-server-express\src\ApolloServer.ts:88:5)
    at new ApolloServer (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\apollo-server\src\index.ts:40:5)
    at startServer (E:\Users\Ivo\Documentos\www\segundo projeto graphql\src\/startserver.js:10:20)
    at Object.<anonymous> (E:\Users\Ivo\Documentos\www\segundo projeto graphql\src\/index.js:5:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Module._compile (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\pirates\lib\index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Object.newLoader [as .js] (E:\Users\Ivo\Documentos\www\segundo projeto graphql\node_modules\pirates\lib\index.js:104:7)       
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
