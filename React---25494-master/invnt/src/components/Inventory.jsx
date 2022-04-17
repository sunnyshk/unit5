import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    ink_pens: 20
  });
    // Create add and remove functions here that changes the
    // state.
    const countB = (value) =>{
      
      setInv({...inv, books:inv.books+value});
      
    }
    const countN = (value) =>{
      setInv({...inv,notebooks:inv.notebooks+value})
    } 
    const countP = (value) =>{
      setInv({...inv,pens:inv.pens+value});
    }
    const countIp = (value) =>{
      setInv({...inv,ink_pens:inv.ink_pens+value});
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=> countB(+1)}>+</button>
        <button className="circlularButton" onClick={()=> countB(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=> countN(+1)}>+</button>
        <button className="circlularButton" onClick={()=> countN(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=> countP(+1)}>+</button>
        <button className="circlularButton" onClick={()=> countP(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=> countIp(+1)}>+</button>
        <button className="circlularButton" onClick={()=> countIp(-1)}>-</button>
        <span>{inv.ink_pens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.ink_pens}
    </div>
  );
};