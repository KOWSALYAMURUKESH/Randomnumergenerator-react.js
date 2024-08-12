import { useState } from "react";
import "./random.css"



function Random()
{
 const [random,setRandom] = useState(0)


  function generateRandom ()
  {
    const randomNumber = Math.floor(Math.random()*100)+1
    setRandom(randomNumber)


  }


return (
    <div className="body">
    <div className="container">
        <h1 className="heading">Random Number Generator</h1>
        <h1>{random}</h1>
        <button className="button" onClick={generateRandom}>Generate</button>
        </div>
    </div>
)
}

export default Random