   // Browse button
   browseBtn.addEventListener('click', function() {
      displayAnime(animeData);
      window.scrollTo({
         top: document.getElementById('featured-section').offsetTop - 100,
         behavior: 'smooth'
      });
   });
