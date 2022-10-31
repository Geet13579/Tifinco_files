const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
  // UseNewUrlParser:true,
  // UseCreateIndex:true,
  // UseUnifiedTopology:true,
  // UseFindAndModify:false
}).then(() => {
  console.log('connection successful');
}).catch((err) => console.log('not connected'));


//////////////////////////////////////////Manisha Code///////////////////////////////////////////////


// async function main() {
//     const MongoClient = require('mongodb').MongoClient;
//     const uri =
//     'mongodb+srv://doadmin:I2u568Pr79g3N1Af@db-mongodb-blr1-54899-342513fd.mongo.ondigitalocean.com/?authSource=admin&replicaSet=db-mongodb-blr1-54899&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect((err) => {
//       const collection = client.db('tifinco').collection('students');
//       // perform actions on the collection object
//       client.close();
//     });
//   }
//   main().catch(console.error);
