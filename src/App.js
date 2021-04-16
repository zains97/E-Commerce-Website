import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db, auth } from "./firebase";
import { UserContext } from "./Context/UserContext";
import UserProfile from "./Components/UserProfile";

function App() {
  const [cartItems, setCartItems] = useState([]);
  let [user, setUser] = useContext(UserContext);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((item) => ({
        id: item.id,
        data: item.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(JSON.parse(localStorage.getItem("user")));
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(user);
  return (
    <Router>
      {!user ? (
        <LogIn />
      ) : (
        <Container>
          <Header signOut={signOut} cartItems={cartItems} />
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/user">
              <UserProfile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
