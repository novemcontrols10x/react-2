import React, { useState } from 'react'

function Weather() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState(null)

    async function checkWeather() {

        console.log(input)

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2e6f2d9b243aa97524ed1c34e0407e76`)

            if (!res) {
                console.log('error while fetching details')
                return false
            }
            const data = await res.json()
            setResult(data)
            setInput("")
            console.log(data.weather)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='w-full h-screen flex justify-center items-center'>

            <div className='min-h-52 w-1/2 bg-gray-800 rounded-2xl border-2 border-gray-500'>
                <div className='w-full h-36 my-5  flex flex-col items-center '>
                    <input onChange={(e) => setInput(e.target.value)} value={input} className='bg-gray-400 border-2 border-gray-500 m-2 rounded-sm h-10 w-2/3' type="text" name="" id="" />
                    <button onClick={checkWeather}>See Weather</button>
                </div>
                <div className='m-10 '>
                    <h1>Temp: {result?.main?.temp || 'NA'} k</h1>
                    <h2>weather: {result?.weather[0]?.main || "NA"} </h2>
                    <p>details : {result?.weather[0]?.description || "NA"}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather