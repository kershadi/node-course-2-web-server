const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use ((req, res, next)=>{
  var now = new Date().toString();

  console.log(`${now}: ${req.method} ${req.url}`);

  next();
});

app.use((req, res, next) =>{
  res.render('maintenance.hbs');
})

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

app.get('/', (req, res) =>{
  res.send({
    name:'kouros',
    likes:[
      'reading',
      'working out'
    ]
  });
})

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
})

app.listen(port, () =>{
  console.log(`Server is up on port ${port}`);
});
