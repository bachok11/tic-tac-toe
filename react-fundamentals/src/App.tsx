// import ListGroup from "./components/ListGroup";
// import Message from "./Message";

import Game from "./components/tic-tac-toe/Game";

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Buttons from "./components/Buttons";

function App() {
  //?List Group Example
  // const items = ["Kuala Lumpur", "Singapore", "Bangkok", "Jakarta", "Manila"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  //? Dismissible Alert & Button Example
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <Message /> */}
      {/* <ListGroup
        items={items}
        heading="List of Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* {alertVisible && (
        <Alert onClick={() => setAlertVisibility(false)}>
          <span>This is an alert message.</span>
        </Alert>
      )}
      <Buttons onClick={() => setAlertVisibility(true)}>My Button</Buttons> */}

      {/* <Square /> */}
      <Game />
    </div>
  );
}

export default App;
