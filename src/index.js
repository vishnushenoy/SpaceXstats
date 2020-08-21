import 'babel-polyfill';
import express from 'express';
import React from 'react';
import {matchRoutes} from "react-router-config";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import renderer from './helpers/renderer'
const compression = require('compression');



const app=express();

// app.use(compression());


app.use(express.static('public'));
app.get('*',(req,res)=>{
    const store=createStore();
    matchRoutes(Routes,req.path)[0].route.loadData(store)
        .then(()=>{
            res.send(renderer(req,store));
        })
})

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})
