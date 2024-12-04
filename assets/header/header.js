document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".main-header");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY) {
        // Ocultar encabezado al desplazarse hacia abajo
        header.classList.add("hidden");
      } else {
        // Mostrar encabezado al desplazarse hacia arriba
        header.classList.remove("hidden");
      }
  
      lastScrollY = currentScrollY;
    });
  });  