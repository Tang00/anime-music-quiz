import { useState, useRef } from 'react';


const useTimer = (initialState = 0) => {

    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const countRef = useRef(null);
    const timeRef = useRef(timer);


    const handleStart = () => {

        setIsActive(true);

        countRef.current = setInterval(() => {

            setTimer((timer) => timer - 1);
            timeRef.current -= 1;

            if (timeRef.current == 0) {
                setIsActive(false);
                clearInterval(countRef.current);
                setTimer(initialState);
                timeRef.current = initialState;
            }

        }, 1000)
    }

    return { timer, isActive, handleStart }
}


export default useTimer;