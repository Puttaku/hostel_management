import React, { Component } from 'react'
import '../Style/home.css'
import Hotelbox from "./object/hotelbox"
export default class home extends Component {
    componentDidMount(){
        document.body.className="homePage";
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
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                    <Hotelbox/>
                </div>
            </div>
        )
    }
}
