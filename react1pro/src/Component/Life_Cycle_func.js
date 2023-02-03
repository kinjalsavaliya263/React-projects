import React, { useEffect, useState } from 'react'


export default function Life_Cycle_func() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Did Update......');

    }, [count]);
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc..</button>
        </>
    )
};


