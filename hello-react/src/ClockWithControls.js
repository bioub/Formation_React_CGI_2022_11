import { useState } from "react";
import ClockClass from "./ClockClass";
import ClockHook from "./ClockHook";

function ClockWithControls() {
  const [format, setFormat] = useState('HH:mm:ss');
  const [delay, setDelay] = useState(1000);
  const [show, setShow] = useState(true);

  return (
    <div className="ClockWithControls">
      <div>Format : <input type="text" value={format} onChange={(e) => setFormat(e.target.value)} /></div>
      <div>Delay : <input type="number" value={delay} onChange={(e) => setDelay(e.target.valueAsNumber)} /></div>
      <div>Show : <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /></div>
      {/* {show && <ClockClass format={format} delay={delay} />} */}
      {show && <ClockHook format={format} delay={delay} />}
    </div>
  );
}

export default ClockWithControls;
