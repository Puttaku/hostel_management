import React, { Component } from 'react'
import '../Style/detail.css'
import {withRouter} from "react-router-dom"
import {getHotel} from "../Constant/api"
import Bookingcard from "./object/bookingbox"
class detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            booking : false,
            data : {},
            picture : [],
            thumbnail : 0,
            detail : []
        }
        this.openBookingBox = this.openBookingBox.bind(this);
        this.changeThumb = this.changeThumb.bind(this);
    }
    openBookingBox(){
        console.log(this.state.booking)
        this.setState ({
            booking : this.state.booking === true ? false : true
        })
    }
    changeThumb(num){
        this.setState({
            thumbnail : num
        })
    }
    async componentDidMount(){
        var search = this.props.location.search;
        var id = search.slice(4);
        await fetch(getHotel+"?id="+id,{
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
                data : res.Data,
                picture : res.Data.pic,
                detail : res.Data.Detail
            })
            console.log(this.state);
        })
    }
    render() {
        return (
            <div className="detailContainer">
                {this.state.booking? <Bookingcard click={()=>{this.openBookingBox()}} id={this.state.data.id}/> : ""}
                <div className="detailHeaderContainer">
                    <div className="detailHeaderLeft">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">{this.state.data.name}</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">{this.state.data.locate}</p>
                    </div>
                    <div className="detailHeaderRight">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin greenText"style={{color : this.state.data.isAvailiable === true ? "" : "red"}}>{this.state.data.isAvailiable === true ? "ว่าง" : "ไม่ว่าง"}</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">{this.state.data.Detailsummary}</p>
                    </div>
                </div>
                <div className="detailPicContainer">
                    <div className="Bigpicture" style = {{backgroundImage : "url(" + this.state.picture[this.state.thumbnail] + ")"}}/>
                    <div className="SmallpictureContainer">
                        <div className="Smallpicture" onClick={()=>{this.changeThumb(0)}} style = {{backgroundImage : "url(" + this.state.picture[0] + ")"}}/>
                        <div className="Smallpicture" onClick={()=>{this.changeThumb(1)}} style = {{backgroundImage : "url(" + this.state.picture[1] + ")"}}/>
                        <div className="Smallpicture" onClick={()=>{this.changeThumb(2)}} style = {{backgroundImage : "url(" + this.state.picture[2] + ")"}}/>
                        <div className="Smallpicture" onClick={()=>{this.changeThumb(3)}} style = {{backgroundImage : "url(" + this.state.picture[3] + ")"}}/>
                    </div>
                </div>
                <div className="detailPriceContainer">
                    <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText priceText">ราคา : 9500.- / คืน</p>
                    <button className="Button submitLoginButton thaiFont priceButton heading2" onClick={()=>{this.openBookingBox()}}>จองเลย</button>
                </div>
                <div className="detailMainContainer">
                    <div>
                        <p className="heading3 login-heading thaiFont-thick leftMargin blackText priceText">รายละเอียด</p>
                        <div className="detailList">
                            {
                                this.state.detail.map((data)=>{
                                return <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- {data}</p>
                                })
                            }
                        </div>
                    </div>
                    <div className="detailLocation">
                        <p className="heading3 login-heading thaiFont-thick leftMargin blackText priceText blockendMargin">ที่ตั้ง</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">{this.state.data.location}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(detail)