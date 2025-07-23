import React, { use, useEffect, useState } from 'react'

function About() {
    const [user, setUser] = useState()


    useEffect(() => {


        document.title = "about"

        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((data) => { return data.json() })
            .then((reslut) => {
                console.log(reslut)
                setUser(reslut)
            })
            .catch((err) => {
                console.log('got error while fetching', err)
            })

    }, [])


    // if (age > 18) {
    //     console.log('adult')
    // } else {
    //     console.log("mionor");

    // }


    let age = 32

    let human = age < 18 ? "adult" : "minor"


    return (
        <>

            <h1>{user?.name || "unknown User"}</h1>

            {
                user && <> <h1>{user.username}</h1> </>
            }

        </>
    )
}

export default About