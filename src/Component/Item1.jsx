import { useState } from "react";

function Item1(){
    const [name,setName]=useState("");
    return(
  <div className="counter">
<h1 className="counter h1">Student Form</h1>
<input
type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Enter Your name"
className="counter input"
/>
<h2 className="counter h2">Your Name: {name}</h2>
</div>
)



}
export default Item1;