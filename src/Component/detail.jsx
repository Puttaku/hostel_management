import React, { Component } from 'react'
import '../Style/detail.css'
export default class detail extends Component {
    render() {
        return (
            <div className="detailContainer">
                <div className="detailHeaderContainer">
                    <div className="detailHeaderLeft">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">Hotel A</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">Bangkok , Thailand</p>
                    </div>
                    <div className="detailHeaderRight">
                        <p className="heading2 login-heading thaiFont-thick bigFont leftMargin greenText">ว่าง</p>
                        <p className="heading2 login-heading thaiFont-thick leftMargin greyText">อาหาร  3 มื้อ/สระว่ายน้ำ/2 เตียง</p>
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
                    <button className="Button submitLoginButton thaiFont priceButton heading2">จองเลย</button>
                </div>
            </div>
        )
    }
}
