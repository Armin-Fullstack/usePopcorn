import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import StarRating from './starRating'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating = {10} />
    <StarRating maxRating = {4} color='blue' size={20} message={["terrible" , "good" , "okay" , "amazing"]} defaultRating={3}/> */}
  </React.StrictMode>,
)
