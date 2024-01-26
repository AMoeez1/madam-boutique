import { useEffect, useState } from "react";
import SaleBanner from "../assets/sale-bg.jpg";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const date = "January, 29, 2024";

  const getTime = () => {
    const time = Date.parse(date) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor(time / (1000 * 60 * 60) / 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(date), 1000);
    return () => clearInterval(interval);
  }),
    [];
  return (
    <div className="mt-5 bg-white">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <img src={SaleBanner} className="w-full h-full" />
        </div>
        <div className="col-span-2 md:col-span-1 my-5 md:my-0">
          <div className="grid grid-flow-col flex-wrap md:flex-nowrap gap-5 text-center auto-cols-max h-full justify-center items-center">
            <div className="flex flex-col relative countdown-section">
              <span className="text-lg md:text-5xl bg-gray-50 mb-3 h-14 w-14 md:h-24 md:w-24 flex items-center justify-center rounded-md shadow-sm">
                <span>{days}</span>
              </span>
              Days
            </div>
            <div className="flex flex-col relative countdown-section">
              <span className="text-lg md:text-5xl bg-gray-50 mb-3 h-14 w-14 md:h-24 md:w-24 flex items-center justify-center rounded-md shadow-sm">
                <span>{hours}</span>
              </span>
              Hours
            </div>
            <div className="flex flex-col relative countdown-section">
              <span className="text-lg md:text-5xl bg-gray-50 mb-3 h-14 w-14 md:h-24 md:w-24 flex items-center justify-center rounded-md shadow-sm">
                <span>{mins}</span>
              </span>
              Mins
            </div>
            <div className="flex flex-col relative countdown-section">
              <span className="text-lg md:text-5xl bg-gray-50 mb-3 h-14 w-14 md:h-24 md:w-24 flex items-center justify-center rounded-md shadow-sm">
                <span>{secs}</span>
              </span>
              Sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
