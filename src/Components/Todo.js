/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import './Todo.css';

import deleteBtn from '../Resources/close.png'
import doneBtn from '../Resources/checkA.png'
import undoBtn from '../Resources/undo.png'

export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {update:true}
        this.updateComponent = () => this.setState({update:!this.state.update});
    }


    render(){
        if(this.props.todoList.length>0)
            return(
                <div className="section todoSection">
                    {this.props.todoList.map((elem,index) => {
                        return (
                            <div key={index+elem.text} className={elem.isDone ? 'todoElem todoElemDone' : 'todoElem'}>
                                <span>{elem.text}</span>
                                <div className="todoBtnDiv">
                                    <img onClick={()=>{this.props.changeDone(elem.text)}} className={elem.isDone ? 'todoBtn btnUndo':'todoBtn btnDone'} src={elem.isDone ? undoBtn : doneBtn}></img>
                                    <img onClick={()=>{this.props.deleteTodo(elem)}} className="todoBtn" src={deleteBtn}></img>
                                </div>
                            </div>
                        )
                    })}

                    <button onClick={this.props.eraseAll} className="eraseBtn">Erase all</button>
                </div>
            )
        else
            return(
                <div className="section noTodos">
                    <span>You have no todos :/</span>
                </div>
            )
    }


    componentDidUpdate(){
    }
}


