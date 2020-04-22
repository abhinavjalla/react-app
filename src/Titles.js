import React,{ Component }from 'react';

const TITLES = [
    "I'm a engineer",
    "Lawyer",
    "Cricketer"
]

class Titles extends Component {
    
    state  ={titleIndex:0};

    componentDidMount(){
        this.animateTitles();

    }
    animateTitles =()=>{
        setInterval(()=>{
            const titleIndex = (this.state.titleIndex + 1)%TITLES.length;
            this.setState({titleIndex});

        },4000)
    }
    render() {
        const Title = TITLES[this.state.titleIndex]
        return (
            <p>{Title}</p>
        )
    }
}

export default Titles;