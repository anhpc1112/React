import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment, useEffect, useState } from "react";
import Login from "./components/Login";
import UserContext from "./context/user-context";

function App() {
  var [user, setUser] = useState({ isLogin: false });

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("user"));
    if (userLogin) {
      setUser(userLogin);
    }
  }, []);

  function clickHandlerLogout() {
    setUser({ isLogin: false });
    localStorage.clear();
  }

  const clickHandlerLogin = (userLogin) => {
    const userSave = { ...userLogin, isLogin: true };
    setUser(userSave);
    localStorage.setItem("user", JSON.stringify(userSave));
  };

  return (
    <UserContext.Provider
      value={
        // isLogin: user.isLogin
        {...user}
      }
    >
      <Header
        // user={{ ...user }}
        clickHandlerLogout={clickHandlerLogout}
      ></Header>
      {user.isLogin ? (
        <>
          <Body></Body>
        </>
      ) : (
        <>
          <Login clickHandlerLogin={clickHandlerLogin}></Login>
        </>
      )}
      <Footer></Footer>
    </UserContext.Provider>
  );
}
export default App;
