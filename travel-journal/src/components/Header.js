import React from "react"
import globe from "../assets/Fill 213.png"

export default function Header() {
    return(
        <div className="header-container">
            <img src={globe} alt="globe"></img>
            <h1>my travel journal</h1>
        </div>
    )
}