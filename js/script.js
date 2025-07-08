function mostrarMensaje(event) {
    event.preventDefault();
  
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
  
    let contenedorMensaje = document.getElementById("mensajeConfirmacion");
    let regexEmail = /^[^\s@]+@[^\s@]+\.com$/i;
  
    if (!nombre || !email || !asunto || !mensaje) {
      contenedorMensaje.textContent = "Por favor, completa todos los campos.";
      contenedorMensaje.style.color = "red";
      return;
    }
  
    if (!regexEmail.test(email)) {
      contenedorMensaje.textContent = "Por favor, ingresa un correo electrónico válido que termine en .com.";
      contenedorMensaje.style.color = "red";
      return;
    }
  
    let mensajeEnvio = `Hola, ${nombre}! Gracias por tu mensaje, en breve nos estaremos comunicando contigo.`;
    contenedorMensaje.textContent = mensajeEnvio;
    contenedorMensaje.style.color = "green";
  }
  
  function toggleMenu() {
      const links = document.querySelector('.menu-links');
      links.classList.toggle('show');
    }
    
  function toggleModoSubmenu() {
      const submenu = document.querySelector('.modo-submenu');
      submenu.classList.toggle('show');
    }
    
    // Función para establecer tema
  function setTheme(mode) {
      if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      // Ocultar submenú después de elegir
      document.querySelector('.modo-submenu').classList.remove('show');
    }
    
  // Aplicar tema guardado al cargar
  window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    });
  