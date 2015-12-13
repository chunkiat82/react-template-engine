import fs from 'fs'; // this engine requires the fs module
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import dev from './dev';
import viewEngine from './engine/viewEngine'

const app = express();

dev(app);

app.engine('rayel', viewEngine);

app.set('views', './src/public/views'); // specify the views directory
app.set('view engine', 'rayel'); // register the template engine

app.get('/', (req, res) => {
  res.render('index', {'title':'hello world'});
});

console.log('listening');
app.listen(3000);