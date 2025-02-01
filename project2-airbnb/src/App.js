import "./style.css"
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import datas from "./Data"
console.log(datas)

export default function App() {
    const dataOfAll=datas.map(item=>{
      return(
        <Card 
          {...item}
          />
      )
       
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cardlist">
            {dataOfAll}
            </section>
           
        </div>
    )
}
// item={item}