/*
 ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
 ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
 ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
 ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
 ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
 ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
*/
const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const pool = require('./db_conn.js');

server.use(express.static('../client/public'));

const port = process.env.PORT || 8000;

/*
 ██████╗  ██████╗ ██╗   ██╗████████╗██╗███╗   ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██║████╗  ██║██╔════╝ 
 ██████╔╝██║   ██║██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
 ██╔══██╗██║   ██║██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
 ██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
*/

/*
 ██████╗  ██████╗ ██╗   ██╗████████╗███████╗    ███████╗███╗   ██╗██████╗ 
 ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██╔════╝    ██╔════╝████╗  ██║██╔══██╗
 ██████╔╝██║   ██║██║   ██║   ██║   █████╗      █████╗  ██╔██╗ ██║██║  ██║
 ██╔══██╗██║   ██║██║   ██║   ██║   ██╔══╝      ██╔══╝  ██║╚██╗██║██║  ██║
 ██║  ██║╚██████╔╝╚██████╔╝   ██║   ███████╗    ███████╗██║ ╚████║██████╔╝
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝    ╚══════╝╚═╝  ╚═══╝╚═════╝ 
*/

server.use((err, _req, res, _next) => {
  console.log(err.stack);
  res.sednStatus(500);
});

server.listen(port, () => {
  console.log('Listening to port', port);
});

module.exports = server;

/*
 ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗     ███████╗███╗   ██╗██████╗ 
 ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗    ██╔════╝████╗  ██║██╔══██╗
 ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝    █████╗  ██╔██╗ ██║██║  ██║
 ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗    ██╔══╝  ██║╚██╗██║██║  ██║
 ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║    ███████╗██║ ╚████║██████╔╝
 ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═══╝╚═════╝ 
*/
