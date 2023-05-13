console.log("Your index.js file is loaded correctly!");
$(document).ready(function() {
    $(".hero-button").mouseenter(function() {
      $(this).css("background-color", "#2F9366");
    });
    $("a.button-text").mouseenter(function() {
      $(this).css("color", "black");
    });
    $(".hero-button").mouseenter(function() {
        $(this).css("box-shadow", "6px 6px 6px rgba(0, 0, 0, 0.25");
      });
    $(".hero-button").mouseleave(function() {
        $(this).css("background-color", "#376636");
      });
    $("a.button-text").mouseleave(function() {
        $(this).css("color", "white");
      });
    $(".hero-button").mouseleave(function() {
        $(this).css("box-shadow", "");
      });
      $(".card").mouseenter(function() {
        $(this).css({"background-color": "#01CBBA",
        "box-shadow": "4px 4px 4px rgba(0, 0, 0, 0.75",
      });
      });
      $(".card").mouseleave(function() {
        $(this).css({"background-color": "#01BBAA",
        "box-shadow": "",
      });
      });
    $(".start-button").mouseenter(function() {
        $(this).css({"background-color": "#2F9366",
        "box-shadow": "6px 6px 6px rgba(0, 0, 0, 0.25",
    });
    });
    $(".start-button").mouseleave(function() {
        $(this).css({"background-color": "#376636",
        "box-shadow": "",
    });
    });
    $("a.nav-item").mouseenter(function() {
        $(this).css({"color": "#376636", 
        "font-size": "24px",
    });
    });
    $("a.nav-item").mouseleave(function() {
        $(this).css({"color": "#000000", 
        "font-size": "18px",
    });
    });
});
  