import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../../minesweeper";
import Board from "./board";

class Game extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { 
            board: new Minesweeper.Board(6, 4)
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, bool){
        if(bool){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board});
    }

    render(){
        console.log("in RENDER")
        
        if(this.state.board.won()){
            
            return (
                <div>
                    <p>You WIN!</p>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        } else if (this.state.board.lost()){
            
            return (
                <div>
                    <p>You LOSE!</p>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        } else {
            return (
                <div>
                    <p>You PLAYING!</p>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        }
    }
}
export default Game;