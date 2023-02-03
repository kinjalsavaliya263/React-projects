import React, { usereducer, useState } from 'react'
const initialstate = { count: 0 }
const reducer = (state, action) => {
    if (action, type === 'incr') {
        return { count: state.count + 1 }
    }
    if (action, type === 'decr') {
        return { count: state.count - 1 }
    }
}

export default function usereducer() {
    const [state, dispatch] = usereducer(reducer, initialstate)
    return (
        <>
            <h1>{state.count}</h1>
            <button onclick={() => dispatch({ 'type': 'incr' })}>Increament</button>
            <button onclick={() => dispatch({ 'type': 'decr' })}>Decreament</button>
        </>
    )
}