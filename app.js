const express = require('express');
const bodyparser = require('body-parser')
const path=require('path')
var app = express();
var cmd=require('node-cmd');
//static files
const static_path =path.join(__dirname, "/public")
console.log(static_path)
app.use(express.static(static_path))
//api call to run the ssh
app.use(bodyparser());
app.post('/', function(req, res) {
  
  const syncDir=cmd.runSync('cd ./public/js & node cmdbutton.js');

    console.log(`
    
        Sync Err ${syncDir.err}
        
        Sync stderr:  ${syncDir.stderr}

        Sync Data: ${syncDir.data}
    
    `);

    cmd.run(`node cmdbutton.js`,
        function(err, data, stderr){
            console.log('the node-cmd dir contains : ',syncDir.data)
        }
    );
    res.send(syncDir.data);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})