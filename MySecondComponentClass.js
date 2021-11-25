import React ,{Component} from "react";
 class MySecondComponentClass extends Component{
     state = {
         balance: 10000,
         accountNo:"aaaa",
     };
     balanceIncrement = (value) => {
         this.setState({
             balance:this.state.balance + value
         });
     };
     onProfitClickHandler=()=>{
         console.log("im clicked now");
         this.balanceIncrement(1);
         //this.setState({
        //      balance: this.state.balance+1,
        //  }) happens internally
    };
    onDoubleProfitClickHandler=()=>{
        console.log("im clicked now");
        this.balanceIncrement(100);
        //this.setState({
       //      balance: this.state.balance+1,
       //  }) happens internally
   };
     render(){ //state->something which is self made --where as props is getting property from parents 
        const{name,age,accountNo}=this.props;  

         return <>       
         
         <h1> hello my name is {name} .my age is {age} and acount no is { accountNo} my balance is 
            {this.state.balance}  {this.props.accountNo}
           
            </h1> 
            <button  onClick={this.onProfitClickHandler}>
            single profit </button>
            <button  onClick={this.onDoubleProfitClickHandler}>
            double profit</button>
            </>
            
     
      
     }
    }
    export default MySecondComponentClass;