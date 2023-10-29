import UserProvider from "./context/UserProvider";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from './firebase';


function App() {
  const auth = getAuth();

  const signInSubmitHandler = values => console.log(values);
  const signUpSubmitHandler = values => {

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        //Signed up 
        //Set displayName
        updateProfile(userCredential.user, {
          displayName: values.name
        }).then(() => {
          const user = {
            id: userCredential.user.uid,
            name: userCredential.user.displayName,
            email: userCredential.user.email
          };
          

        }).catch((error) => {
          throw new Error(error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
      });
  }
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(JSON.stringify(user))
  //     const u = {
  //       id: user.uid,
  //       name: user.displayName,
  //       email: user.email
  //     };
  //     setUser(u);
  //   } else {
  //     console.log('signed out...')
  //   }
  // });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/signin" element={<SignIn onSubmit={signInSubmitHandler} />} />
          <Route path="/signup" element={<SignUp onSubmit={signUpSubmitHandler} />} />
        </Routes>
      </BrowserRouter>

      {/*       
      <UserProvider>
        <Page1 />
        <Page2 />
      </UserProvider> */}
    </div>
  );
}

export default App;
