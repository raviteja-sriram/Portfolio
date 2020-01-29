import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profilepic.jpg';
import Title from './Title';

class App1 extends Component{
    state = {displayBio : false};
    // constructor(){
    //     super();
    //     this.state = {displayBio : false}
    //     this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
    // }

    toggleMoreInfo = () => {
        this.setState({displayBio : !this.state.displayBio});
        //this.state.displayBio = !this.state.DisplayBio;
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile-pic' className='profile' />
                <h1>Hello</h1>
                <p>My name is Ravi.</p>
                <Title />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I love JavaScript. This appears based on the state.</p>
                            <button onClick={this.toggleMoreInfo}>Show Less</button>
                        </div>
                    ) : 
                    (
                        <div>
                            <button onClick={this.toggleMoreInfo}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App1;