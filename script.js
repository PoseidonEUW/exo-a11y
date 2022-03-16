;
(function() {
    document.querySelectorAll('.CookiesModal-button').forEach((button) =>
        button.addEventListener('click', (event) => {
            document.querySelector('.Cookies').classList.add('Hidden');
        })
    );

    document.querySelectorAll('[image-href]').forEach((image) =>
        image.addEventListener('click', () => {
            window.location = image.getAttribute('image-href');
        })
    );

    const goldenBookForm = document.querySelector('.GoldenBook-form');

    const goldenBookToggleButton = document.querySelector('.GoldenBook-toggle');
    const toggleGoldenBookForm = () => {
        // Gestion de l'affichage/masquage du formulaire "livre d'or"
        goldenBookForm.classList.toggle('Hidden');
        goldenBookToggleButton.textContent = goldenBookForm.classList.contains('Hidden') ?
            'Afficher' :
            'Masquer';
        // Fin de la gestion

        if (document.querySelector('.FormSuccess')) {
            document.querySelector('.FormSuccess').remove();
        }
    }
    goldenBookToggleButton.addEventListener('click', (event) => {
        event.preventDefault();
        toggleGoldenBookForm();
    });

    goldenBookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = goldenBookForm.querySelector('input[name="email"]');
        const formError = document.querySelector('.FormError');
        let hasEmailError = false;
        if (emailInput.value && emailInput.value.indexOf('@') === -1) {
            if (!formError) {
                // Gestion de l'erreur sur le champ e-mail du formulaire
                const error = document.createElement('p');
                error.classList.add('FormError');
                error.textContent = "Erreur";
                emailInput.after(error);
                // Fin de la gestion de l'erreur
            }
            hasEmailError = true;
        } else if (formError) {
            formError.remove();
        }

        if (!hasEmailError) {
            goldenBookForm.reset();
            toggleGoldenBookForm();

            const success = document.createElement('p');
            success.classList.add('FormSuccess');
            success.textContent = 'Votre message a bien été envoyé, merci.';
            // Gestion de la notification de soumission du formulaire
            /*
            	Aide : une étape pour rendre accessible cette notification est
            	de replacer le focus navigateur sur celle-ci.
            	Pour rappel, définir un attribut `tabindex="-1"` sur un élément HTML
            	permet ensuite de le focaliser en JavaScript via la méthode `focus()`:
            	https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
            */
            // Fin de la gestion de la notification
            goldenBookForm.after(success);
        }
    })
})();