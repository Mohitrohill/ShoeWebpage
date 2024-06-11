import React from 'react'
function Main() {
  return (
    <main className='main-body container'>
    <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="main-btn">
            <button className='btn2'>Shop Now</button>
            <button className='btn3'>Category</button>
        </div>
        <div className="main-line">
            <p>Also Available On</p>
            <div className="main-icon">
                <img src="images/flipkart.png" alt="flipkart-logo" />
                <img src="images/amazon.png" alt="amazon-logo" />
            </div>
        </div>
    </div>
    <div className="main-image">
        <img id='shoe' src="images/hero-image.png" alt="" />
    </div>  
    </main>
  )
}

export default Main