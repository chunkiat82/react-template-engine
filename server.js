import express from 'express';
const app = express();



import fs from 'fs'; // this engine requires the fs module


app.engine('ray', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    // this is an extremely simple template engine
    var rendered = content.toString().replace('#title#', ''+ options.title +'')
    .replace('#message#', ''+ options.message +'');
    return callback(null, rendered);
  })
});

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ray'); // register the template engine

app.get('/', (req, res) => {
  res.render('index', {'title':'hello world'});
});

console.log('listening');
app.listen(3000);