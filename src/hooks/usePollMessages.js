import { random } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getMessage } from "../reducers/messages.reducer";

const usePollMessages = () => {
    const dispatch = useDispatch();

    const [intervalId, setIntervalId] = useState(null);

    const [stop, setStop] = useState(false);

    const shouldStop = useRef(stop);
    
    shouldStop.current = stop;

    const handleStop = () => {
        setStop(state => (!state))
    }

    const fetchData = () => {
        if (shouldStop.current) {
            return null;
        }

        dispatch(getMessage());

        setIntervalId(state => {
            const nextInMS = random(500, 3000);
            return setTimeout(fetchData, nextInMS)
        });
    };

    useEffect(() => {
        fetchData(stop);

        return function cleanup() {
            clearInterval(intervalId);
        };

    }, [stop]);

    return [stop, handleStop];
};

export default usePollMessages;