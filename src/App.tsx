import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LogedIn from "./components/state/LogedIn";
import User from "./components/state/User";
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
      {/* event as shared props */}
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />

      <Input value="input props" handleChange={(event) => console.log(event)} />
      <Input />

      <Container style={{ border: "1px solid red", padding: "1rem" }} />

      <LogedIn />

      <User />
    </div>
  );
}

export default App;
