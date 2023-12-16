import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sign from "./components/Sign";
import UserList from "./components/User";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const sign_state = useSelector((state) => state.auth);

  return (
    <div class="w-full h-screen">
      <Routes>
        <Route element={<h1>Error Link</h1>} path="*" />
        {sign_state.signed_in && (
          <>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<UserList />} path="/users" />
          </>
        )}
        <Route element={<Sign meta={true} />} path="/sign-up" />
        <Route element={<Sign meta={false} />} path="/sign-in" />
      </Routes>
    </div>
  );
}

export default App;
