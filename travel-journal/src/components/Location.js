import React from "react"
import marker from "../assets/Path.png"

export default function Location(props) {
    return(
        <div>
        <div className="location-container">
            <img className="location--image" src={window.location.origin + "/images/" + props.info.image} alt="place"></img>
            <div className="location--text">
                <img src={marker} alt="marker"></img>
                <span className="location--location">{props.info.location}</span> <span><a className="location--link" href={props.info.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className="location--title">{props.info.title}</h1>
                <h5 className="location--dates">{props.info.startDate}-{props.info.endDate}</h5>
                <p className="location--description">{props.info.description}</p>
            </div>
        </div>
        <hr/>
        </div>
    )
}