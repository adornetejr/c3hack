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