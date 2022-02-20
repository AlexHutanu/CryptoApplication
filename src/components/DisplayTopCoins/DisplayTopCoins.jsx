import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

import Pagination from "../Pagination/Pagination"
import fetchCryptoData from "../../utils/cryptoApi"
import apiRoutes from "../../shared/apiRoutes"
import Coin from "../Coin/Coin"




export default () => {
    const [topCryptos, setTopCryptos] = useState([])
    const [page, setPage] = useState(1)
    const [nextPage, setNextPage] = useState(page + 1)
    const [previousPage, setPreviousPage] = useState(0)


    useEffect(() => {
        fetchCryptoData(apiRoutes.topCoinsRoute(page))
            .then(response => response.data)
            .then(topCryptos => setTopCryptos(topCryptos))
            .catch(error => console.log(error))
    }, [page])


    return <div className = "display-top-coins">
            <Link className="input-user__navigation-link" to="/" label="HomePage">Go to HomePage</Link>
            {topCryptos.map(({image, id, current_price, total_volume, ath, market_cap}, index) => <Coin key={index} image={image} name={id} price={current_price} volume={total_volume} ath={ath} marketCap={market_cap} />)}
        <div className="display-top-coins__pages">
            <a onClick={() => {
                setPage(prev => prev - 1)
                setNextPage(prev => prev - 1)
                setPreviousPage(prev => prev - 1)}}>
                {previousPage ? previousPage : null}
            </a>
            <a>{page}</a>
            <a onClick={() => {
                setPreviousPage(prev => prev + 1)
                setPage(prev => prev + 1)
                setNextPage(prev => prev + 1)}}>
                {nextPage}
            </a>
            <Pagination setPage={setPage} setNextPage={setNextPage} setPreviousPage={setPreviousPage} />
        </div>
            {page > 2 &&
                <a className="display-top-coins__first-page-button" onClick={() => {
                    setPreviousPage(0)
                    setPage(1)
                    setNextPage(2)
                }}>Go to first page </a>
            }
        </div>
}