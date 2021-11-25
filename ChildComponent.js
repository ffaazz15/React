import { Component } from "react";

class ChildComponent extends Component{
    state={
        balance:0,
           }
           onChildProfit=()=>this.setState({balance:this.state.balance +1});
          // onChildExpense=()=>this.setState({balance:this.state.balance -1});
          onChildExpense=()=>{
            if(this.state.balance===0){           //condition that balance cant be less then 0
                return;
            }
            this.setState({balance:this.state.balance -1}); }
           
    render(){
        const{name,onProfit,onExpense}=this.props;
        const onProfitClick = ()=>{
            console.log('from onProfitClick');
            this.onChildProfit();
            onProfit();
        }
        const onExpenseClick = ()=>{
            console.log('from onProfitClick');
            this.onChildExpense();
            onExpense();
        }
        return<><h2>{name}
        : {this.state.balance}
        </h2>
        {/* <button onClick = {onProfit}>Profit</button> */}
        <button onClick = {onProfitClick}>Profit</button>
        <button onClick = {onExpenseClick}>expense</button>
      
 
        
        </>
         
    }
}
export default ChildComponent;