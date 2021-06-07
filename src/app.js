const express =require('express');
const path =require('path');
const hbs =require('hbs');
const geocode = require('./utils.js/geocode');
const { request } = require('express');
// const geocode = require('./utils.js/geocode');
const app =express()
const port = process.env.PORT||3000
// define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory for server
app.use(express.static(publicDirectory))



app.get('',(req,res)=>{
    res.render('index',{
        title:"weather",
        name:'Kamraj'
    })
})
app.get('/about', (req, res) => {
    res.render('about',{
        title:'about',
        name: 'Kamraj'
    })
})
app.get('/help', (req, res) => {
    res.render('help',{
        title:'help',
        name: 'Kamraj'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:"address required to get weather"
        })
    }
    geocode(req.query.address,(err,data)=>{
      return res.send({
          weather: data,
          place: req.query.address,
          error:err
      })
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help article not found',
        name: 'back'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 page',
        name: 'back'
    })
})
app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})