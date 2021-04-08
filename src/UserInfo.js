import { connect } from "react-redux";
import { login, logout } from "./actions";

const UserInfo = (props) => {
  return (
    <div>
      <h2>User details are:</h2>
      <p>User ID: {props.userId}</p>
      <p>Username: {props.username}</p>
      <p>Token: {props.token}</p>
      <button onClick={props.login}>LOGIN</button>
      <button onClick={props.logout}>LOGOUT</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    username: state.username,
    token: state.token,
  };
};

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
