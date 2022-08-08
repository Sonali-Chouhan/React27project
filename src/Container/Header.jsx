import React from 'react'
import { useContext } from "react";
import noteContext from '../Context/NoteContext';
const Header = () => {
    const title  = useContext(noteContext);
  return (
    <div style={{backgroundColor : " rgb(47, 84, 99)" , marginBottom: "-22px" }} >
        <h1>
          {
            title ? title.title : "header component..."
          }
         </h1>
    </div>
  )
}

export default Header
