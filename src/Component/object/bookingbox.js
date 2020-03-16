import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import '../../Style/bookingbox.css'
import {bookHotel} from "../../Constant/api"
class bookingbox extends Component {
    constructor(props){
        super(props);
        this.gotoBook = this.gotoBook.bind(this);
    }
    componentDidMount(){
        console.log(this.props);
    }
    async gotoBook(){
        if(this.date.value === "" || this.nor.value === "" || this.tel.value === "" || this.address.value === ""){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
        else{
            await fetch(bookHotel+"?id="+this.props.id+"&name="+localStorage.getItem("name")+"&username="+localStorage.getItem("username")+"&date="+this.date.value+"&room="+this.nor.value+"&tel="+this.tel.value+"&address="+this.address.value+"&dob="+Date.now.toString(),{
                method : "POST",
                header : {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => {
                return res.json()
            }).then(res => {
                if(res.Status === 200){
                    alert(res.Key)
                    this.props.history.push("/booked");
                }
                else{
                    alert(res.Key)
                }
            })
        }
    }
    render() {
        return (
            <div className="card booking-card">
                <div className="closeBookingBox" onClick={this.props.click}>X</div>
                <div className="bookingForm">
                    <p className="heading2 greyText leftText thaiFont">ที่อยู่</p>
                    <input name="address" ref={(e)=>this.address = e} className = "inputBox usernameBox"/>
                    <p className="heading2 greyText leftText thaiFont">เบอร์โทร</p>
                    <input name="tel" ref={(e)=>this.tel = e} className = "inputBox passwordBox"/>
                    <p className="heading2 greyText leftText thaiFont">วันที่ทำการจอง</p>
                    <input name="date" ref={(e)=>this.date = e} className = "inputBox usernameBox"/>
                    <p className="heading2 greyText leftText thaiFont">จำนวนห้อง</p>
                    <input name="nor" ref={(e)=>this.nor = e} className = "inputBox passwordBox"/>
                    <div className="bookConfirm">
                        <button className="Button submitLoginButton thaiFont priceButton heading2" onClick={()=>{this.gotoBook()}}>จอง</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(bookingbox)
