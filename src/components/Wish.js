import React, { useState } from "react";

const Wish = ({ list, completeList, removeItem, updatePriority, moveToTop }) => {

  return list.map((item, index) => (
    <div
      className={item.isComplete ? "item-row complete" : "item-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeList(item.id)}>
        {item.text} (Priority: {item.priority})
      </div>
      <div className="icons">
        <button onClick={() => removeItem(item)} className="delete-icon">Delete</button>
        <button onClick={() => moveToTop(item)} >Move to top</button>
        <span> Priority </span>
        <button onClick={() => updatePriority(item, Number(item.priority) - 1)} className="edit-icon1">+</button>
        <button onClick={() => updatePriority(item, Number(item.priority) + 1)} className="edit-icon1">-</button>
        <br></br><br></br>
      </div>
    </div>
  ));
};

export default Wish;
