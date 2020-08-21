import axios from 'axios';

export const FETCH_SHIPS='fetch_ships';
export const fetchShips=(year,isLaunchSuccess,isLandingSuccess)=>async dispatch=>{
    const BASE_URL='https://api.spaceXdata.com/v3/launches?limit=100'
    let url=BASE_URL;
    if(year)
        url=url+'&launch_year='+year;
    if(isLaunchSuccess)
        url=url+'&launch_success='+isLaunchSuccess;
    if(isLandingSuccess)
        url=url+'&land_success='+isLaunchSuccess;
    const res=await axios.get(url);
    dispatch({
        type:FETCH_SHIPS,
        payload:res
    })
};
