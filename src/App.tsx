// import './App.css';
import "@fontsource/roboto/400.css";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { changeLoginState } from "./redux/slices/AuthorizationSlice/slice";
import "./scss/libs/app.scss";

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
function App() {
  const dispatch = useDispatch();
  username === "admin" && password === "12345"
    ? dispatch(changeLoginState(true))
    : dispatch(changeLoginState(false));

  return (
    <Routes>
      <Route path="/demo-app" element={<MainLayout />}>
        <Route path="/demo-app/auth" element={<AuthPage />} />
        <Route path="/demo-app/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
