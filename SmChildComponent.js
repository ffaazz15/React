import React, {Component} from "react"
class  SmChildComponent extends Component{
    render(){
        const{name,onProfit}=this.props;
        return <><h2> {name} </h2>
        <button onClick={onProfit} >profit</button>
   
       </>
    }
}
export default SmChildComponent;