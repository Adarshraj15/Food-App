import { useState } from "react";

const user = (props) => {
  const [Count] = useState(0);
  const [Count2] = useState(1);
  return (
    <div className="user-class">
      <h2>Count ={Count}</h2>
      <h2>Count2 ={Count2}</h2>
      <h2>Name:{props.name}</h2>
      <h3>Location:{props.loction}</h3>
      <h3>contact</h3>
    </div>
  );
};

export default user;
