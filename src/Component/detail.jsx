import React, { Component } from 'react'
import '../Style/detail.css'

import Bookingcard from "./object/bookingbox"
export default class detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            booking : false
        }
        this.openBookingBox = this.openBookingBox.bind(this);
    }
    openBookingBox(){
        console.log(this.state.booking)
        this.setState ({
            booking : this.state.booking === true ? false : true
        })
    }
    render() {
        return (
            <div className="detailContainer">
                {this.state.booking? <Bookingcard click={()=>{this.openBookingBox()}}/> : ""}
                <div className="detailHeaderContainer">
                    <div className="detailHeaderLeft">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">Hotel A</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">Bangkok , Thailand</p>
                    </div>
                    <div className="detailHeaderRight">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin greenText">ว่าง</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">อาหาร 3 มื้อ/สระว่ายน้ำ/2 เตียง</p>
                    </div>
                </div>
                <div className="detailPicContainer">
                    <div className="Bigpicture"/>
                    <div className="SmallpictureContainer">
                        <div className="Smallpicture"/>
                        <div className="Smallpicture"/>
                        <div className="Smallpicture"/>
                        <div className="Smallpicture"/>
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
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- อาหาร 3 มื้อ</p>
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- บริการสระว่ายน้ำ</p>
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- ห้องนอน 1 ห้อง 2 เตียง 1 ห้องน้ำ</p>
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- เครื่องทำน้ำอุ่น</p>
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- บาร์</p>
                            <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">- ซาวนาร์</p>
                        </div>
                    </div>
                    <div className="detailLocation">
                        <p className="heading3 login-heading thaiFont-thick leftMargin blackText priceText blockendMargin">ที่ตั้ง</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText priceText">หมู่ที่ 5 บ้านตาลสุม. ตำบล : ตาลสุม. อำเภอ : ตาลสุม. จังหวัด : อุบลราชธานี. รหัสไปรษณีย์ : 34330.</p>
                    </div>
                </div>
            </div>
        )
    }
}
