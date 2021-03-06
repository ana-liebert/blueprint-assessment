const Exercise2 = () => {


    return (
        <body>
            <nav>
                <div>
                    <img alt="Samantha Hall logo" className="nav-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />
                </div>
                <div>
                    <button className="volunteer-button">Volunteer</button>
                    <button className="donate-button">Donate</button>
                    <img alt="Facebook icon" className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/Facebook.svg'} />
                    <img alt="Twitter icon" className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/Twitter.svg'} />
                    <img alt="IG icon" className="socials" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/Social-icons/IG.png'} />
                </div>
            </nav>

            <div id="hero">

                <div>
                    <img alt="hero" className="hero-img" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/hero.png'} />
                </div>

                <div class="hero-overlay">
                    <img alt="Samantha Hall logo" class="samantha-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />

                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOUqR7GjTwKH793BxzhisX4-3yqI-Qk8-8aBLWzrnQJ-oDzA/formResponse" method="post">
                        <h1 class="hero-head">Stay in touch with Samantha</h1>
                        <div class="container signup-container">
                            <div class="row">
                                <div class="col signup-col">
                                    <input badinput="false" id="email" type="email" style={{ width: "100%" }} name="entry.2126475817" placeholder="Email" />
                                </div>

                            </div>
                            <div class="row">
                                <div class="col signup-col">
                                    <input badinput="false" id="phone" type="tel" style={{ width: "100%" }} name="entry.1281042882" placeholder="Phone" />
                                </div>
                                <div class="col signup-col">
                                    <input badinput="false" id="zip" type="text" style={{ width: "100%" }} name="entry.905435085" placeholder="ZIP" />
                                </div>
                            </div>
                        </div>
                        <button className="signup-button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>


            <div className="about-container container">
                <div className="donate-box">

                    <h2>Donate to support Samantha's campaign</h2>
                    <div className="container m-2 p-2">
                        <div className="row donate-row">
                            <div className="col donate-col">
                                $25
                            </div>
                            <div className="col donate-col">
                                Other
                            </div>
                        </div>
                        <div className="row donate-row">
                            <div class="col donate-col">
                                $50
                            </div>
                            <div className="col donate-col">
                                $100
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="about-samantha">

                    <div className="container">
                        <h1 className="about-header">Meet Samantha</h1>

                        <div className="row">
                            <div className="col">
                                <img alt="Samantha" className="about-img" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/about-photo_2.png'} />
                                <section>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat at mi sit amet faucibus. In hac habitasse platea dictumst. Etiam pulvinar sem et quam placerat maximus. Vivamus iaculis sollicitudin efficitur. In et ligula fringilla, finibus mi id, luctus mauris. Morbi dolor felis, tristique facilisis accumsan vitae, placerat nec risus. Cras odio mauris, varius vitae malesuada vel, placerat in neque. Pellentesque dignissim imperdiet turpis, placerat rutrum eros porttitor sit amet. Donec dictum fringilla efficitur.
                                </section>
                                <section>
                                    Donec imperdiet, orci at convallis aliquam, libero nibh egestas quam, at consequat eros nisi in tellus. Cras feugiat maximus sapien nec varius. Sed viverra finibus cursus. Duis semper ut arcu sed tempor. Vestibulum sit amet odio finibus, interdum metus id, dignissim nisi.
                                </section>

                                <div className="float-box">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                            </div>

                            <div className="col">
                                <img alt="campaigners at office" className="about-img img2" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/about-photo_1.jpg'} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div>
                    <img alt="logo" className="nav-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />
                </div>
                <div>
                    <div className="footer-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    <div>Privacy Policy @2021</div>
                </div>
            </footer>

        </body>
    )

}

export default Exercise2