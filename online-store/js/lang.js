document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");

  // Отримуємо мову з LocalStorage або за замовчуванням "en"
  const savedLang = localStorage.getItem("lang") || "en";
  languageSelector.value = savedLang;

  // Функція для переходу на відповідну мовну версію
  function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    let currentPage = window.location.pathname;

    if (currentPage.includes("products")) {
      window.location.href =
        lang === "en"
          ? "products.html"
          : lang === "uk"
          ? "products-uk.html"
          : "products-pl.html";
    } else {
      window.location.href =
        lang === "en"
          ? "index.html"
          : lang === "uk"
          ? "index-uk.html"
          : "index-pl.html";
    }
  }

  // Слухаємо зміну мови
  languageSelector.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
