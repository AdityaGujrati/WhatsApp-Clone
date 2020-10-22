import { Button } from "@material-ui/core";
import { firebase, auth, provider } from "./firebase";
import React from "react";
// import { } from "./firebase/firebase.utils";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  //dispatch is like  a gun
  const [{}, dispatch] = useStateValue(); //hoo
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(
        (error) => alert(error.message)
        // Handle Errors here.
      );
    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => console.log(result))
    //   .catch((error) => alert(error.    message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://p7.hiclipart.com/preview/922/489/218/whatsapp-icon-logo-whatsapp-logo-png.jpg"
          alt="not found"
        />
        <div className="login_text">
          <h1>Sign in to whatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
