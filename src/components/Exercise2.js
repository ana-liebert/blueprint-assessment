
const Exercise2 = () => {


    return (
        <body>
            <nav>
                <div>
                    <img className="nav-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />
                </div>
                <div>
                    <button className="volunteer-button">Volunteer</button>
                    <button className="donate-button">Donate</button>
                    <img className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/Facebook.svg'} />
                    <img className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/Twitter.svg'} />
                    <img className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/IG.png'} />
                </div>
            </nav>

            {/* hero-----------> */}

            <div id="hero">

                <div>
                    <img className="hero-img" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/hero.png'} />
                </div>

                <div class="hero-overlay">
                    <img class="samantha-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />

                    <form>
                        <h1>Stay in touch with Samantha</h1>
                        <div class="mb-2">
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" />
                        </div>

                        <div class="row mb-2">
                            <div class="col">
                                <input type="tel" class="form-control" placeholder="Phone" />
                            </div>
                            <div class="col mb2">
                                <input type="text" class="form-control" placeholder="ZIP" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>

            </div>

            {/* hero-------------> */}

            {/* about------------> */}
            <div className="about-container container">


                <div className="donate-box">
                    <h2>Donate to support Samantha's campaign</h2>

                    <div className="container m-2 p-2">

                        <div class="row donate-row">
                            <div class="col donate-col">
                                $25
                            </div>
                            <div class="col donate-col">
                                Other
                            </div>
                        </div>
                        <div class="row donate-row">
                            <div class="col donate-col">
                                $50
                            </div>
                            <div class="col donate-col">
                                $100
                            </div>
                        </div>

                    </div>

                </div>



                <div>
                    <p>placeholder: DIV FOR about content with images</p>
                </div>


            </div>

            {/* about------------> */}

            <footer>
                <p>placeholder: footer</p>
            </footer>

        </body>
    )

}

export default Exercise2