import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sign from "./components/Sign";
import Header from "./components/Header";
import UserList from "./components/User";

function App() {
  return (
    <div class="w-full h-screen">
      {/* <Routes>
        <Route path="*" />
        <Route element={<Sign meta={true} />} path="/sign-up" />
        <Route element={<Sign meta={false} />} path="/sign-in" />
      </Routes> */}
      <Header />
      <UserList />
    </div>
  );
}

export default App;
