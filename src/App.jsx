import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import SignInSignOut from "./pages/SignInSignOut";
import { auth } from "./utils/Firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      // second;
      unsubscribe();
    };
  }, []);

  return (
    <div className="">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInSignOut />} />
      </Routes>
    </div>
  );
}

export default App;
