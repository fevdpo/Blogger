document.addEventListener("DOMContentLoaded", function() {

  // =========================
  // 1. CLICK EMOTICON
  // =========================
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

  // =========================
  // 2. CONVERT EMOTICON
  // =========================
  function replaceEmoticons() {

    var map = {
      ":a": "http://1.bp.blogspot.com/-okT2YW2xLdk/UO8kORszupI/AAAAAAAABiA/-m2KzdtWy9g/s1600/seociyus.blogspot.com_052.gif",
      ":b": "http://3.bp.blogspot.com/-y0kyN7mxtSA/UO8kOPJf0KI/AAAAAAAABiE/KSpycJ1MxF8/s1600/seociyus.blogspot.com_051.gif",
      ":c": "http://4.bp.blogspot.com/-j06i2xh_8sM/UO8kObpX4rI/AAAAAAAABiI/PajlFXUQAmE/s1600/seociyus.blogspot.com_053.gif",
      ":d": "http://4.bp.blogspot.com/--lk67H6IWf4/UO8kPCv8fLI/AAAAAAAABiM/b4XAUwGmEbU/s1600/seociyus.blogspot.com_055.gif",
      ":e": "http://1.bp.blogspot.com/-YKv8DELCCCE/UO8kPtGZSHI/AAAAAAAABiQ/yc1b2zT6gck/s1600/seociyus.blogspot.com_057.gif",
      ":f": "http://4.bp.blogspot.com/-iUBAaU71lDY/UO8kPfyuleI/AAAAAAAABiU/09SIIAD0J18/s1600/seociyus.blogspot.com_056.gif",
      ":g": "http://2.bp.blogspot.com/-SnyOak6n5Ag/UO8kQXDwCgI/AAAAAAAABig/oMHXVC1XVzw/s1600/seociyus.blogspot.com_058.gif",
      ":h": "http://1.bp.blogspot.com/-k-HCrYQC4ZI/UO8kQufPrjI/AAAAAAAABik/ilRY6xFv57s/s1600/seociyus.blogspot.com_1.gif",
      ":i": "http://2.bp.blogspot.com/-Zcpc13NqVqs/UO8kQrEz02I/AAAAAAAABio/K7ZtMjA6AEA/s1600/seociyus.blogspot.com_2.gif",
      ":j": "http://3.bp.blogspot.com/-4ARnUQNOWto/UO8kRfhPofI/AAAAAAAABi0/_uev36cQ7xA/s1600/seociyus.blogspot.com_4.gif",
      ":k": "http://4.bp.blogspot.com/-yHZsoA-TFd8/UO8kRpilcAI/AAAAAAAABi4/xGKkq5hlLlI/s1600/seociyus.blogspot.com_5.gif",
      ":l": "http://3.bp.blogspot.com/-Ci5V8FILdUI/UO8DG03KBmI/AAAAAAAABf4/vJwiwEe--Mw/s1600/seociyus.blogspot.com_070.gif",
      ":m": "http://3.bp.blogspot.com/-kdvLM-CxY64/UO8DqjtSCFI/AAAAAAAABgA/zSeaYBuX9co/s1600/seociyus.blogspot.com_010.gif",
      ":n": "http://3.bp.blogspot.com/-5sG0JNw1j8M/UO8ESkVJx_I/AAAAAAAABgI/1cRKvfWdzv0/s1600/seociyus.blogspot.com_059.gif",
      ":o": "http://1.bp.blogspot.com/-R1SaeYx1eEc/UO8ES9f3ugI/AAAAAAAABgM/wmEMF82TkNQ/s1600/seociyus.blogspot.com_088.gif",
      ":p": "http://3.bp.blogspot.com/-vg-COD3Lj7U/UO8hm4yLiNI/AAAAAAAABhY/vnsCsvmREgs/s1600/seociyus.blogspot.com_012.gif",
      ":q": "http://4.bp.blogspot.com/-mFn-qlR8URw/UO8hm7gw4YI/AAAAAAAABhc/Uob5CuPK3q8/s1600/seociyus.blogspot.com_033.gif",
      ":r": "http://3.bp.blogspot.com/-_kKLZ4YR9us/UO8hm-aYEJI/AAAAAAAABhg/UDJpVrogVug/s1600/seociyus.blogspot.com_011.gif",
      ":s": "http://4.bp.blogspot.com/-JCua6HjsXxk/UO8oKDxI6QI/AAAAAAAABjo/ekhBM06YrrE/s1600/seociyus.blogspot.com_7.gif",
      ":t": "http://3.bp.blogspot.com/-khk4bcrcL9g/UO8oKBU6xiI/AAAAAAAABjs/rwwl9KFgQYM/s1600/seociyus.blogspot.com_8.gif"
    };

    var comments = document.querySelectorAll(".comment, .comment-content, .comment-body, dd");

    for (var i = 0; i < comments.length; i++) {

      var html = comments[i].innerHTML;

      for (var key in map) {
        var img = '<img src="' + map[key] + '" style="width:24px;height:24px;vertical-align:middle;">';
        html = html.split(key).join(img);
      }

      comments[i].innerHTML = html;
    }
  }

  // jalankan berulang (karena Blogger AJAX)
  setInterval(replaceEmoticons, 2000);

});
