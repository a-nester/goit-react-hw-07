import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </>
  );
}

export default App;
