import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import Titles from './Titles'; 
import Header from './Header';

class App extends Component {
    state = { displayBio:false }
    
    toggle = ()=>{
        this.setState({displayBio:!this.state.displayBio});
       //this.setState.displayBio = !this.state.displayBio;
    }
    render(){
    let bio =this.state.displayBio ?(
    <div>
        
        <h1>Display section</h1>
        <button onClick={this.toggle}>Read Less</button>
        </div>)
        :(<button onClick={this.toggle}>Read more</button>);
    
        return(
            <div>
            
            <h2>Hello</h2>
            <p>Welcome to react tutorial</p>
            <Titles/>
            {bio}
            <hr/>
            <Projects/> 
            <hr/>
            <h1>Connect with me</h1>
            
            <SocialProfiles/>
            <hr/>
            

            </div>
            

        )
    }
}

export default App;