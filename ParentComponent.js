import { Component } from "react";
import ChildComponent from './ChildComponent'
class ParentComponent extends Component{
    state={
 balance:0,
    }
  
    onProfit=()=>this.setState({balance:this.state.balance +1});
    onExpense=()=>{
        if(this.state.balance===0){
            return;
        }
        this.setState({balance:this.state.balance -1}); }
    render(){
return(
<div><h1>Parent {this.state.balance}
</h1>
<button onClick={this.onProfit}>family profit</button>
   <button onClick={this.onExpense}>expense</button>
   <ChildComponent name={'fazil'} onProfit={this.onProfit} onExpense={this.onExpense}></ChildComponent>
   <ChildComponent name={'anurag'} onProfit={this.onProfit} onExpense={this.onExpense}></ChildComponent></div>

   
); 
}
}
export default ParentComponent;