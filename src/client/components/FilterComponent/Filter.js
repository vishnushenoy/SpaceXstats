import React from 'react';

export default class Filter extends React.PureComponent{
    render() {
        return(
            <div className='FilterContainer'>
                <div className='Heading'>Filters</div>
                <div className='SubHeading'>Launch Year</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    <div>
                        <input type='radio' name='year' value={2006} id='2006' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2006'>2006</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2007} id='2007' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2007'>2007</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2008} id='2008' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2008'>2008</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2009} id='2009' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2009'>2009</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2010} id='2010' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2010'>2010</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2011} id='2011' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2011'>2011</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2012} id='2012' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2012'>2012</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2013} id='2013' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2013'>2013</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2014} id='2014' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2014'>2014</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2015} id='2015' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2015'>2015</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2016} id='2016' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2016'>2016</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2017} id='2017' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2017'>2017</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2018} id='2018' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2018'>2018</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2019} id='2019' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2019'>2019</label>
                    </div>
                    <div>
                        <input type='radio' name='year' value={2020} id='2020' style={{opacity: '0'}} onChange={this.props.handleYearChange}/>
                        <label className='YearBtn' htmlFor='2020'>2020</label>
                    </div>
                </div>
                <div className='SubHeading'>Successful Launch</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    <div>
                        <input type='radio' name='isLaunch' value={1} id='LaunchFilterTrue' style={{opacity: '0'}} onChange={this.props.handleLaunchFilterChange}/>
                        <label className='YearBtn' htmlFor='LaunchFilterTrue'>True</label>
                    </div>
                    <div>
                        <input type='radio' name='isLaunch' value={0} id='LaunchFilterFalse' style={{opacity: '0'}} onChange={this.props.handleLaunchFilterChange}/>
                        <label className='YearBtn' htmlFor='LaunchFilterFalse'>False</label>
                    </div>
                </div>
                <div className='SubHeading'>Successful Land</div>
                <hr className='Line'/>
                <div className='GridContainer'>
                    <div>
                        <input type='radio' name='isLaunch' value={1} id='LandFilterTrue' style={{opacity: '0'}} onChange={this.props.handleLandFilterChange}/>
                        <label className='YearBtn' htmlFor='LandFilterTrue'>True</label>
                    </div>
                    <div>
                        <input type='radio' name='isLaunch' value={0} id='LandFilterFalse' style={{opacity: '0'}} onChange={this.props.handleLandFilterChange}/>
                        <label className='YearBtn' htmlFor='LandFilterFalse'>False</label>
                    </div>
                </div>
            </div>
        )
    }
}
