const Header = ({title}) => {
    return <>
        <div className="header">
            <h1 className="header__title">{title}</h1>
        </div>
        <div className="header__table-header">
            <div className="header__table-header__name"><h4>Name</h4></div>
            <div className="header__table-header__price"><h4>Price</h4></div>
            <div className="header__table-header__volume"><h4>Volume</h4></div>
            <div className="header__table-header__ath"><h4>All Time High</h4></div>
            <div className="header__table-header__market-cap"><h4>Market Cap</h4></div>
        </div>
    </>
}


export default Header