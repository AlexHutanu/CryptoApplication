import React, {useState} from 'react'

export default ({setPage, setPreviousPage, setNextPage}) => {
    const [intermediatePage, setIntermediatePage] = useState('')

    return <form className="pagination"
                 onSubmit={e => {
                     setPage(Number(intermediatePage))
                     setPreviousPage(Number(intermediatePage) - 1)
                     setNextPage(Number(intermediatePage) + 1)
                     e.preventDefault()
                 }}>
        <input className="pagination__input" value={intermediatePage} onChange={e => setIntermediatePage(e.target.value)} placeholder="Search page..."/>
        <button className="pagination__button" type="submit" ><i className="fa fa-search" /></button>
    </form>
}