import React, { Component } from 'react'
import '../Style/home.css'
import Hotelbox from "./object/hotelbox"
import {withRouter} from "react-router-dom"
import {getHotel} from "../Constant/api"
class home extends Component {
    constructor(props){
        super(props)
        this.clickChoose = this.clickChoose.bind(this);
        this.availBox = this.availBox.bind(this)
        this.state = {
            hotels : [],
            onlyAvail : false
        }
    }
    async componentDidMount(){
        document.body.className="homePage";
        await fetch(getHotel,{
            method : "GET",
            header : {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => {
            return res.json()
        }).then(res =>{
            console.log(res)
            this.setState({
                hotels : res.Data.List
            })
            console.log(this.state.hotels);
        })
    }
    clickChoose(id){
        this.props.history.push("/detail?id="+id);
    }
    availBox(){
        this.setState({
            onlyAvail : !this.state.onlyAvail
        })
        console.log(this.state.onlyAvail);
    }
    render() {
        return (
            <div className="homeContainer">
                <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">รายชื่อโรงแรม</p>
                <div className="flexOn leftMargin">
                    <input onChange={()=>{this.availBox()}} type="checkbox" className="checkBox"/>
                    <p className="heading2 greyText leftText thaiFont" style={{marginLeft : "10px"}}>แสดงโรงแรมที่ว่างเท่านั้น</p>
                </div>
                <div className="hotelListContainer">
                    {this.state.onlyAvail === true ? 
                        this.state.hotels.map((data)=>{
                            return data.isAvailiable === true ? <Hotelbox click={()=>this.clickChoose()} key={data.id} data ={data}/> : ""
                        }) : 
                        this.state.hotels.map((data)=>{
                            return <Hotelbox click={()=>this.clickChoose(data.id)} key={data.id} data ={data}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(home)
