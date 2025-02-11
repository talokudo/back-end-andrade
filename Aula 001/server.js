const express = require('express');

const LE = express();

const port = 3000;

LE.get('/',(req, res)  =>{
    res.send('killer queen acione a terceira bomba.')
});





LE.listen(port, () =>{
    console.log('servidor rodando em http', port);
})