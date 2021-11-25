//props is used to pass parent properties to child component

function MyPropComponent(props){
    const { name,age,children} = props;
    console.log(name);
    console.log(age);

return(
    <>
    <h2>hello i am {name}, I am {age}
    yrs old and iam inside MyPropComponent</h2> {children}
    </>
);
}
export default MyPropComponent;