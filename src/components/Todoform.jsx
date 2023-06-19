import React, { useState } from "react";


const Todoform = () => {
    const[text , setText] = useState("");
  const dyno = (e)=>{
        setText(e.target.value)
        console.log(text)
  }
  return (
    <div>
      <form action="" className="Form">
        <input type="text" placeholder="Type Your Todo" onChange={dyno} />
      </form>
    </div>
  );
};

export default Todoform;
