import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Welcome to the Props Example</p>
      <Greeting name="Alice">
        <p>Alice lives in London</p>
      </Greeting>
      <Greeting name="Aditya">
        <p>Aditya lives in London</p>
      </Greeting>
      <Greeting name="Harsha">
        <p>Harsha lives in London</p>
      </Greeting>
    </div>
  );
}

export default App;

// function Greeting(props) {
//   console.log(props);
//   return (
//     <>
//       <h2>Hello {props.name}!!</h2>
//       {props.children}
//     </>
//   );
// }

//Destructuring
function Greeting({ name, children }) {
  // console.log(props);
  return (
    <>
      <h2>Hello {name}!!</h2>
      {children}
    </>
  );
}
