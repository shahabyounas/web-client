import  React, { useState , useEffect } from 'react'

export const TimeAndDate = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            {/* <p> Time : {date.toLocaleTimeString()}</p> */}
            <p> Today : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default TimeAndDate