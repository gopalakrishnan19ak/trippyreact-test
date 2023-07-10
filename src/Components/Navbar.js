import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {clicked : false };
  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">
           Tebs
        </h1>
        <div className="Menuicon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
         
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
