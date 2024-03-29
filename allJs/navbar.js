function navbar() {
    document.getElementById("navBar").innerHTML = `
    <div class="container-fluid">
            <a class="navbar-brand" href="index.html">TechIt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="products.html"">Products</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Branches
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Haifa</a></li>
                            <li><a class="dropdown-item" href="#">Tel Aviv</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Eilat</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact us</a>
                    </li>
                    <li class="nav-item">
                    
                        <a class="btn btn-outline-success" href="cart.html">
                            <i class="fa-solid fa-cart-shopping" style="color: #39f22c;"></i>
                        </a>
                        
                    </li>
                </ul>
            </div>
    </div>

    
    `
}
navbar();