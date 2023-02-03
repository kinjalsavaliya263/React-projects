import React, { useReducer, userState } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
    if (action.type === 'incr') {
        return { count: state.count + 1 }
    }
    if (action.type === 'decr') {
        return { count: state.count - 1 }
    }
    if (action.type === 'reset') {
        return { count: state.count = 0 }
    }

}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state.count}</h1>
            <div>
                <button onClick={() => dispatch({ 'type': 'incr' })}>Increament</button>
                <button onClick={() => dispatch({ 'type': 'decr' })}>Decreament</button>
            </div>
            <div>
                <button onClick={() => dispatch({ 'type': 'reset' })}>Reset</button>
            </div>
        </>
    )
}