import React, { useState } from "react";
import "./Login.css";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //When the login button is pressed, the value of the states of textboxes
  //are passed to Firebase to authenticate. Firebase does its magic, and if
  //the authentication is successful returns a promise or throws an error.
  const signIn = (e) => {
    //prevent the page from reloading because of the form tag
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  //Something similar to Signin happens with register.
  //If there is another user with same details, Firebase got you covered.
  const register = (e) => {
    //prevent the page from reloading because of the form tag
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>S'identifier</h1>

        <form>
          <h5>Adresse E-mail</h5>
          {/* Whenever the value of the textboxes change, we change the value of state */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Mot de passe</h5>
          {/* Whenever the value of the textboxes change, we change the value of state */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            S'identifier
          </button>
        </form>

        <p>
          En continuant, vous acceptez les conditions d'utilisation et la notice
          Protection de vos informations personnelles de Mamazon.
        </p>

        <button onClick={register} className="login__registerButton">
          Créer votre compte Mamazon
        </button>
      </div>
    </div>
  );
};

export default Login;
