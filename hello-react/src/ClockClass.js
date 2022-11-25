import { Component } from "react";
import { format as formatDate } from 'date-fns';

class ClockClass extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
    // this.now = new Date();
  }
  componentDidMount() {
    const { delay } = this.props;
    this._interval = setInterval(() => {
      this.setState({
        // on ne passe que les nouvelles clés (setState -> updateStateKeys)
        now: new Date(),
      });
      // ne provoquerait pas de render
      // this.now = new Date();
    }, delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.delay === prevProps.delay) {
      return;
    }

    console.log('componentDidUpdate');

    clearInterval(this._interval);
    const { delay } = this.props;
    this._interval = setInterval(() => {
      this.setState({
        // on ne passe que les nouvelles clés (setState -> updateStateKeys)
        now: new Date(),
      });
      // ne provoquerait pas de render
      // this.now = new Date();
    }, delay);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    // console.log('ClockClass renders');

    const { now } = this.state;
    const { format } = this.props;

    return <div className="ClockClass">{formatDate(now, format)} au format {format}</div>;
  }
}

export default ClockClass;
