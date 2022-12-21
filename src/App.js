/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Todo from './Components/Todo'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {todoList : [{text : 'example todo',isDone : false}]}

    this.addTodo = (text)=>{
      this.setState({todoList : [...this.state.todoList,{text : text,isDone : false}]})
    }

    this.changeDone = (text)=>{
      let tempArr = this.state.todoList;
      tempArr.map(elem => {
        if(elem.text===text){
          elem.isDone = !elem.isDone;
        }
        return elem;
      })
      this.setState({todoList : tempArr});
    }
    this.deleteTodo = (elem) => {
      let tempArr = this.state.todoList;
      tempArr.splice(tempArr.findIndex(obj => {return obj === elem}),1);
      this.setState({todoList : tempArr});
    }
    this.sortTodoList = () =>{
      const compare = ( a, b ) =>{
        if(a.isDone && !b.isDone)
          return 1;
        if(!a.isDone && b.isDone)
          return -1;
        return 0;
      }
      this.state.todoList.sort(compare);
    }
    this.eraseAll = () =>{
      if(window.confirm('Erase all todos?'))
        this.setState({todoList : [{text : 'example todo',isDone : false}]})
    }
  }


  render(){
    this.sortTodoList();
    return (
      <div className='App'>
        <Header/>
        <Input addTodo={this.addTodo}/>
        <Todo eraseAll={this.eraseAll} deleteTodo={this.deleteTodo} changeDone={this.changeDone} todoList={this.state.todoList}/>
      </div>
    );
  }
    
}

export default App;
