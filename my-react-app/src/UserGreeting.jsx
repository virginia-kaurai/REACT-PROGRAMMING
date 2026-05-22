function UserGreeting(props) {


  const welcomeMessage = <h2>Welcome {props.name}</h2>

  const loginPrompt = <h1>Please register to access this page</h1>
 return (
  props.isatschool ? welcomeMessage : loginPrompt
 );
}
UserGreeting.defaultProps = {

  name:"Guest",
  isatschool:false
}

export default UserGreeting;