document.addEventListener("DOMContentLoaded", function() {

  var emoticons = document.querySelectorAll("#fevd-emoticon-box img");

  for (var i = 0; i < emoticons.length; i++) {
    emoticons[i].onclick = function() {

      var code = this.getAttribute("data-code");

      var textarea = document.querySelector("textarea");

      if (textarea) {
        textarea.value += " " + code;
        textarea.focus();
      }
    };
  }

});
