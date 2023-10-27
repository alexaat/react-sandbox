import UserProvider from "./context/UserProvider";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";




function App() {



  return (
    <div className="App">
      <UserProvider>
        <Page1 />
        <Page2 />
      </UserProvider>
    </div>
  );
}

export default App;
