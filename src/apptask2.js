

const express = require('express')
const app = express()
const path = require("path")
var hbs = require('hbs')



const port = process.env.PORT || 3000
app.set('view engine', 'hbs') 

const partialpath = path.join(__dirname, '../temp/partials')
hbs.registerPartials(partialpath)

const viewsDir = path.join(__dirname, '../temp/views')
app.set("views", viewsDir)
    
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))



//Home Page
app.get('/', (reg, res) => {
    res.render('index', {
        title:"Home ",
        desc:"Welcome To Home Page"
    })
})

//Check Weather
app.get('/check_weather' ,(req , res)=>{
    res.render('check_weather' ,{
        title:'Weather',
       country : 'egypt' ,
       latitude :29.8719034524 ,
       longtitude : 26.4941838299 ,
       curWeather: "Clear" ,
       temperature: 27
    })
})


//News Page
app.get('/News' ,(req , res)=>{
    res.render('News' ,{
        title:" About News ",
        desc:'Welcome to News Page',

       
    })
})

//Contact Page
app.get('/Contact' ,(req , res)=>{
    res.render('Contact' ,{
        title:'Contact',
        desc:'Welcome to contact Page',

    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});