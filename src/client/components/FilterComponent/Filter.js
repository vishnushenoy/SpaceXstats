import React from 'react';
const years=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

export default class Filter extends React.PureComponent{
    render() {
        return(
            <div className='FilterContainer'>
                <div className='Heading'>Filters</div>
                <div className='SubHeading'>Launch Year</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    {years.map((item,index)=>{
                        return(
                        <label key={index} htmlFor={index}>
                            <input type='radio' name='year' checked={this.props.year==item?true:false} value={item} id={index} style={{display: 'none'}} onChange={this.props.handleYearChange}/>
                            <div className='YearBtn'>{item}</div>
                        </label>
                        )
                    })}
                </div>
                <div className='SubHeading'>Successful Launch</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    <label htmlFor='LaunchFilterTrue'>      
                        <input type='radio' name='isLaunch' value={1} checked={this.props.isLaunched!==null&&this.props.isLaunched} id='LaunchFilterTrue' style={{display: 'none'}} onChange={this.props.handleLaunchFilterChange}/>
                        <div className='YearBtn'>True</div>
                    </label>
                    <label htmlFor='LaunchFilterFalse'>
                        <input type='radio' name='isLaunch' value={0}  checked={this.props.isLaunched!==null&&!this.props.isLaunched} id='LaunchFilterFalse' style={{display: 'none'}} onChange={this.props.handleLaunchFilterChange}/>
                        <div className='YearBtn'>False</div>
                    </label>
                </div>
                <div className='SubHeading'>Successful Land</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    <label htmlFor='LandFilterTrue'>
                        <input type='radio' name='isLand' value={1}  checked={this.props.isLanded!==null&&this.props.isLanded} id='LandFilterTrue' style={{display: 'none'}} onChange={this.props.handleLandFilterChange}/>
                        <div className='YearBtn'>True</div>
                    </label>
                    <label htmlFor='LandFilterFalse'>
                        <input type='radio' name='isLand' value={0}  checked={this.props.isLanded!==null&&!this.props.isLanded} id='LandFilterFalse' style={{display: 'none'}} onChange={this.props.handleLandFilterChange}/>
                        <div className='YearBtn'>False</div>
                    </label>
                </div>
            </div>
        )
    }
}
