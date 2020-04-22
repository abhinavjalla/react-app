import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';




class Social_Profile extends Component {
    render(){
        const { id,link,image} =  this.props.Profile; 
        return(
            <span>
                <a href={link}>
                    <img src={image} alt='social media' style={{width:35,height:35,margin:10}}></img>
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component{
    render(){


        return(
            <div>
                {
                    SOCIAL_PROFILES.map(PROFILE=>{
                        return(
                            <Social_Profile key={PROFILE.id} Profile={PROFILE} >

                            </Social_Profile>
                        )
                    })
                }
                
            </div>

        )
    }
}

export default SocialProfiles