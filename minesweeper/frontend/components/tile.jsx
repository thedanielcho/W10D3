import React from "react";

const Tile = (props) => {
  // props.tile.explored = true;
  let text = "";
  let status = ""
  if(props.tile.explored){
    if(props.tile.bombed){
      text = "\uD83D\uDCA3";
      status = "bombed"
    } else if(props.tile.adjacentBombCount() > 0){
      text = `${props.tile.adjacentBombCount()}`
      status = "explored"
    } else{
      text = "";
      status = "explored"
    }
  } else if(props.tile.flagged){
    text = "\uD83C\uDFF3";
    status = "flagged"
  }

  return (
    <div className={"tile " + status}>
      {text}
    </div>
  )
}

export default Tile;

//bomb = U+1F4A3
//flag U+1F6A9
