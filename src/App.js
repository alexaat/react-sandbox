import UserProvider from "./context/UserProvider";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


function App() {

  const signInSubmitHandler = values => console.log(values);
  const signUpSubmitHandler = values => console.log(values);

  return (
    <div className="App">
      <SignIn onSubmit={signInSubmitHandler}/>
      <SignUp onSubmit={signUpSubmitHandler}/>

{/*       
      <UserProvider>
        <Page1 />
        <Page2 />
      </UserProvider> */}
    </div>
  );
}

export default App;
