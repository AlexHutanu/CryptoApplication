import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

import fetchCryptoData from "../../utils/cryptoApi"
import apiRoutes from "../../shared/apiRoutes"
import Loader from "../Loader";
import convertLargeNumberToReadableNumber from "../../utils/convertLargeNumberToReadableNumber";


export default () => {
    const [coin, setCoin] = useState()

    const {currencyName, vsCurrency} = useParams()

    const handleParams = (param) => 
        param.split(' ').length === 1 ? param.split(' ')[0] : param.split(' ').join('-')
    

    useEffect(() => {
        fetchCryptoData(apiRoutes.oneCoinRoute(handleParams(currencyName)))
            .then(response => setCoin(response.data))
            .catch(error => console.log(error))
    },[])


    return coin ? (
            <div className="coin-page">
                <Link className="coin-page__navigation-link" to='/' label="SearchCoin">Go to HomePage</Link>
                <div className="coin-page__name">
                    <img src={coin.image.small} alt="CoinImage" />
                    <p>{coin.name}</p>
                </div>
                <div className="coin-page__market-cap-rank">
                    <p className="coin-page__market-cap-rank__name">Market Cap Rank:</p>
                    <p className="coin-page__market-cap-rank__data">{coin.market_cap_rank}</p>
                </div>
                <div className="coin-page__blocks">
                    <div className="coin-page__left-block">
                        <div className="coin-page__left-block__price">
                            <p className="coin-page__left-block__price__name">Price</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__left-block__price__data">{convertLargeNumberToReadableNumber(coin.market_data.current_price[`${vsCurrency.toLowerCase()}`], 2)}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                        <div className="coin-page__left-block__volume">
                            <p className="coin-page__left-block__volume__name">Volume</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__left-block__volume__data">{convertLargeNumberToReadableNumber(coin.market_data.total_volume[`${vsCurrency.toLowerCase()}`], 2)}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                        <div className="coin-page__left-block__market-cap">
                            <p className="coin-page__left-block__market-cap__name">Market Cap</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__left-block__market-cap__data">{convertLargeNumberToReadableNumber(coin.market_data.market_cap[`${vsCurrency.toLowerCase()}`], 2)}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className="coin-page__right-block">
                        <div className="coin-page__right-block__ath">
                            <p className="coin-page__right-block__ath__name">All Time High</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__right-block__ath__data">{convertLargeNumberToReadableNumber(coin.market_data.ath[`${vsCurrency.toLowerCase()}`], 2)}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                        <div className="coin-page__right-block__high_24h">
                            <p className="coin-page__right-block__high_24h__name">High 24h</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__right-block__high_24h__data">{coin.market_data.high_24h[`${vsCurrency.toLowerCase()}`]}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                        <div className="coin-page__right-block__low_24h">
                            <p className="coin-page__right-block__low_24h__name">Low 24h</p>
                            <hr className="horizontal-line" />
                            <p className="coin-page__right-block__low_24h__data">{coin.market_data.low_24h[`${vsCurrency.toLowerCase()}`]}&nbsp;{vsCurrency.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>) :
        <Loader />
}
