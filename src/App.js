import UserProvider from "./context/UserProvider";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './firebase';


function App() {

  const auth = getAuth();

  const signInSubmitHandler = values => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
      });
  }

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


  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path="/signin" element={<SignIn onSubmit={signInSubmitHandler} />} />
            <Route path="/signup" element={<SignUp onSubmit={signUpSubmitHandler} />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>

      {/*       
      <UserProvider>
        <Page1 />
        <Page2 />
      </UserProvider> */}
    </div>
  );
}

export default App;
