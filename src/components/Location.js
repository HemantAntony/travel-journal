import image from "../images/japan.png"
import point from "../images/point.png"

export default function Location() {
    return (
        <div className="location">
            <img src={image} alt="location" className="location--image"></img>
            <div className="location--description">
                <div className="location--place">
                    <img src={point} alt="point"></img>
                    <span className="location--country">JAPAN</span>
                    <a href="#" className="location--link">View on Google Maps</a>
                </div>
                <h1 className="location--title">Mount Fuji</h1>
                <h3 className="location--date">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="location--about">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}