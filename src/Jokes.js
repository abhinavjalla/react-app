import React, {Component} from 'react';
import Header from './Header';
const Joke =({joke})=>{
    console.log(joke);
    
    const {id,setup,punchline} = joke;
    return  (
        <div style={{margin: 20}}>
        <p>{setup} </p>
         <em>{punchline}</em>
        </div>
        
    ) 
}

class Jokes extends Component {

    
    state = {joke:{},jokes:[]};
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke').
        then(response=>response.json()).then(
            json=>this.setState({joke:json})
        )

    }
    fetchJokes =()=>{
        fetch('https://official-joke-api.appspot.com/random_ten').then(
            response=>response.json()).then(
                json=>this.setState({jokes:json})
            )
    }
    render() {
        
        return(
            <div>
                
                <h2>Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    this.state.jokes.map(joke=>{
                        
                    return <Joke key={joke.id} joke={joke}/>
                    })
                }

            </div>
        )

    }
}

export default Jokes;