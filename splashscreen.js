// Script per gestire lo splashscreen e il caricamento iniziale dell'app
document.addEventListener("DOMContentLoaded", function () {
  // Crea e mostra lo splashscreen
  function createSplashScreen() {
    const splash = document.createElement("div");
    splash.className = "splash-screen";

    // Logo e animazione
    const logo = document.createElement("div");
    logo.className = "splash-logo";
    splash.appendChild(logo);

    // Loader
    const loader = document.createElement("div");
    loader.className = "splash-loader";
    splash.appendChild(loader);

    document.body.appendChild(splash);

    // Nascondi lo splashscreen dopo un po'
    setTimeout(function () {
      splash.classList.add("splash-hide");
      setTimeout(function () {
        splash.remove();
      }, 400); // Tempo per l'animazione di scomparsa
    }, 1000); // Tempo minimo di visualizzazione
  }

  // Crea lo stile per lo splashscreen
  function createSplashStyles() {
    const style = document.createElement("style");
    style.textContent = `
            .splash-screen {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #25D366;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.4s ease-out;
            }
            .splash-hide {
                opacity: 0;
            }
            .splash-logo {
                width: 80px;
                height: 80px;
                background-color: white;
                border-radius: 16px;
                margin-bottom: 20px;
                position: relative;
            }
            .splash-logo::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50px;
                height: 50px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2325D366'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12c0 1.928.556 3.719 1.5 5.25L2 22l4.75-1.5C8.281 21.445 10.072 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm3.643 14.129c-.388.196-.697.329-1.023.329-.524 0-1.064-.175-1.652-.54-.596-.371-1.164-.872-1.686-1.394-.522-.522-1.023-1.09-1.394-1.686-.365-.587-.54-1.128-.54-1.652 0-.326.132-.635.329-1.023.157-.31.399-.587.693-.88l.241-.241c.165-.165.241-.241.406-.241.084 0 .169.021.253.063.211.105.855.855 1.094 1.139.084.105.105.196.105.253 0 .105-.042.21-.126.294l-.389.389c-.146.157-.314.336-.213.546.208.419.779.99 1.198 1.198.21.101.389-.67.546-.213l.389-.389c.084-.084.189-.126.294-.126.58 0 .149.021.253.105.284.239 1.034.883 1.139 1.094.042.084.063.169.063.253 0 .165-.84.241-.241.406l-.241.241c-.293.294-.57.536-.88.693z'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
            }
            .splash-loader {
                width: 40px;
                height: 40px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top-color: white;
                animation: spin 1s ease infinite;
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(style);
  }

  // Esegui tutto
  createSplashStyles();
  createSplashScreen();
});
