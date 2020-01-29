import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a music lover',
  'an enthusiastic learner',
  'an adventure seeker'
];

class Title extends Component {
  state = { titleIndex: 0};

  componentDidMount(){
      console.log("The component is mounted");
      this.animateTitle();
  }

  componentWillUnmount(){
    console.log("The component will unmount");
    clearInterval(this.titleInterval);
  }

  animateTitle = () => {
    
    this.titleInterval = setInterval(() =>  {
        const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
        this.setState({titleIndex: titleIndex})
    }, 4000)
  }

  render() {

    const title = TITLES[this.state.titleIndex];

    return (
      <p>I am {title}</p>
    )
  }
}

export default Title;