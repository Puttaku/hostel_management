import React, { Component } from 'react'
import '../Style/home.css'
import Hotelbox from "./object/hotelbox"
import {withRouter} from "react-router-dom"
class home extends Component {
    constructor(props){
        super(props)
        this.clickChoose = this.clickChoose.bind(this);
    }
    componentDidMount(){
        document.body.className="homePage";
    }
    clickChoose(){
        this.props.history.push("/detail");
    }
    render() {
        return (
            <div className="homeContainer">
                <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">รายชื่อโรงแรม</p>
                <div className="flexOn leftMargin">
                    <input type="checkbox" className="checkBox"/>
                    <p className="heading2 greyText leftText thaiFont" style={{marginLeft : "10px"}}>แสดงโรงแรมที่ว่างเท่านั้น</p>
                </div>
                <div className="hotelListContainer">
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                    <Hotelbox click={()=>{this.clickChoose()}}/>
                </div>
            </div>
        )
    }
}
export default withRouter(home)
