import React from 'react'

export default class SpaceShipCard extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Card'>
                <div className='ImageStyle'>
                    <img ref="MissionPatchImg" className='Image' src={this.props.SpaceShip.links.mission_patch_small} alt={this.props.SpaceShip.mission_name+" Mission Patch"} />
                </div>
                <div className='CardHeading'>{this.props.SpaceShip.mission_name} #{this.props.SpaceShip.flight_number}</div>
                <div className='CardText'>Mission Ids:
                    {this.props.SpaceShip.mission_id.length > 0 ? <ul className='MissionList'>
                        {this.props.SpaceShip.mission_id.map((item, index) => {
                            return <li className='CardValue' key={index}>{item}</li>
                        })
                        }
                    </ul>:<span className='CardValue'>NA</span>
                    }
                </div>
                <div className='CardText' style={this.props.SpaceShip.mission_id.length>0?{marginTop:'5px'}:{}}>Launch Year: <span className='CardValue'>{this.props.SpaceShip.launch_year}</span></div>
                <div className='CardText'>Successful Launch:  <span className='CardValue'>{(this.props.SpaceShip.launch_success)?"True":"False"}</span></div>
                <div className='CardText'>Successful Landing:  <span className='CardValue'>{(!this.props.SpaceShip.rocket.first_stage.cores[0].land_success)?'NA':
                    (this.props.SpaceShip.rocket.first_stage.cores[0].land_success)?"True":"False"}</span></div>
            </div>
        )
    }
}
