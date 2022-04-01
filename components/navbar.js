// Navbar Component
function navbar() {
  return `<div id="navbar">
    <div id="navbar-left">
        <img id="site-logo" src="https://assets.ajio.com/static/img/Ajio-Logo.svg" onclick="window.location.href = 'home.html'" alt="">
    </div>
    <div id="navbar-right">
        <div id="right-upper">
            <a href=""><p id="ru">Sign In / Join AJIO</p></a>
            <a href=""><p id="ru">Customer Care</p></a>
            <button id="navbar-button">Visit AJIOLUXE</button>
        </div>
        <div id="right-lower">
            <p id="rl"><a href="../menStyles.html">MEN</a></p>
            <p id="rl"><a href="../womenStyles.html">WOMEN</a></p>
            <p id="rl"><a href="../kidsStyles.html">KIDS</a></p>
            <p id="rl">INDIE</p>
            <p id="rl">HOME AND KITCHEN</p>
            <input id="navbar-input" type="text" placeholder="Search AJIO">
            <img id="bar-img" src="https://i.pinimg.com/originals/fc/fa/0c/fcfa0c367d786deeaf42dec2fda70e47.png" alt="">
            <img id="bar-img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHuCTCHiz7-sR9YwmlVHDZ0UXU-tcjDRIzmGlub9of64k0gsAJXe29kR-9Bpfj1f_YAg&usqp=CAU" alt="">
        </div>
    </div>
</div>`;
}

export default navbar;
