import React, { useState } from "react";
import WishListForm from "./WishListForm";
import Wish from "./Wish";

function WishList() {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newItems = [item, ...list];
    console.log("addItem : " + newItems);
    setList(newItems);
  };

  const removeItem = (text) => {
    const removedArr = [...list].filter((item) => item !== text);
    setList(removedArr);
  };

  const updatePriority = (item, newpriority) => {
    list.map((i) => {
        if (i.text === item.text) {
          i.priority = newpriority;
          console.log(i.priority);
        }
      });
      setList(list);
      setRefresh(!refresh);
  };

  const moveToTop = (item) => {
    setList(list.filter((i) =>(
        (i !== item)
    )))

    setList(list => [item, ...list]);

  };

  const completeList = (id) => {
    let updatedList = list.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div>
      <h1>Simple WishList Widget</h1>
      <WishListForm onSubmit={addItem} />
      <div className="wish">
        <Wish list={list} completeList={completeList} removeItem={removeItem} updatePriority={updatePriority} moveToTop={moveToTop}/>
      </div>
    </div>
  );
}

export default WishList;
