// Botão de compra: o link (href) já funciona sozinho, mesmo sem JS.
// Este script só adiciona um retorno visual rápido ao clique antes de seguir para o checkout.
(function () {
  var LINK_CHECKOUT = "https://pay.kiwify.com.br/e5jJPRD";

  document.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("cta-btn");
    if (!botao) return;

    botao.setAttribute("href", LINK_CHECKOUT);

    botao.addEventListener("click", function () {
      botao.classList.add("clicado");
      setTimeout(function () {
        botao.classList.remove("clicado");
      }, 200);
    });
  });
})();

// Ano corrente no rodape (e em qualquer outro lugar que use a classe js-ano).
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var anoAtual = new Date().getFullYear();
    document.querySelectorAll(".js-ano").forEach(function (el) {
      el.textContent = anoAtual;
    });
  });
})();

// Banner de cookies: mostra uma vez, lembra a escolha no navegador.
(function () {
  var CHAVE = "libertvs_cookies_ok";

  function jaAceitou() {
    try {
      return localStorage.getItem(CHAVE) === "1";
    } catch (e) {
      return false;
    }
  }

  function lembrarAceite() {
    try {
      localStorage.setItem(CHAVE, "1");
    } catch (e) {
      // Sem acesso a localStorage (aba anonima, storage bloqueado etc.): o banner
      // volta a aparecer na proxima visita, o que e um efeito colateral aceitavel.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookie-banner");
    var botaoOk = document.getElementById("cookie-ok");
    if (!banner || !botaoOk) return;

    if (!jaAceitou()) {
      banner.hidden = false;
    }

    botaoOk.addEventListener("click", function () {
      lembrarAceite();
      banner.hidden = true;
    });
  });
})();
