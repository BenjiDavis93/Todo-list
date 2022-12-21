/* eslint-disable no-useless-constructor */
import React from "react";
import './Header.css';
import logo from '../Resources/sticky-note.png'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {time : new Date()}
    }
    render(){
        return(
            <header className="section">
                <div className="logoContainer">
                    <img alt="logo" src={logo}></img>
                    <span>DAILY ORGANIZER</span>
                </div>
                <div className="timeDiv">
                    <span>{this.state.time.toLocaleString().slice(-8)}</span>
                </div>
            </header>
        )
    }


    componentDidMount(){
        // eslint-disable-next-line no-unused-vars
        let clock = setInterval(()=>{
            this.setState({time : new Date()})
        },1000)
    }
}


