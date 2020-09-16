import React from "react";
import "./App.css";
import Card from "./Components/Card";
import faker from "faker";

function App() {
  return (
    <div className="App">
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
      <Card
        title={faker.lorem.words()}
        text={faker.lorem.text()}
        name={faker.name.firstName()}
        lastName={faker.name.lastName()}
        img={faker.image.image()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
