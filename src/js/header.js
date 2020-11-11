const header = document.getElementById('header')
const nav = `<!-- Navbar --> 
<nav id="navbar" class="navbar navbar-expand-md fixed-top scrolling-navbar py-0 top-nav-collapse">
  <div class="container d-flex justify-content-start">
    <a class="navbar-brand mx-md-2 m-0" href="../index.html">
      <img class="d-none d-md-block m-0" src="../src/img/Logo-Oliver.png" alt="logo smc">
    </a>
    <div id="toggleMenu" class="hide">
      <ul class="navbar-nav mr-auto smooth-scroll">
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light d-block d-md-none" href="../index.html">
            <img height="40" src="../src/img/Logo-Oliver.png" alt="logo smc">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light" href="nosotros.html">¿Quiénes Somos?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light" href="servicios.html">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light" href="galeria.html">Galería</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light" href="FAQ.html">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold waves-effect waves-light" href="contacto.html">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
  <div id="hamburger" class="hamburger-btn">
    <i id="ham-icon" class="fas fa-bars fa-1-3x"></i>
  </div>
  <a id="whatsapp" class="whatsapp-btn" href="https://api.whatsapp.com/send?phone=584244379861" target="_blank">
    <i class="fab fa-whatsapp fa-1x"></i>
  </a>
  <a id="facebook" class="facebook-btn" href="https://www.facebook.com/smcdevenezuela/" target="_blank">
    <i class="fab fa-facebook-square fa-1x"></i>
  </a>
  <a id="instagram" class="instagram-btn" href="https://www.instagram.com/smcdevenezuela/" target="_blank">
    <i class="fab fa-instagram fa-1x"></i>
  </a>
</nav>`
const intro = `<!-- Intro Section -->
<div id="home" class="vh-25">
  <div class="container h-100 d-flex justify-content-center align-items-center">
    <div class="row smooth-scroll">
      <div class="col-md-12 text-center">
        <div class=" align-items-centertext-white">
          <div>
            <img width="154" src="../src/img/Logo-Oliver.png" alt="">
          </div>
          <!-- <h1 class="display-4 text-uppercase font-weight-bold mt-5 mt-xl-2">WASH</h1> -->
          <!-- <hr class="hr-light my-4"> -->
        </div>
      </div>
    </div>
  </div>
</div>`

const footer = document.getElementById('footer')

const subFooter1 = `<!-- Footer Links -->
                    <div class="container-fluid pt-3 py-md-3">
                      <!-- Grid row -->
                      <div class="row px-sm-5">
                        <!-- Grid column -->
                        <div class="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
                          <!-- Search -->
                          <h5 class="d-none text-uppercase mb-4"><strong>Datos de Contacto</strong></h5>

                          <!-- Info -->
                          <p class="mr-4 mb-md-0"><i class="fas fa-home mr-2"></i>Carabobo, San Joaquín</p>
                          <p class="mr-4 mb-md-0"><i class="fas fa-envelope mr-2"></i>smcvenezuelaventas@gmail.com</p>
                          <p class="mr-4 mb-md-0"><i class="fas fa-phone mr-2"></i>+58 424 437 9861</p>
                        </div>
                        <!-- Grid column -->
                      </div>
                      <!-- Grid row -->
                    </div>
                    <!-- Footer Links -->`                  
const subFooter2 = `<!-- Copyright -->
                    <div class="py-3 text-center" style="background-color: #1a1a1a;">
                      <div class="container-fluid">
                        <p class="m-0">© 2020 Copyright: <span>SMCdeVenezuela.com</span></p>
                      </div>
                    </div>
                    <!-- Copyright -->`

function crear(parte1, parte2, parte3 ){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = parte1
  parte3.append(html.body.children[0])

  html.body.innerHTML = parte2
  parte3.append(html.body.children[0])
}
crear(nav, intro, header)

crear(subFooter1, subFooter2, footer)
