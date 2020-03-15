import React, { Component } from 'react'
import '../../Style/card.css'
import '../../Style/App.css'
export default class hotelbox extends Component {
    
    render() {
        return (
            <div className="card hotel-list-card noPadding" onClick={()=>{this.props.click();}}>
                <div className="hotelThumbnail"/>
                <div className="hotelDetail">
                    <div className="detailLeft">
                        <p className="greyText nomarginblock leftText thaiFont listFont">Hotel A</p>
                        <p className="greyText nomarginblock leftText thaiFont listFont">9500.- / วัน</p>
                    </div>
                    <div className="detailRight">
                        <p className="content greenText nomarginblock leftText thaiFont listFont rightAlign">ว่าง</p>
                        <p className="content greyText nomarginblock leftText thaiFont listFont rightAlign">อาหาร 3 มื้อ/สระว่ายน้ำ/2 เตียง......................</p>
                    </div>
                </div>
            </div>
        )
    }
}
