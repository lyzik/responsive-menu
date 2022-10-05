import React from "react";
import "./menu.css"

const menu = [
        {
          link: "/faktury",
          name: "faktury",
        },
        {
          link: "/dokumenty",
          name: "dokumenty",
        },
        {
          link: "/odczyty",
          name: "odczyty",
        },
        {
          link: "/kontakt",
          name: "kontakt",
        },
      ];
    
const Menu = () =>{
    return (
        <nav>
            {menu.map(el => (
                <a href={el.link}>{el.name}</a>
            ))}
        </nav>
    )
}

export default Menu;