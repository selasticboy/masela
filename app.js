// constants (node libraries)

const express = require('express')
const mysql = require('mysql')
const path = require('path')
const port = process.env.PORT || 200
const app = express()

// middlewares

app.use(express.static(path.join(__dirname)))

// initialise the database connection for matched participants

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'match_maker'
})




// login page request

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'login.html'))
})


// home page request

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'home.html'))
})


// csv_file 

app.post('/accept_csv_file', (req, res)=>{
    res.send('time was not on my side! i could not finish this part!')
})


// run the connnection for the database

conn.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log(`database connected at port ${port}`)
    }
})



// run node server 

app.listen(port, (err)=>{
    if(err){
        throw err
    }else{
        console.log(`server running at port ${port}`)
    }
})



