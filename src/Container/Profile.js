import React from 'react'
import noteContext from '../Context/NoteContext'
import { useContext , useEffect } from 'react'

const Profile = () => {
  const title = useContext(noteContext)

  useEffect(() => {
    title.setTitle("Profile Component....");
  }, [])


  return (
    <div>Profile</div>
  )
}

export default Profile