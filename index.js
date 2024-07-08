const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema');
const resolver = require('./resolver');
const userApiFromRouter=require('./routes/userRoutes')
const app = express();
const port = 3001
const url='mongodb+srv://nithyaailuri:nithya@cluster0.omdndsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())//parsing
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
const server = new ApolloServer({typeDefs,resolver});
app.use('/users',userApiFromRouter);
async function  StartServer(){
await server.start();
server.applyMiddleware({app});//run my express code
app.listen(port,()=>{
    console.log(`server live at ${port} `);
})
}
StartServer();