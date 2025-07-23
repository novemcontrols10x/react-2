import React, { useEffect, useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("this is the value of count", count)
        document.title = "novem"
    }, [])



    // api fetching
    // dom handling
    // rendering data
    //  etc


    return (
        <>
            <div className=''>Home</div>
            <p>this is count {count}</p>
            <button onClick={() => { setCount(count + 1) }}>increament the count </button>
        </>
    )
}

export default Home