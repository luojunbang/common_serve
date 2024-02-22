// "use strict";
// const promisify = require('pify')
// const mysql = require("mysql");
// const { DB_CONFIG } = require("../../app.config");


// function mysqlClient(opt){

// }

// const connection = mysql.createConnection(DB_CONFIG)
// connection.connect();


// connection.query('SELECT * FROM my_bill',function (err, result) {
//     if(err){
//       console.log('[SELECT ERROR] - ',err.message);
//       return;
//     }

//    console.log('--------------------------SELECT----------------------------');
//    console.log(result);
//    console.log('------------------------------------------------------------\n\n');  
// });

// module.exports = sql;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://luojunbang:luojunbang@luojunbang.bcrdqz8.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

client.connect().then(res=>{
  console.log(res);
  client.db('person').collection('bill').find().toArray().then(res=>{
    console.log(res);
  })
});
