import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Toggle from "./components/toggle/Toggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import ServiceList from "./components/serviceList/ServiceList";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Header />
        <Toggle />
        <Switch>
          <Route path="/intro" component={Intro} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={ProjectList} exact />
          <Route path="/services" component={ServiceList} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
