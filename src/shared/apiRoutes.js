export default {
    oneCoinRoute: coin => `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`,
    topCoinsRoute: (page, perPage = 10) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`,
    trendingCoinsRoute: coin => 'https://api.coingecko.com/api/v3/search/trending'
}
