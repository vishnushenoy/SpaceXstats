!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-config")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=(a(r),n(10)),l=a(i);t.default=[{path:"/",component:l.default,loadData:i.loadData}]},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var l=t[r](i),u=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchShips=t.FETCH_SHIPS=void 0;var r=n(11),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l=t.FETCH_SHIPS="fetch_ships";t.fetchShips=function(e,t,n){return function(){var r=a(regeneratorRuntime.mark(function a(r){var u,o,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u="https://api.spaceXdata.com/v3/launches?limit=100",o=u,null!=e&&(o=o+"&launch_year="+e),null!=t&&(o=o+"&launch_success="+t),null!=n&&(o=o+"&land_success="+n),a.next=7,i.default.get(o);case 7:s=a.sent,r({type:l,payload:s});case 9:case"end":return a.stop()}},a,void 0)}));return function(e){return r.apply(this,arguments)}}()}},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(8);var r=n(9),i=a(r),l=n(0),u=(a(l),n(1)),o=n(2),s=a(o),c=n(14),d=a(c),f=n(18),p=a(f),h=n(21),m=(0,i.default)();m.use(h()),m.use(i.default.static("public")),m.get("*",function(e,t){var n=(0,d.default)();(0,u.matchRoutes)(s.default,e.path)[0].route.loadData(n).then(function(){t.send((0,p.default)(e,n))})});var v=process.env.PORT||3e3;m.listen(v,function(){console.log("Listening to port "+v)})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return e.dispatch((0,p.fetchShips)(_,g,E))}function o(e){return{ships:e.ships}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadData=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),d=a(c),f=n(3),p=n(4),h=n(5),m=n(12),v=a(m),y=n(13),b=a(y),_=null,g=null,E=null,S=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleYearChange=e.handleYearChange.bind(e),e.handleLandFilterChange=e.handleLandFilterChange.bind(e),e.handleLaunchFilterChange=e.handleLaunchFilterChange.bind(e),e}return l(t,e),s(t,[{key:"setParameter",value:function(e,t){var n,a=window.location.href;if(a.indexOf(e+"=")>=0){var r=a.substring(0,a.indexOf(e+"=")),i=a.substring(a.indexOf(e+"="));i=i.substring(i.indexOf("=")+1),i=i.indexOf("&")>=0?i.substring(i.indexOf("&")):"",n=r+e+"="+t+i}else n=a.indexOf("?")<0?"?"+e+"="+t:a+"&"+e+"="+t;var l={id:"100"};window.history.replaceState(l,"SpaceXStats",n)}},{key:"getParameter",value:function(){var e={};0!==window.location.search.length&&window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,a){n=decodeURIComponent(n),void 0===e[n]?e[n]=decodeURIComponent(a):e[n]=[].concat(e[n],decodeURIComponent(a))}),void 0!==e.year&&null!==e.year&&(_=Number(e.year)),void 0!==e.isLaunched&&null!==e.isLaunched&&(g="true"==e.isLaunched),void 0!==e.isLanded&&void 0!==e.isLanded&&(E="true"==e.isLanded)}},{key:"componentDidMount",value:function(){this.getParameter(),this.props.fetchShips(_,g,E)}},{key:"handleYearChange",value:function(e){_=Number(e.target.value),this.setParameter("year",_),this.props.fetchShips(_,g,E)}},{key:"handleLaunchFilterChange",value:function(e){g=1==Number(e.target.value),this.setParameter("isLaunched",g),this.props.fetchShips(_,g,E)}},{key:"handleLandFilterChange",value:function(e){E=1==Number(e.target.value),this.setParameter("isLanded",E),this.props.fetchShips(_,g,E)}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(h.Helmet,null,d.default.createElement("title",null,"SpaceX Stats"),d.default.createElement("meta",{property:"og:title",content:"SpaceX Stats"}),d.default.createElement("meta",{name:"description",content:"spacEX data with filters"}),d.default.createElement("meta",{name:"viewport",content:"initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"})),d.default.createElement("h1",null,"SpaceX Launch Programs"),d.default.createElement("div",{className:"Container"},d.default.createElement(b.default,{year:_,isLanded:E,isLaunched:g,handleYearChange:this.handleYearChange,handleLaunchFilterChange:this.handleLaunchFilterChange,handleLandFilterChange:this.handleLandFilterChange}),d.default.createElement("div",{className:"CardContainer"},this.props.ships.map(function(e){return d.default.createElement(v.default,{key:e.flight_number,SpaceShip:e})}))),d.default.createElement("div",{className:"DeveloperTag"},"Developed By:",d.default.createElement("span",{style:{fontWeight:"normal"}},"Vishnu Shenoy")))}}]),t}(d.default.PureComponent);t.loadData=u,t.default=(0,f.connect)(o,{fetchShips:p.fetchShips})(S)},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"Card"},o.default.createElement("div",{className:"ImageStyle"},o.default.createElement("img",{ref:"MissionPatchImg",src:this.props.SpaceShip.links.mission_patch_small,alt:this.props.SpaceShip.mission_name+" Mission Patch"})),o.default.createElement("div",{className:"CardHeading"},this.props.SpaceShip.mission_name," #",this.props.SpaceShip.flight_number),o.default.createElement("div",{className:"CardText"},"Mission Ids:",this.props.SpaceShip.mission_id.length>0?o.default.createElement("ul",{className:"MissionList"},this.props.SpaceShip.mission_id.map(function(e,t){return o.default.createElement("li",{className:"CardValue",key:t},e)})):o.default.createElement("span",{className:"CardValue"},"NA")),o.default.createElement("div",{className:"CardText",style:this.props.SpaceShip.mission_id.length>0?{marginTop:"5px"}:{}},"Launch Year: ",o.default.createElement("span",{className:"CardValue"},this.props.SpaceShip.launch_year)),o.default.createElement("div",{className:"CardText"},"Successful Launch:  ",o.default.createElement("span",{className:"CardValue"},this.props.SpaceShip.launch_success?"True":"False")),o.default.createElement("div",{className:"CardText"},"Successful Landing:  ",o.default.createElement("span",{className:"CardValue"},this.props.SpaceShip.rocket.first_stage.cores[0].land_success?this.props.SpaceShip.rocket.first_stage.cores[0].land_success?"True":"False":"NA")))}}]),t}(o.default.PureComponent);t.default=s},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(u),s=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],c=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"FilterContainer"},o.default.createElement("div",{className:"Heading"},"Filters"),o.default.createElement("div",{className:"SubHeading"},"Launch Year"),o.default.createElement("hr",{className:"Line"}),o.default.createElement("div",{className:"GridContainer"},s.map(function(t,n){return o.default.createElement("label",{key:n,htmlFor:n},o.default.createElement("input",{type:"radio",name:"year",checked:e.props.year==t,value:t,id:n,style:{display:"none"},onChange:e.props.handleYearChange}),o.default.createElement("div",{className:"YearBtn"},t))})),o.default.createElement("div",{className:"SubHeading"},"Successful Launch"),o.default.createElement("hr",{className:"Line"}),o.default.createElement("div",{className:"GridContainer"},o.default.createElement("label",{htmlFor:"LaunchFilterTrue"},o.default.createElement("input",{type:"radio",name:"isLaunch",value:1,checked:null!==this.props.isLaunched&&this.props.isLaunched,id:"LaunchFilterTrue",style:{display:"none"},onChange:this.props.handleLaunchFilterChange}),o.default.createElement("div",{className:"YearBtn"},"True")),o.default.createElement("label",{htmlFor:"LaunchFilterFalse"},o.default.createElement("input",{type:"radio",name:"isLaunch",value:0,checked:null!==this.props.isLaunched&&!this.props.isLaunched,id:"LaunchFilterFalse",style:{display:"none"},onChange:this.props.handleLaunchFilterChange}),o.default.createElement("div",{className:"YearBtn"},"False"))),o.default.createElement("div",{className:"SubHeading"},"Successful Land"),o.default.createElement("hr",{className:"Line"}),o.default.createElement("div",{className:"GridContainer"},o.default.createElement("label",{htmlFor:"LandFilterTrue"},o.default.createElement("input",{type:"radio",name:"isLand",value:1,checked:null!==this.props.isLanded&&this.props.isLanded,id:"LandFilterTrue",style:{display:"none"},onChange:this.props.handleLandFilterChange}),o.default.createElement("div",{className:"YearBtn"},"True")),o.default.createElement("label",{htmlFor:"LandFilterFalse"},o.default.createElement("input",{type:"radio",name:"isLand",value:0,checked:null!==this.props.isLanded&&!this.props.isLanded,id:"LandFilterFalse",style:{display:"none"},onChange:this.props.handleLandFilterChange}),o.default.createElement("div",{className:"YearBtn"},"False"))))}}]),t}(o.default.PureComponent);t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=n(15),l=a(i),u=n(17),o=a(u);t.default=function(){return(0,r.createStore)(l.default,{},(0,r.applyMiddleware)(o.default))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n(16),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=(0,a.combineReducers)({ships:i.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case a.FETCH_SHIPS:return t.payload.data;default:return e}}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=a(r),l=n(19),u=n(2),o=a(u),s=n(20),c=n(1),d=n(3),f=n(5);t.default=function(e,t){var n=(0,l.renderToString)(i.default.createElement(d.Provider,{store:t},i.default.createElement(s.StaticRouter,{location:e.path,context:{}},i.default.createElement("div",null,(0,c.renderRoutes)(o.default))))),a=f.Helmet.renderStatic();return'\n<html lang="en">\n<head>\n'+a.title.toString()+"\n"+a.meta.toString()+'\n<link rel="stylesheet" href="/css/main.css">\n</head>\n<body>\n<title>SpacEXStats</title>\n<div id="root">'+n+'</div>\n<script src="bundle.js"><\/script></body>\n</html> '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("compression")}]);