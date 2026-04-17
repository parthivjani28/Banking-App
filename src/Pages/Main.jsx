import logo from '../logo.svg';

function Main() {
    return (
      <>
        <div className="container">
            <img src={logo} alt="Logo" width={100} />
                <div className="tabs">
                    <a href="/" className="MainPage-Tabs"> Banking</a>
                    <a href="/" className="MainPage-Tabs"> Investment</a>
                    <a href="/" className="MainPage-Tabs"> Offers and Products</a>

                </div>
        </div>
       </>
    
    )
}

export default Main;