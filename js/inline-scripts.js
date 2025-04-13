  <script>
    $(function(){
      // Initialize Feather icons
      feather.replace();

      // Word rotation in heading
      let words = document.querySelectorAll('.word-shift b');
      let wordIndex = 0;
      let isAnimating = false;

      function rotateWord() {
        if (isAnimating) return;
        isAnimating = true;

        let currentWord = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
        let nextWord = words[wordIndex];

        // Hide current word
        currentWord.classList.remove('is-visible');
        
        // Show next word after a delay
        setTimeout(function() {
          nextWord.classList.add('is-visible');
          isAnimating = false;
        }, 600);
      }

      // Rotate words every 3 seconds
      setInterval(rotateWord, 3000);

      // Open & close modal
      $('.modal-toggle').click(function(){
        $('.modal').toggleClass('modal-show');
        $('.content').toggleClass('content-blurred');
        $('body').toggleClass('no-scroll');
      });

      // Close modal on escape key
      $(document).keyup(function(e) {
        if (e.key === "Escape") {
          $('.modal').removeClass('modal-show');
          $('.content').removeClass('content-blurred');
          $('body').removeClass('no-scroll');
        }
      });

      // Form submission
      $(".form").submit(function(e) {
        // Get the first name to personalize thank you message
        var firstName = $("#firstName").val();
        $('.first-name').text("Thank you, " + firstName + "!");

        // Only show the success UI immediately if we're in development
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          e.preventDefault();
          $('.form-content').addClass('form-content-hide');
          $('.success').addClass('success-show');
        }
      });

      // Check for thank-you parameter in URL to show success message
      if (window.location.search.includes('thank-you=true')) {
        $('.modal').addClass('modal-show');
        $('.content').addClass('content-blurred');
        $('body').addClass('no-scroll');
        $('.form-content').addClass('form-content-hide');
        $('.success').addClass('success-show');
      }

      // ScrollReveal animations
      ScrollReveal().reveal('.hero, .title, .subtitle, .video, .screen, .features, .feature-card', {
        distance: '40px',
        duration: 1200,
        delay: 200,
        easing: 'ease-out',
        origin: 'bottom',
        reset: false,
        mobile: true,
        opacity: 0,
        interval: 200
      });
    });
  </script>
