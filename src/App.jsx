import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNotes from "./pages/CreateNotes";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNotes />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
