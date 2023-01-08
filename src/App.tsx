import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Page from "./components/Page/Page/Page";
import LoginPage from "./components/Page/LoginPage/LoginPage";
import Content from "./components/CardList/CardList";
import MainContent from "./components/MainContent/MainContent";
import Profile from "./components/ProfileContent/ProfileContent";

function App() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken')

  React.useEffect(() => {
    if (!authToken) {
      navigate('/login')
    }
  }, [authToken])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="" element={<MainContent />} />
          <Route path="cards" element={<Content />} />
          <Route path="favourites" element={<Content />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
