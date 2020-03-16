import React, { Component } from 'react'
import "../Style/book.css"
import {getList,deleteList} from "../Constant/api"
export default class book extends Component {
    constructor(){
        super();
        this.state = {
            list : []
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.addBook = this.addBook.bind(this);
    }
    async componentDidMount(){
        this.addBook();
    }
    async addBook(){
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
    async deleteBook(id){
        await fetch(deleteList+"?username="+localStorage.getItem('username')+"&id="+id,{
            method : "DELETE",
            header : {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(() =>{
            console.log("deleted")
            this.addBook()
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
                        {
                            this.state.list.map((data,index)=>{
                                return (
                                    <tr className = "content-table">
                                        <td className="content-name heading2 blackText">{data.hotelName}</td>
                                        <td className="content-price heading2 blackText">{data.price}</td>
                                        <td className="content-dob heading2 blackText">{data.dob}</td>
                                        <td className="content-dou heading2 blackText">{data.dou}</td>
                                        <td className="content-delete heading2 blackText" onClick={()=>{this.deleteBook(data.id,index)}}>X</td>
                                    </tr>
                            )})
                        }
                    </table>
                </div>
            </div>
        )
    }
}
