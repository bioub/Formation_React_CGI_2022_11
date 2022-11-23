import { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
    // this.now = new Date();
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        // on ne passe que les nouvelles clés (setState -> updateStateKeys)
        now: new Date(),
      });
      // ne provoquerait pas de render
      // this.now = new Date();
    }, 1000);
  }
  render() {
    // console.log('Clock renders');
    
    const { now, format } = this.state;
    return <div className="Clock">{now.toLocaleTimeString()} au format {format}</div>;
  }
}

export default Clock;