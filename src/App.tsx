import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  // how to pass object as a props

  const personName = {
    first: "Rajat",
    last: "Kurkute",
  };

  // How to pass array as a props
  const nameList = [
    {
      first: "Dipak",
      last: "Rathod",
    },
    {
      first: "Rajat",
      last: "Kurkute",
    },
    {
      first: "Sagae",
      last: "Jadhav",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* sending union types to component as a props */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Umesh Yadav</Heading>
      </Oscar>
      <Greet name="shubhamroy" isLoggedIn={true} />
    </div>
  );
}

export default App;
