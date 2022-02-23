import React from "react"
import data from "./data"
import Header from "./components/Header"
import Location from "./components/Location"

export default function App() {
const locations = data.map(info => {
    return (
        <Location
        key = {info.id}
        info = {info}
        />
    )
})

    return(
        <div className="container">
            <Header/>
            <div id="locations">
                {locations}
            </div>
        </div>
    )
}