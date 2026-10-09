import { useState } from "react";
function Item2(){
const[message , setMessage] = useState ("Hello");
function changeMessage(){
if (message ==="Hello"){ ("Welcome to react");
}else{ setMessage  ("Hello")}
}

return(
<div className="container">
<h1 className="heading"> {message}</h1>
<button className="button"onClick = {changeMessage} >
  changeMessage
</button>
</div>

);
}
export default Item2;
