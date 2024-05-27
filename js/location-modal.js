var modal = document.querySelector('.location-modal');
        var closeButton = document.querySelector('.close');

        document.querySelector('.nav-link').addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });