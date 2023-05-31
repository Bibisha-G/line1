// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".btn-top").style.display = "block";
    } else {
      document.querySelector(".btn-top").style.display = "none";
    }
  }
  
  // Scroll to the top of the document when the user clicks the button
  document.querySelector(".btn-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  