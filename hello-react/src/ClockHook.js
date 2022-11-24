import { useEffect, useState } from "react";

function ClockHook() {
  const [format, setFormat] = useState('HH:mm:ss');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []); // function + empty array === componentDidMount

  return <div className="ClockHook">{now.toLocaleTimeString()} au format {format}</div>;
}

export default ClockHook;