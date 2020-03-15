import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import '../../Style/bookingbox.css'
class bookingbox extends Component {
    constructor(props){
        super(props);
        this.gotoBook = this.gotoBook.bind(this);
    }
    gotoBook(){
        this.props.history.push("/booked");
    }
    render() {
        return (
            <div className="card booking-card">
                <div className="closeBookingBox" onClick={this.props.click}>X</div>
                <div className="bookingForm">
                    <p className="heading2 greyText leftText thaiFont">ที่อยู่</p>
                    <input className = "inputBox usernameBox"/>
                    <p className="heading2 greyText leftText thaiFont">เบอร์โทร</p>
                    <input className = "inputBox passwordBox"/>
                    <p className="heading2 greyText leftText thaiFont">วันที่ทำการจอง</p>
                    <input className = "inputBox usernameBox"/>
                    <p className="heading2 greyText leftText thaiFont">จำนวนห้อง</p>
                    <input className = "inputBox passwordBox"/>
                    <div className="bookConfirm">
                        <button className="Button submitLoginButton thaiFont priceButton heading2" onClick={()=>{this.gotoBook()}}>จอง</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(bookingbox)
