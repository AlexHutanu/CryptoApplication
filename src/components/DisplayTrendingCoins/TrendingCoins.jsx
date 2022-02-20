import React, {useEffect, useState} from 'react'

import fetchCryptoData from "../../utils/cryptoApi"
import apiRoutes from "../../shared/apiRoutes"
import {Link} from "react-router-dom";
import Header from "../Header/Header";


export default () => {
    const [trendingCoins, setTrendingCoins] = useState([])
    const [coins, setCoins] = useState([])

    useEffect(() => {
        (async () => {
            const showTrendingCoinsName = await fetchCryptoData(apiRoutes.trendingCoinsRoute())
            setTrendingCoins(showTrendingCoinsName.data.coins)
        })()
    },[])

    useEffect(() => {
        (async () => {
            const values = await Promise.all(trendingCoins.map(coin => fetchCryptoData(apiRoutes.oneCoinRoute(coin.item.id))))
            setCoins(values)
        })()
    }, [trendingCoins])

    return <div className = "display-trending-coins">
        <Link className="input-user__navigation-link" to="/" label="HomePage">Go to HomePage</Link>
        <Header title="Trending Coins" />

        <hr className="horizontal-line" />
        {coins.map((coin, index) =>
            <div key={index} className="display-trending" >
                <div className="display-trending__name">
                    <img src={coin.data.image.small} alt="CoinImage" />
                    <p>{coin.data.name}</p>
                    <p className="display-trending__symbol">{coin.data.symbol.toUpperCase()}</p>
                </div>
                <div className="display-trending__price">
                    <p>{coin.data.market_data.current_price.usd}$</p>
                </div>
                <div className="display-trending__volume">
                    <p>{coin.data.market_data.total_volume.usd}$</p>
                </div>
                <div className="display-trending__market-cap">
                    <p>{coin.data.market_data.market_cap.usd}$</p>
                </div>
                <div className="display-trending__ath">
                    <p>{coin.data.market_data.ath.usd}$</p>
                </div>
            </div>
        )}
    </div>
}


