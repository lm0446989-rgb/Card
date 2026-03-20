import React from 'react'
import profileImage from '../../assets/images/profile.jpg'
import "./Card.css"
const Card = () => {
  return (
    <>
      <div className='container'>
        <div className='card'>
          <img src={profileImage} alt="Profile" />
          <p>PRIYA</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sapiente repellat ut rerum non iure, dicta quam, molestiae ipsa tempore blanditiis quisquam consectetur error adipisci.</p>
        </div>
      </div>

    </>
  )
}

export default Card
