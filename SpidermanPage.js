function App() {
    return (
        <>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#Abt">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Img">Image</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#ff">Fun Facts</a>
                    </li>
                </ul>
            </div>
        </nav><div className="container">
                <h1>Spiderman</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="Abt">

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="Img">
                        <img
                            src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2021/04/spider-man-tobey-maguire.jpg"
                            className="img-fluid rounded"
                            alt="Spiderman" />
                    </div>
                    </div>

                    <div className="col-md-4">
                        <div className="ff">

                        </div>
                    </div>

                </div>
            </div>
            </>

    );
}


