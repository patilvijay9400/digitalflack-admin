import React from 'react'

const Home = () => {
  return (
    <div className='d-flex align-items-center justify-content-center h-100 flex-column'>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="logo"
            width="300"
          />
          <p className="font-32 gray-text">Welcome to Digitalflake Admin</p>
    </div>
  )
}

export default Home