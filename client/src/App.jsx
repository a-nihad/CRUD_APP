import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";

function App() {
  return (
    <div className="flex h-screen justify-center pt-20 bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
