import React, { Component } from 'react'
import "../Style/book.css"
import {getList} from "../Constant/api"
export default class book extends Component {
    constructor(){
        super();
        this.state = {
            list : {}
        }
    }
    async componentDidMount(){
        await fetch(getList,{
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
                list : res.Data
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <div className="bookedContainer">
                <p className="heading2 login-heading thaiFont-thick bigFont leftMargin blackText">โรงแรมที่จอง</p>
                <div className="bookedTableContainer">
                    <table className="bookedTable">
                        <tr className = "heading-table">
                            <th className="heading-name heading2 blackText thaiFont-thick">ชื่อโรงแรม</th>
                            <th className="heading-price heading2 blackText thaiFont-thick">ราคา</th>
                            <th className="heading-dob heading2 blackText thaiFont-thick">วันที่จอง</th>
                            <th className="heading-dou heading2 blackText thaiFont-thick">วันที่ใช้โรงแรม</th>
                            <th className="heading-delete"></th>
                        </tr>
                        <tr className = "content-table">
                            <td className="content-name heading2 blackText">Hotel A</td>
                            <td className="content-price heading2 blackText">9500.-</td>
                            <td className="content-dob heading2 blackText">19/11/2563</td>
                            <td className="content-dou heading2 blackText">21/11/2563</td>
                            <td className="content-delete heading2 blackText">X</td>
                        </tr>
                        <tr className = "content-table">
                            <td className="content-name heading2 blackText">Hotel A</td>
                            <td className="content-price heading2 blackText">9500.-</td>
                            <td className="content-dob heading2 blackText">19/11/2563</td>
                            <td className="content-dou heading2 blackText">21/11/2563</td>
                            <td className="content-delete heading2 blackText">X</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
