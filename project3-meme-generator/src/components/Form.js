import thug from "./thug.jpg"
import {useState,useEffect} from "react" 

export default function Form() {
    const [meme,setMeme]=useState({
      imageUrl:thug,
      topText:"mega knight",
      bottomText:"gay"
      
    })

    function handleChange(event){
          const {value,name}=event.currentTarget
          setMeme(prevMeme=>({
            ...prevMeme,
           [name]:value
          })
        )
    }
    const [allMemes,setAllMemes]=useState([])
    useEffect(function(){
         fetch("//api.imgflip.com/get_memes")
         .then(res=>res.json())
         .then(data=>setAllMemes(data.data.memes))
    },[])

    function handleClick(){
          setMeme(prevMeme=>({
            ...prevMeme,
            imageUrl:allMemes[Math.floor(Math.random()*allMemes.length)].url
          })
        )
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="mega knight"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="gay"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt=""/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}


