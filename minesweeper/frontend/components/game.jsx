import React from "react";
import ReactDOM from "react-dom";
import Minesweeper from "../../minesweeper";

class Game extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            board: new Minesweeper.Board
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){
        
    }

    render(){
        return(
            <Board board={this.state.board} updateGame={this.updateGame}/>
        )   
    }
}
export default Game;