//import logo from './logo.svg';
//import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MyFirstComponentClass from './MyFirstComponentClass';
import MySecondComponent from './MySecondComponent';
import PropsComponent from './PropsComponent';
import PropsValidate from "./PropsValidate";
import MySecondComponentClass from './MySecondComponentClass';
import childComponent from './childComponent';

 function App() {
   const name = "Fazil";
  //  const name1 = "Faaaa";

  return (
    <div>
      <childComponent name={"fazil"}  /> 
      <childComponent name={"sameer"} /> 
     
      </div>
      );
      };

{/*       
      <PropsValidate name = {"fazil"} age ={23}
      renderable ={"some String"}
      rollNumber={10}
      remark={"some remark"} //-> used in making propchild
        myArr={[1,2,3,4]}
        myObject={{
          name:"fazil",
          age:29, */}
{/*        
      */}
  {/* );
 }; */} 
//    {/* }

    //     }
    //     /</div>>
      
    //     <h1>hello</h1>
    //   </PropsValidate>
  

    // </div> return (
//    <div>
//      <h1>hello world{ name && name.length ? name : "world" }</h1>
// <div>

//   <MyFirstComponent parentComponentName = {"App"}/>
// </div>
// <div>

//   <MySecondComponent parentComponentName = {"App"}/>
// </div>
// <div>

//   <PropsComponent name = {name} age = {29} parentComponentName = {"App"}>
//   <h2>child is created</h2>
//   </PropsComponent>
// </div>
//      {/* <PropsComponent name ={name} age = {23} > */}

     
{/* //      <h2> some data passed from app component</h2> */}
     
     //{/* <MySecondComponent name ={name1} age ={27} /> */}
     //{/* <h2> {1 + 2}</h2>
    //  <MyFirstComponent />
    //  <MySecondComponent /> */}
    // </div>
//      );
//  }
   
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
  
export default App;
