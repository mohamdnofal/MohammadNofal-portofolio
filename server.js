'use strict';


const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));



server.get('/',(request,response)=>{
    response.send('home route')
})

// localhost:3000/test ->http request (/test->route)
server.get('/test',(request,response)=>{
    response.send('You server is alive!!')
})

// localhost:3000/data ->http request (/data->route)
server.get('/data',(request,response)=>{
    let portfilio = [ {firstName:'Mohammad'}, {lastName:'Nofal'}]

    response.json(portfilio);
})



server.listen (PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})

// to run the server (npm start || node server.js)
// to stop the server (ctrl+c)
