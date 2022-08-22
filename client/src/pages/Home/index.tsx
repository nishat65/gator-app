import { useState, useRef, useEffect } from 'react';
import { DesktopLayout } from 'components/index'
export default function Home() {
    // const [time, setTime] = useState(new Date())
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date())
    //     }, 1000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // })
    return (
        <DesktopLayout>
            {/* <div>{time.toLocaleTimeString()}</div> */}
            {/* <div>{time.toLocaleTimeString().split(':')[1]}</div> */}
            <div>This is the homepage</div>
        </DesktopLayout>
    )
}
