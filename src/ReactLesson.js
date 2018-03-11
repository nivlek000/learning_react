import React from 'react';

// eslint-disable-next-line
class GoogleSearchTimer extends React.Component {
  render() {
    return <div>
      <Hello name = {this.props.user}/>
      <Today/>
      <Search image = "https://www.google.com.ng/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>

    </div>
  }
}

class Welcome extends React.Component {
  render() {
    return <div>
      <Hello name = {this.props.user}/>
      <Today/>
    </div>
  }
}

class Hello extends React.Component {
  render() {
    return <h3>
      Hello {this.props.name},
      </h3>
  }
}

class Today extends React.Component {
  render() {
    return <h2>
      Today is <DateApp/>
      </h2>
  }
}

class DateApp extends React.Component {

  state = { time: ""}

  getTime() {
    const time = new Date().toUTCString()
    this.setState({ time: time})
  }

  componentDidMount(){
   setInterval(() => this.getTime(),1000)
  }

  render(){
    return <span>{this.state.time}</span>
  }

}

class Search extends React.Component {
  render() {
    return <div>
      <img src={this.props.image} alt="googlelogo"/>
      <input type="search"/>
    </div>

  }
}

export default Welcome;
