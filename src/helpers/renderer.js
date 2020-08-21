import React from 'react'
import {renderToString} from 'react-dom/server'
import Routes from '../client/Routes';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from "react-router-config";
import {Provider} from "react-redux";
import {Helmet} from 'react-helmet'

export default (req,store)=>{
    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>);
    const helmet=Helmet.renderStatic()
   return`
<html lang="en">
<head>
${helmet.title.toString()}
${helmet.meta.toString()}
<link rel="stylesheet" href="/css/main.css">
</head>
<body>
<title>SpacEXStats</title>
<div id="root">${content}</div>
<script src="bundle.js"></script></body>
</html> `;
};
