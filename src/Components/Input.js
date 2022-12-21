/* eslint-disable no-useless-constructor */
import React from "react";
import './Input.css';

export default class Field extends React.Component{
    constructor(props){
        super(props)
        this.state = {inputText : ''}

        this.handleInput = () => {
            if(this.state.inputText.trim().length === 0){
                this.setState({inputText:''});
                return;
            }
            this.props.addTodo(this.state.inputText);
            this.setState({inputText:''});
        }
    }


    render(){
        return(
            <div className="section inputDiv">
                <input onKeyDown={(e)=> {if(e.key==='Enter') this.handleInput()}} type='text' placeholder="Your todo here..." maxLength={40} value={this.state.inputText} onChange={(e) => {this.setState({inputText:e.target.value})}}></input>
                <div className="buttonContainer">
                    <button onClick={this.handleInput}>Add todo
                    </button>
                </div>
            </div>
        )
    }

}


