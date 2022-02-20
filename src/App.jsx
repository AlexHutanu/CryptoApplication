import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import SearchCoinPage from './components/Pages/SearchCoinPage/SearchCoinPage'
import CryptoInfoPage from "./components/Pages/LandingPage/LandingPage"
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage"
import TrendingCoins from "./components/DisplayTrendingCoins/TrendingCoins"
import HomePage from "./components/HomePage/HomePage"
import './shared/all.scss'
import CoinPage from "./components/CoinPage/CoinPage";




export default () =>
    <div className="container">
        <Router>
            <Routes>
                <Route element={<HomePage />} path={'/'} />
                <Route element={<CryptoInfoPage />} path={'/topCoins'}/>
                <Route element={<SearchCoinPage />} exact path={'/searchCoin'}/>
                <Route element={<CoinPage />} path={'/searchCoin/:currencyName&:vsCurrency'} />
                <Route element={<ErrorPage />} path={'*'}  />
                <Route element={<TrendingCoins />} path={'/trendingCoins'} />
            </Routes>
        </Router>
    </div>


