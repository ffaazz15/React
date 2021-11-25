import PropsTypes from "prop-types";
function PropsValidate(props)
{
    const {name ,age} = props;
    return(
        <>
        <h2> Name: {name}</h2>
        <h2>Age :{age}</h2>
        <h2>after 5 year my age  will be :{age +5}</h2>
  </> 
   );
}

PropsValidate.propsTypes ={   //built in proptertis so p in propTypes must be small
    name:PropsTypes.string,
    age:PropsTypes.number.isRequired, //isRequired is used to give mandate that that data type is defiantly needed
    children:PropsTypes.element.isRequired,
    renderable: PropsTypes.node,
    rollNumber:PropsTypes.oneOfType([PropsTypes.string,PropsTypes.number]),//means -> it should be string 
                                               //followed by number
    remark:PropsTypes.any, //by using propstype as any we have no restictions on usage of 
                             //any type of data type like string-number
    myArr:PropsTypes.arrayOf(PropsTypes.number), //telling mrArr must be only in form of number if String is used it will give error in console                        
 //myObject:propsTypes.shape({ //it will allow  new properties
//name:PropTypes.string,
//age:PropTypes.number,
//}),
 myObject:PropsTypes.exact({ //it will allow  new properties
name:PropsTypes.string,
age:PropsTypes.number,
}),




};
export default PropsValidate;