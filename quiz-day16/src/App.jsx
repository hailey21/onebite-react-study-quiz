import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef, useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

const mockDate = [
  {
    id: 0,
    name: "김수정",
    email: "test@test.com",
  },
  {
    id: 1,
    name: "김수정2",
    email: "test2@test.com",
  },
];

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockDate);
  const idRef = useRef(2);

  const onCreate = useCallback((contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: contact.name,
        email: contact.email,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contactList={contactList} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
