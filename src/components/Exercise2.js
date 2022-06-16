
const Exercise2 = () => {


    return (
        <body>
            <nav>
                <p>placeholder: navigation with logo, buttons, social icons</p>

            </nav>

            {/* hero-----------> */}

            <div id="hero">

                <div>
                    <img className="hero-img" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/hero.png'} />
                </div>

                <div class="hero-overlay">
                    <img class="samantha-logo" src={process.env.PUBLIC_URL + '/Blu_developer_test/source-files/SamanthaHall_Logo_reversed.png'} />
                    <form>
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
            <div>
                <div>
                    <p>placeholder: Donate to support</p>
                </div>
                <p>placeholder: about content with images</p>
            </div>

            {/* about------------> */}

            <footer>
                <p>placeholder: footer</p>
            </footer>

        </body>
    )

}

export default Exercise2