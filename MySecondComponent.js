// // step 1
// function MySecondComponent(){
//     return <h2> iam inside MySecondComponent</h2>;
// }
// export default MySecondComponent;
// //step 2
// const MySecondComponent = () => {
//     return <h2> iam inside MySecondComponent</h2>;
// };
// export default MySecondComponent;
//step3

// import FirstChild from "./FirstChild"
// //similarly import second child
// export default () => {
//     return (
//     <>
//     <h2> iam inside MySecondComponent </h2>
//     <FirstChild />
//     </>
//     );
// };

//____________--------------=-------------------------------------------------------
//props understanding
// function MySecondComponent(props){
//     const { name,age} = props;
//     const { name1,}=props
//     console.log(name);
//     console.log(age);
//  console.log(name1);
//  console.log(age);

// return(
//     <>
//     <h2>hello i am {name}, I am {age}
//     yrs old and iam inside MySecondComponent</h2>
//     <h2>hello iam {name1},I am {age} yrs old</h2>
//     </>
    
// );
// };
// export default MySecondComponent;
//-------------------------------------------------------------------------------------
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import propchild from "./propchild";
export default (props)=>{
    const {parentComponentName }= props;
    return <div>
        <div>
        <h2>hello from MyFirstComponent called from {parentComponentName}</h2>
        
 
    </div>    
    <FirstChild parentComponentName = {"MySecondComponent"}/>
    <SecondChild parentComponentName = {"MySecondComponent"}/>
    <propchild parentComponentName = {"MySecondComponent"}/>

    
    </div>

}