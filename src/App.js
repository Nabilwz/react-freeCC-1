import React, { useState, useEffect } from 'react'

let quotesDB =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const colorsArr = [
    '#4FC1FF',
    '#E8B9AB',
    '#CB769E',
    '#69995D',
    '#D2D7DF',
    '#3AA7A3',
    '#ECA400',
    '#006992',
    '#AFECE7',
    '#81F499',
    '#890620',
    '#B6465F',
    '#8ACDEA',
  ]

  const [quote, setQuote] = useState('hi this is the first quote')
  const [authour, setAuthour] = useState('Nabil')
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState('')
  const [color, setColor] = useState('#92927f')

  const getQuotes = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setQuotesArray(data)
    console.log(data)
  }

  useEffect(() => {
    getQuotes(quotesDB)
  }, [quotesDB])

  const changeQuoteAndAuthour = () => {
    let floorRandomNumber = Math.floor(
      quotesArray.quotes.length * Math.random()
    )
    let colorRandomNumber = Math.floor(colorsArr.length * Math.random())
    setRandomNumber(floorRandomNumber)
    setQuote(quotesArray.quotes[floorRandomNumber].quote)
    setAuthour(quotesArray.quotes[floorRandomNumber].author)
    setColor(colorsArr[colorRandomNumber])
    console.log(floorRandomNumber)
  }

  return (
    <div
      className='grid place-items-center h-screen '
      id='quote-box '
      style={{ backgroundColor: color, color: color }}
    >
      <div className=' rounded-xl bg-white'>
        <p className='m-3' id='text'>
          {quote}
        </p>
        <p id='author' className='text-right mr-10'>
          -{authour}
        </p>
        <div>
          <button
            onClick={changeQuoteAndAuthour}
            className='bg-gray-200 rounded-xl p-3 m-2'
            id='new-quote'
          >
            Change Quote
          </button>
          <a
            target='_blank'
            href={encodeURI(
              `http://www.twitter.com/intent/tweet?text=${quote}-${authour}`
            )}
            className='bg-gray-200 rounded-xl p-3 m-2'
            id='tweet-quote'
          >
            Tweet Quotes
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
