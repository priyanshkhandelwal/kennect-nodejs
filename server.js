const express = require('express');
const app = express();
const path = require('path');

app.use(
    function (req, res, next) {       
        res.setHeader('Access-Control-Allow-Origin', '*');        
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');       
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);        
        next();
    }
)
  
app.use(express.static(path.join('public')));
    
app.get(function (req, res) {   
    res.sendFile(path.join(__dirname + 'index.html'))  
})
    
app.listen(8000, () => {
    console.log('server started click on http://localhost:8000/assets/index.html?');
})