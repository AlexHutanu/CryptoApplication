import React, {useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'


export default () => {
    const [userInput, setUserInput] = useState('')
    const [vsCurrency, setVsCurrency] = useState('')

    const navigate = useNavigate()

    return <div className="input-user">
        <Link className="input-user__navigation-link" to="/" label="HomePage">Go to HomePage</Link>
        <h1 className="input-user__title">Search Crypto Coins</h1>
        <form className="input-user__form"
              onSubmit={(e) => {
                  e.preventDefault()
                  navigate(`/searchCoin/${userInput}&${vsCurrency ? vsCurrency : 'usd'}`)
              }
        }>
            <div className="input-user__form--input">
                <label className="input-user__form--input--label" htmlFor="currency">Coin</label>
                <input type="text" name="currency" value={userInput} placeholder="Search a coin" className="input-user__form--input--field" id="currency" onChange={e => setUserInput(e.target.value)} />
            </div>
            <div className="input-user__form--input">
                <label className="input-user__form--input--label" htmlFor="vs_currency">Currency</label>
                <input type="text" name="vs_currency" placeholder='USD' value={vsCurrency} className="input-user__form--input--field" id="vs_currency" onChange={e => setVsCurrency(e.target.value)} />
            </div>
            <button className="input-user__form--button" type="submit" >
                Search
            </button>
        </form>
    </div>
}


