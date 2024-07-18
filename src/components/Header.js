import webImage from "../images/web.png"

export default function Header() {
    return (
        <header>
            <img src={webImage} className="header--image"></img>
            <h2 className="header--title">my travel journal.</h2>
        </header>
    )
}