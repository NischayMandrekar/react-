
// import Contact from "./Contact.js" 
export default function Card(props) {
console.log(props)
    return (
             <div className="card">
               { props.openSpots===0 &&<div className="card--badge">SOLD OUT</div>}
        <img src={props.coverImg} className="card--image" alt=""/>
         <div className="card--stats"  >
             <img src="./images/Star.png" className="card--star" alt=""/>
             <span >({props.stats.reviewCount})</span>
             <span className="gray">{props.stats.rating} • </span>
             <span className="gray">{props.location}</span>
         </div>
         <h2 className="card--title">{props.title}</h2>
         <p className="card--price" ><span className="bold">from ${props.price}</span> / person</p>
     </div>
    )
}
// const first="joe";
//     const last="schmoe";
//     const date=new Date();
//     const hours=date.getHours();
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
 // <h1>hello {first} {last} its {timeOfDay}</h1>