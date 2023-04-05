import React, { useState } from "react";

function WishListForm(props) {
  const [input, setInput] = useState("");
  const [priorityInput, setInputPriority] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  
  const handleChangePriority = e => {
    setInputPriority(e.target.value);
  } 

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        text: input,
        priority: priorityInput
    });

    setInput('');
    setInputPriority('');
  };

  return (
    <form className="wishlist-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add an item" value={input} name="text" className="wishlist-input" onChange={handleChange}/>
        <input type="number" min="1" placeholder="Set priority" value={priorityInput} name="priority" className="wishlist-input" onChange={handleChangePriority}/>
        <button className="wishlist-button">Add Item</button>
    </form>
  );
}

export default WishListForm;
