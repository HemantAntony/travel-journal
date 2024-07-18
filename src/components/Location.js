import point from "../images/point.png"

export default function Location({title, location, googleMapsUrl, startDate, endDate, description}) {
    return (
        <div className="location">
            <img src={`./images/${location}.png`} alt="location" className="location--image"></img>
            <div className="location--description">
                <div className="location--place">
                    <img src={point} alt="point"></img>
                    <span className="location--country">{location}</span>
                    <a href={googleMapsUrl} className="location--link">View on Google Maps</a>
                </div>
                <h1 className="location--title">{title}</h1>
                <h3 className="location--date">{`${startDate} - ${endDate}`}</h3>
                <p className="location--about">{description}</p>
            </div>
        </div>
    )
}