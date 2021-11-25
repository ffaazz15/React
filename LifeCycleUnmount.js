import React,{Component} from "react";
export default class LifeCycleUnmount2511 extends Component{
    render(){
        console.log("in Render");
        return <h1> in life cycle component</h1>
    }
    componentWillUnmount2511(){
        console.log("in component will unmount");
    }
}