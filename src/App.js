import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import BookForm from "./pages/BookForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="pb-16">
      <Router>
        <NavBar />
        <div className="w-8/12 mx-auto">
          <Switch>
            <Redirect exact from="/" to="/books" />
            <Route exact path="/books" component={Home} />
            <Route exact path="/books/create" component={BookForm} />
            <Route exact path="/books/show/:id" component={BookDetails} />
            <Route exact path="/books/edit/:id" component={BookForm} />
            <Route
              path="*"
              component={() => {
                return "404";
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
