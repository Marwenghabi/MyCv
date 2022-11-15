const FALLBACK_LOCAL = "fr";
    const locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : FALLBACK_LOCAL;
    const langSwitch = document.querySelector('#lang');
    langSwitch.innerHTML = locale == "en" ? "FR" : "EN";
    const translations = {
        // English translations
        "en": {
           'experience':'Experience'
        },
        // francais translations
        "fr": {
            'experience':'Experiences'
        },
    };
        document
        // Find all elements that have the key attribute
            .querySelectorAll("[data-i18n-key]")
            .forEach(translateElement);
 function translateElement(element) {
        const key = element.getAttribute("data-i18n-key");
        const translation = translations[locale][key];
        element.innerText = translation;
    }

    langSwitch.parentElement.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        localStorage.setItem('locale', langSwitch.innerText.includes("EN") ? "en" : "fr");
        langSwitch.innerHTML = localStorage.getItem('locale') == "en" ? " FR" : "EN";
        window.location.reload();
    })