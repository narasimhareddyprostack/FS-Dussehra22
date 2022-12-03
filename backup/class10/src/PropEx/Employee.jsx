let Employee = (props) => {



    return <div>
        <h1>Employee Comp</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Name: {props.user.user_Name}</h2>
        <h2>Employee Name: {props.user.email}</h2>
    </div>

}
export default Employee