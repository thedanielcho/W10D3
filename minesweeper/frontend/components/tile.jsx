import React from "react";

const Tile = (props) => {
  // props.tile.explored = true;
  let text = "";
  let status = ""
  if(props.tile.explored){
    if(props.tile.bombed){
        text = "☢";
      status = "bombed"
    } else if(props.tile.adjacentBombCount() > 0){
      text = `${props.tile.adjacentBombCount()}`
      status = "explored"
    } else{
      text = "";
      status = "explored"
    }
  } else if(props.tile.flagged){
      text = "⚑";
    status = "flagged"
  }

  return (
    <div className={"tile " + status} 
    onClick={e => {
        if(e.altKey){
            return props.updateGame(props.tile, true);
        } else {
            return props.updateGame(props.tile, false);
        }
    }}
    >
      {text}
    </div>
  )
}

export default Tile;

//bomb = U+1F4A3
//flag U+1F6A9
