import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class redirect extends Component {
    componentDidMount(){
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default withRouter(redirect)
