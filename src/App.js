import UserProvider from "./context/UserProvider";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const signInSubmitHandler = values => console.log(values);
  const signUpSubmitHandler = values => console.log(values);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
