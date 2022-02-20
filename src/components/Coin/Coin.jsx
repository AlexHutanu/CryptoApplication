import React from 'react'
import {Link} from 'react-router-dom'


export default ({image, name, price, volume, ath, marketCap}) => {

    const handleName = (name) => name.split('-').length === 1 ? toCapitalize(name) : name.split('-').map(word => toCapitalize(word)).join(' ')

    const toCapitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1)

    return <div className="coin">
        <div className="coin__coin-name" >
            <img src={image} alt="cryptoImage" />
            <Link to={`/searchCoin/${name}&usd`}>{handleName(name)}</Link>
        </div>
        <div className="coin__coin-price">
            <p>{price} $</p>
        </div>
        <div className="coin__coin-volume">
            <p>{volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $</p>
        </div>
        <div className="coin__coin-ath">
            <p>{ath} $</p>
        </div>
        <div className="coin__coin-market-cap">
            <p>{marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $</p>
        </div>
    </div>
}

