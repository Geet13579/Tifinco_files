// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();
// const qr = require("qrcode");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const cookieParser = require("cookie-parser");
// const app = express();
// var session = require('express-session');
// const MongoStore = require('connect-mongo');
var path = require('path');





app.set('view engine', 'ejs');

app.post('/success', function(req, res) {
  res.render('Success', { mgs:data} );
});

app.post('/unsuccess', function(req, res) {
    res.render('Error', {mgs:data } );
  });

// const fs = require('fs');
// const certPath = '/etc/letsencrypt/live/tifinco.com';

// app.use(bp.urlencoded({ extended: false }));
//db connect
dotenv.config({ path: './config.env' });
require('./db/conn');



// Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });
// //header define
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 app.use(cors());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: false
  }));
// app.use(cors({
//     credentials: true,
//     methods: ['GET', 'POST'],
// }));


//session
// creating 24 hours from milliseconds
//const onehour = 1000 * 60 * 60 * 24;

//session middleware
// app.use(session({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized: true,
//     resave: false,
//     proxy:false,
//     cors:true,
//     store: MongoStore.create({ mongoUrl: process.env.DATABASE })
//         // store: MongoStore.create({
//         //     url: 'mongodb+srv://doadmin:O0W2T6As4iD3q197@dbaas-db-8278685-62a696e7.mongo.ondigitalocean.com/tifinco?authSource=admin&replicaSet=dbaas-db-8278685&tls=true&tlsCAFile=ca-certificate.crt', //YOUR MONGODB URL
//         //     ttl: 14 * 24 * 60 * 60,
//         //     autoRemove: 'native'
//         // })
// }));


app.use((req,res, next)=>{
   // console.log("called");
  
   //res.setHeader('Access-Control-Allow-Origin',["http://tifinco.com:3000"]);
   res.setHeader('Access-Control-Allow-Origin',"*");
   res.setHeader('Access-Control-Allow-Headers',"*");
   res.header('Access-Control-Allow-Credentials', true);
   next();
});

//routes
app.use('/user', require('./router/user/index'));
app.use('/admin', require('./router/admin/index'));
app.use('/appuser', require('./router/flutter/user/flutteruserindex'));
app.use('/appuser', require('./router/flutter/kitchen/Kitchenindex'));

app.get('/', (req, res) => {
    res.send('Welcome  To Tifinco  5000!');
});


app.set('views', path.join(__dirname, 'views'))



const handleResponse = (response) => {
    if(response.status === "ERROR"){
        throw {name: "handle response error", message: "error returned"};
    }
}





app.use('/public', express.static('public'));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/front/index.html'));
// });




//middleware
//app.use('./middleware/flutter/user/middlewareflutteruser');


// { key: fs.readFileSync(`${certPath}/privkey.pem`),
// cert: fs.readFileSync( `${certPath}/fullchain.pem`)},


// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tifinco.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tifinco.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/tifinco.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use('/',(req, res) => {
	res.send('Hello there !');
});




// Starting both http & https servers
const httpServer = http.createServer(app);

const httpsServer = https.createServer(credentials, app);

//  httpServer.listen(501, () => {
// 	console.log('HTTP Server running on port 80');
// });
httpsServer.listen(5000, () => {
  	console.log('HTTPS Server running on port 5000');
  });
// const server=httpsServer.listen(5000, () => {
// 	console.log('HTTPS Server running on port 5000');
// });


// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });

// //app listen
// app.listen(process.env.PORT || 5000,function(err) {
//     if (err) { console.log('err'); } else { console.log('this is running in port number 5000'); }

// });







// const { spawn } = require('child_process');
// // const path = require('path');
// const DB_NAME = 'tifinco';
// const ARCHIVE_PATH = path.join(__dirname,'public',`${DB_NAME}.gzip`);

// bakupMongoDB();

// function bakupMongoDB()
// {
//     const child = spawn('mongodump',[
//         `--db = ${DB_NAME}`,
//         `--archive = ${ARCHIVE_PATH}`,
//         `--gzip`,
//     ]);

//     child.stdout.on('data',(data)=>{
//         console.log('stdout:\n',data)
//     })

//     child.stderr.on('data',(data)=>{
//         console.log('stderr:\n',data)
//     })

//     child.on('error',(error)=>{
//         console.log('error:\n',error)
//     })

//     child.on('exit',(code,signal)=>{
//         if(code)
//         console.log('process exit with code:',code );
//         else if(signal)
//         console.log('process killed with signal',signal)
//         else
//         console.log('Backup is successful');
//     })
    
// }





