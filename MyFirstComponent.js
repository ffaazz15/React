


// function MyFirstComponent(){
//     return (
//     <>
//     <h2>i am inside my MyFirstComponent</h2>


// <FirstChild />
// </>
//  );
//     }
// export default MyFirstComponent;
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import propchild from "./propchild";
export default (props)=>{
    const {parentComponentName }= props;
    return <div>
        <div>
        <h2>hello from MyFirstComponent called from {parentComponentName}</h2>
        
 
    </div>    
    <FirstChild parentComponentName = {"firstcomponent"}/>
<secondChild parentComponentName = {"firstcomponent"}/>
<propchild parentComponentName = {"firstcomponent"}/> 
    
    </div>

}