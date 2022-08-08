import React, { useEffect } from 'react'
import noteContext from '../Context/NoteContext'
import { useContext } from 'react'
const About = () => {
  const title = useContext(noteContext)

  useEffect(() => {
    title.setTitle("About Component....");
  }, [])

  return (
    <div>
          About
    </div>
  )
}

export default About  
