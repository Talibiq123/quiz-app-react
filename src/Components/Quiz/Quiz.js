import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>Which device is required for the internet connection?</h2>
      <ul>
        <li>Model</li>
        <li>Router</li>
        <li>Lan cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div class="index">1 of 5 Questions</div>
    </div>
  )
}

export default Quiz
