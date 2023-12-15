import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sign from "./components/Sign";
import UserList from "./components/User";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div class="w-full h-screen">
      <Routes>
        <Route element={<Dashboard />} path="*" />
        <Route element={<Sign meta={true} />} path="/sign-up" />
        <Route element={<Sign meta={false} />} path="/sign-in" />
        <Route element={<UserList />} path="/users" />
      </Routes>
    </div>
  );
}

export default App;
