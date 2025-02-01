import image from "./logo192.png"
export default function Footer() {
    return (
       <nav className="nav">
       <img src={image} className="nav-icon" alt=""/>
       <h3 className="logo-title">ReactFacts</h3>
       <h4 className="title">React Course - Project 1</h4>
       </nav>
    )
}