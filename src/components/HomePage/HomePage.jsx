import {Link} from "react-router-dom"

export default () => {
    return <div className="home-page">
            <div className="home-page__header">
            <div className="home-page__header__title">
                <h2 className="home-page__header__title">Live With Crypto</h2>
            </div>
            </div>
        <hr className="horizontal-line" />
            <div className="home-page__links">
                <Link className="home-page__links__search-coin" to="/searchCoin" label="Search Coin">Search a coin...</Link>
                <Link className="home-page__links__top-coins" to="/topCoins" label="Top Coins">Top Coins</Link>
                <Link className="home-page__links__trending-coins" to="/trendingCoins" label="Trending Coins">Trending Coins</Link>
            </div>
    </div>
}

