const express = require('express');
const path = require('path');
 
const app = express();
app.set('port', process.env.PORT || 8050);
app.get('/', (req, res) => {
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});
 
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

//npm init 후 npm i express 하자
//node app.js or npm start