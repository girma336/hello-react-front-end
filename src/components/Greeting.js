import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
    const { isLoading, error, greeting } = useSelector((state) => state.greeting );
    // console.log(greeting)
    if (isLoading) {
        return <div> Loading....</div>
    }

    if (error) {
        return <div>Fetching error ......</div>
    }
    return (
        <div>
            {greeting.content}
        </div>
    )
}


export default Greeting;