import React from "react";
import SignForm from "./components/form/SignForm";
import "./App.css";

const camposForm = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    longMinima: 8,
    longMaxima: 30,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    longMinima: 8,
    longMaxima: 30,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    longMinima: 8,
    longMaxima: 30,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    longMinima: 8,
    longMaxima: 30,
  },
];

function App() {
  return <SignForm camposForm={camposForm} />;
}

export default App;
