import React from "react";
import ReactDOM from "react-dom";
import * as Minesweeper from "../../minesweeper";
import Board from "./board";

class Game extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { 
            board: new Minesweeper.Board(6, 10)
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, bool){
        if(bool){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board});
    }

    restartGame(){
        this.setState({board: new Minesweeper.Board(6, 10)});
    }

    render(){
        console.log("in RENDER")
        
        if(this.state.board.won()){
            
            return (
                <div>
                    <div className="modal">
                        <div className="modal-screen"></div>
                        <div className="modal-content">
                            <p>You won!</p>
                            <button onClick={this.restartGame}>Play again</button>
                        </div>
                    </div>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        } else if (this.state.board.lost()){
            
            return (
                <div>
                    <div className="modal">
                        <div className="modal-screen"></div>
                        <div className="modal-content">
                            <p>You Lose!</p>
                            <button onClick={this.restartGame}>Play again</button>
                        </div>
                    </div>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        } else {
            return (
                <div>
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        }
    }
}
export default Game;