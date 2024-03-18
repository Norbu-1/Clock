import { useEffect, useState } from "react";

let CurrentTime=()=>{
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
const timer=setInterval(()=>{
    setTime(new Date())},1000)
return ()=>{
    clearInterval(timer);
};
    },[]);

    return <p className="lead">This the current time :{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
}
export default CurrentTime;