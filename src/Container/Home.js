import React, { useContext, useEffect } from 'react'

import noteContext from '../Context/NoteContext'

const Home = () => {
  const title = useContext(noteContext)

  useEffect(()=>{
       title.setTitle("Home Components......")
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Home
