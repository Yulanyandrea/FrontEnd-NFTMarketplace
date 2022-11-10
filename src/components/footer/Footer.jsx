import logo from './images/logo.jpg'
import facebook from './images/facebook.jpg'
import twiter from './images/twiter.jpg'
import instagram from './images/instagram.jpg'
import linke from './images/in.jpg'
import message from './images/message.jpg'
function Footer(){
    return(
        <div className="CardFooter">
            <aside className="cardFooter__block1">
                <img src={logo} alt="image" className="cardFooter__image"/>
                <h2 className="cardFooter__title">Nuron</h2>
                <p className="cardFooter__paragraph">Created with the collaboration
                of over 60 of the world's best Nuron Artist</p>

                <br/>
                <h2 className="cardFooter__update">Get the Latest Nuron Updates</h2>
                <div className="cardFooter__input">
                    <input type="text" className="cardFooter__username" />
                    <button className="cardFooter__subscribe">Subscribe</button>
                </div>
                <h4 className="cardFooter__message">Email is safe. We don't spam</h4>
            </aside>
           
            <section className="cardFooter__block2">
                <h2 className="cardFooter__companyTitle">Nuron</h2>
                <p className="cardFooter__protocol">Protocol Explore</p>
                <p className="cardFooter__system">System Token</p>
                <p className="cardFooter__otimize">Otimize Time</p>
                <p className="cardFooter__visual">Visual Checking</p>
                <p className="cardFooter__fadeup">Fadeup System</p>
                <p className="cardFooter__activity">Activity Log</p>
                <p className="cardFooter__systemAuto">System Auto Since</p>
            </section>

            <section className="cardFooter__block3">
                <h2 className="cardFooter__information">Information</h2>
                <p className="cardFooter__market">Market Explore</p>
                <p className="cardFooter__token"> Ready Token</p>
                <p className="cardFooter__main">Main Option</p>
                <p className="cardFooter__product">Product Checking</p>
                <p className="cardFooter__blog">Blog Grid</p>
                <p className="cardFooter__about">About Us</p>
                <p className="cardFooter__fix">Fix Bug</p>
            </section>

            <section className="cardFooter__block4">
                <h2 className="cardFooter__soldout">Recent Sold Out</h2>
                <div className="cardFooter__blockOne">
                    <img src="" alt="" />
                    <h2 className="cardFooter__titleNFT">#21 The Wonder</h2>
                    <h4 className="cardFooter__detail">Highest bid 1/20</h4>
                    <h2 className="cardFooter__price">$30</h2>

                </div>

                <div className="cardFooter__blockTwo">
                    <img src="" alt="" />
                    <h2 className="cardFooter__titleNFT">Diamond Dog</h2>
                    <h4 className="cardFooter__detail">Highest bid 1/20</h4>
                    <h2 className="cardFooter__price">$20</h2>

                </div>

                <div className="cardFooter__blockThree">
                    <img src="" alt="" />
                    <h2 className="cardFooter__titleNFT">Morgan 11</h2>
                    <h4 className="cardFooter__detail">Highest bid 1/20</h4>
                    <h2 className="cardFooter__price">$50</h2>

                </div>

            </section>
            <br/>

            <section className="cardFooter__block5">
                <h5 className="cardFooter__private">@2022 Nuron, Inc All rights reserved</h5>
                <h5 className="cardFooter__terms">Terms . Privacy Policy</h5>
                <img src={facebook} alt="" className="cardFooter__facebook" />
                <img src={twiter} alt="" className="cardFooter__twiter" />
                <img src={instagram} alt="" className="cardFooter__instagram" />
                <img src={linke} alt="" className="cardFooter__link" />
                <img src={message} alt="" className="cardFooter__message" />


            </section>
        </div>
    )
}

export default Footer