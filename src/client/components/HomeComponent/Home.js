import React from 'react';
import {connect} from 'react-redux';
import {fetchShips} from '../../action'
import {Helmet} from "react-helmet";

import SpaceShipCard from "../SpaceShipCardComponent/SpaceShipCard";
import Filter from "../FilterComponent/Filter";

var year=null
var isLaunched=null
var isLanded=null
class HomeContainer extends React.PureComponent{
    constructor(){
        super();
        this.handleYearChange=this.handleYearChange.bind(this)
        this.handleLandFilterChange=this.handleLandFilterChange.bind(this)
        this.handleLaunchFilterChange=this.handleLaunchFilterChange.bind(this)
    }
    setParameter(paramName, paramValue)
    {
        var url = window.location.href;
        var hash;
        if (url.indexOf(paramName + "=") >= 0)
        {
            var prefix = url.substring(0, url.indexOf(paramName + "="));
            var suffix = url.substring(url.indexOf(paramName + "="));
            suffix = suffix.substring(suffix.indexOf("=") + 1);
            suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
            hash = prefix + paramName + "=" + paramValue + suffix;
        }
        else
        {
            if (url.indexOf("?") < 0)
                hash = "?" + paramName + "=" + paramValue;
            else
                hash =url + "&" + paramName + "=" + paramValue;
        }
        let stateObj = { id: "100" };
        window.history.replaceState(stateObj,
            "SpaceXStats", hash);
    }
    getParameter() {
        var vars = {};
        if (window.location.search.length !== 0)
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                key = decodeURIComponent(key);
                if (typeof vars[key] === "undefined") {
                    vars[key] = decodeURIComponent(value);
                } else {
                    vars[key] = [].concat(vars[key], decodeURIComponent(value));
                }
            });
        year=Number(vars.year)
        isLaunched=(vars.isLaunched=="true")?1:0;
        isLanded=(vars.isLanded=="true")?1:0;
    };
    componentDidMount() {
        console.log(this.getParameter())
        this.props.fetchShips(year,isLaunched,isLanded);
    }
    handleYearChange(e){
        year=Number(e.target.value)
        this.setParameter("year",year)
        this.props.fetchShips(year,isLaunched,isLanded);
    }
    handleLaunchFilterChange(e){
        isLaunched=Boolean(Number(e.target.value))
        this.setParameter("isLaunched",isLaunched)
        this.props.fetchShips(year,isLaunched,isLanded);
    }
    handleLandFilterChange(e){
        isLaunched=true;
        isLanded=Boolean(Number(e.target.value))
        this.setParameter("isLanded",isLanded)
        this.props.fetchShips(year,isLaunched,isLanded);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>SpaceX Stats</title>
                    <meta property="og:title" content="SpaceX Stats"/>
                    <meta name="description" content="spacEX data with filters"/>
                    <meta name="viewport" content="initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"/>
                </Helmet>
                <h1>SpaceX Launch Programs</h1>
                <div className='Container'>
                    <Filter handleYearChange={this.handleYearChange} handleLaunchFilterChange={this.handleLaunchFilterChange} handleLandFilterChange={this.handleLandFilterChange} />
                    <div className='CardContainer'>
                        {this.props.ships.map((item)=>{
                            return(<SpaceShipCard key={item.flight_number} SpaceShip={item}/>)
                        })}
                    </div>
                </div>
                <div className='DeveloperTag'>Developed By:<span style={{fontWeight:'normal'}}>Vishnu Shenoy</span></div>
            </div>
        );
    }
}
function loadData(store){
    return store.dispatch(fetchShips(year,isLaunched,isLanded))
}
function mapStateToProps(state){
    return {ships:state.ships};
}
export {loadData};
export default connect(mapStateToProps,{fetchShips})(HomeContainer)
