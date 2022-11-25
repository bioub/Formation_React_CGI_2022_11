import { useEffect, useState } from "react";

function ClockHook({ format, delay }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const _interval = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      clearInterval(_interval);
    };
  }, [delay]);
  // function + empty array === componentDidMount + componentWillMount
  // function + undefined === componentDidMount + (componentDidUpdate + componentWillUpdate)*render + componentWillMount
  // function + array with value(s) === componentDidMount + (componentDidUpdate + componentWillUpdate)*render(if value(s) change) + componentWillMount

  return <div className="ClockHook">{now.toLocaleTimeString()} au format {format}</div>;
}

export default ClockHook;
