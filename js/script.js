function mostrarInicio() {
    document.getElementById("contenido").innerHTML = `
        <section>
            <h1>Bienvenido a ArteGarage</h1>
            <p>Explora nuestras esculturas únicas.</p>
        </section>
    `;
}

function mostrarRegistro() {
    document.getElementById("contenido").innerHTML = `
        <h2>Registro</h2>
        <input type="text" id="usuario" placeholder="Nombre"><br><br>
        <input type="password" id="password" placeholder="Contraseña"><br><br>
        <button onclick="registrar()">Registrarse</button>
    `;
}

function mostrarLogin() {
    document.getElementById("contenido").innerHTML = `
        <h2>Iniciar Sesión</h2>
        <input type="text" id="usuarioLogin" placeholder="Nombre"><br><br>
        <input type="password" id="passwordLogin" placeholder="Contraseña"><br><br>
        <button onclick="login()">Ingresar</button>
    `;
}

function registrar() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("password", password);

    alert("Usuario registrado");
}

function login() {
    let usuario = document.getElementById("usuarioLogin").value;
    let password = document.getElementById("passwordLogin").value;

    let usuarioGuardado = localStorage.getItem("usuario");
    let passwordGuardado = localStorage.getItem("password");

    if (usuario === usuarioGuardado && password === passwordGuardado) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("sesion", "activa");
    } else {
        alert("Datos incorrectos");
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesion");
    alert("Sesión cerrada");
}