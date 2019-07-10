$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('a[href="#top"]').fadeIn();
      } else {
          $('a[href="#top"]').fadeOut();
      }
  });

  $('a[href="#top"]').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});

$(document).ready(function onDocumentReady() {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('illustration'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/json/data.json'
    });
  });
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-143516100-1');