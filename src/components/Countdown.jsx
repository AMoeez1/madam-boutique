import { useEffect, useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";
import { GiStopwatch } from "react-icons/gi";


function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    const date = 'January, 29, 2024';

    const getTime = () => {
        const time = Date.parse(date) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(time / (1000 * 60 * 60) / 24))
        setMins(Math.floor((time / 1000 / 60) % 60));
        setSecs(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(date), 1000)
        return () => clearInterval(interval)
    }), []
    return (
        <div className="container mt-5 bg-white py-4">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-6">
                    <h5 className="h4 mr-10 mb-0 gap-1 d-flex"><BiSolidDiscount />On Sale now </h5>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <h5 className="h4 mr-5 mb-0 d-flex gap-1"><GiStopwatch/> Ending On</h5>
                </div>
                <div className="col-md-6 col-sm-4 col-10">
                    <div className="row text-center">
                        <div className="col-md-2 col-3 mb-0 p-1">
                            <h1 className="h4 text-primary m-1">{days < 10 ? '0' + days : days}: </h1>
                        </div>
                        <div className="col-md-2 col-3 p-1 ">
                            <h1 className="h4 m-1 text-primary">{hours < 10 ? '0' + hours : hours}: </h1>
                        </div>
                        <div className="col-md-2 col-3 p-1">
                            <h1 className="h4 text-primary m-1">{mins < 10 ? '0' + mins : mins}: </h1>
                        </div>
                        <div className="col-md-2 col-3 p-1">
                            <h1 className="h4 text-primary m-1">{secs < 10 ? '0' + secs : secs} </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown;
