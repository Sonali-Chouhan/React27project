import React from 'react'
import noteContext from '../Context/NoteContext'
import { useContext , useEffect } from 'react'
const Contact = () => {

  const title = useContext(noteContext)

  useEffect(() => {
    title.setTitle("Contect Component....");
  },)

  return (
    <div>
      Contact
    </div>
  )
}

export default Contact
