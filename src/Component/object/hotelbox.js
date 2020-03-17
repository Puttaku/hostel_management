import React, { Component } from 'react'
import '../../Style/card.css'
import '../../Style/App.css'
export default class hotelbox extends Component {
    render() {
        return (
            <div className="card hotel-list-card noPadding" onClick={()=>{this.props.click();}}>
                <div className="hotelThumbnail" style = {{backgroundImage : "url(" + this.props.data.pic[0] + ")"}}/>
                <div className="hotelDetail">
                    <div className="detailLeft">
                        <p className="greyText nomarginblock leftText thaiFont listFont">{this.props.data.name}</p>
                        <p className="greyText nomarginblock leftText thaiFont listFont">{this.props.data.Price}.- / วัน</p>
                    </div>
                    <div className="detailRight">
        <p className="content greenText nomarginblock leftText thaiFont listFont rightAlign" style={{color : this.props.data.isAvailiable === true ? "" : "red"}}>{this.props.data.isAvailiable === true ? "ว่าง" : "ไม่ว่าง"}</p>
        <p className="content greyText nomarginblock leftText thaiFont listFont rightAlign">{this.props.data.Detailsummary}</p>
                    </div>
                </div>
            </div>
        )
    }
}
