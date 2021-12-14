// const { exec } = require("child_process");

// exec("echo hi", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
// 'use strict';

// const { networkInterfaces } = require('os');

// const nets = networkInterfaces();
// const results = Object.create(null); // Or just '{}', an empty object

// for (const name of Object.keys(nets)) {
//     for (const net of nets[name]) {
//         // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//         if (net.family === 'IPv4' && !net.internal) {
//             if (!results[name]) {
//                 results[name] = [];
//             }
//             results[name].push(net.address);
//         }
//     }
// }
// console.log(results);
// const parseIp = request.socket.remoteAddress;
// console.log(parseIp)

const SSH = require('simple-ssh');

var ssh = new SSH({
    host: '172.25.235.75',
    user: 'cssdesk',
    pass: 'intel123'
});
ssh
  .exec('dir', { out: function (stdout) { console.log("sshoutput: "+stdout); } })
  .start();

