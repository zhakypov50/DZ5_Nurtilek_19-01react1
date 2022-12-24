import React from "react";
import "./squares.css"

class Squares extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BlueSquares: true,
            GreenSquares: "",
            RedSquares: "",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        onchange(this.state)
    }

render() {
    return (
        <form>
            <div className="squares">
                <div className="BlueSquare"></div>
                <div className="GreenSquare" onClick={this.handleClick}>
                    <span className="RedSquare" onClick={this.handleClick}></span>
                </div>
            </div>
        </form>
    );
};
}

export default Squares;