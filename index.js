const FALLBACK_LOCAL = "fr";
    const locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : FALLBACK_LOCAL;
    const langSwitch = document.querySelector('#lang');
    langSwitch.innerHTML = locale == "en" ? "FR" : "EN";
    const translations = {
        // English translations
        "en": {
           'experience':'Work Experience',
           'descriptioninfo' :"Je suis très ambitieux, je veux suivre différents types de nouvelles technologies, que ce soit dans la programmation ou dans d'autres domaines. Je suis précis, direct et patient. Je souhaite soutenir les autres et travailler en groupes. Je souhaite mettre à jour mes connaissances et apprendre d'autres personnes qui ont de l'expérience."
        },
        // francais translations
        "fr": {
            'experience':'Experience',
            'descriptioninfo' :"I am very ambitious, I want to follow different kinds of new technologies, whether in programming or in other fields. I am precise, direct and patient. I want to support others and work in groups. I want to update my knowledge and learn from other people who have experience."
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