import AppRouter from "./Router";
import { useState } from "react";
import { getAuth } from "firebase/auth";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useState(getAuth.currentUser);

  return (
    <AppRouter isLoggedIn = {isLoggedIn}/>
  );
}

export default App;