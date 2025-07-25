import React, { useRef, useState } from 'react'

function NumberGuess() {
    const [feedBack, setFeedBack] = useState('')
    const [userValue, setUserValue] = useState(0)
    const randomValue = useRef(Number(Math.floor(Math.random() * 100 + 1)))
    // attemp 


    function checkGuess() {
        const ourGuess = Number(userValue)
        if (ourGuess == randomValue.current) {
            setFeedBack('your guess was right')
        } else if (ourGuess > randomValue.current) {
            setFeedBack('think lil bigger value')
        } else {
            setFeedBack('think lil smaller value')
        }
        console.log("random numebr is", randomValue.current)
        console.log("your guess is ", ourGuess)
    }
    function restart() {
        randomValue.current = Number(Math.floor(Math.random() * 100 + 1))
        console.log("random numebr is", randomValue.current)
    }
    return (
        <div>
            <h1>Guess the Number</h1>
            <input type="number" name="" id="abc" value={userValue} onChange={(e) => setUserValue(e.target.value)} />
            <button onClick={checkGuess}>check</button>
            <h1>{feedBack}</h1>
            <button onClick={restart}>restart the game</button>
        </div>
    )
}

export default NumberGuess