import "./App.css";
import Dropdown from "./DropDown";

const items = ["Item 1", "Item 2", "Item 3"];

function App() {
  return (
    <>
      <Dropdown
        items={items}
        title={"Оберіть ваше місто"}
        placeholder={"Пошук..."}
      />
      <Dropdown
        items={items}
        title={"Оберіть ваше місто"}
        placeholder={"Пошук..."}
      />
    </>
  );
}

export default App;
