window.emoticonx = (function () {

  var init = function (options) {
    var opt = options || {};

    var emoRange = opt.emoRange || "#comments p, div.emoWrap";
    var editorPos = opt.putEmoAbove || "iframe#comment-editor";
    var topText = opt.topText || "Klik untuk melihat kode!";
    var message = opt.emoMessage || "Untuk memasukkan emoticon setidaknya ada satu spasi sebelum kode emoticon.";

    // Insert emoticon helper UI
    $(editorPos).before(
      '<div style="text-align:center" class="emoWrap">' +
      ' :a :b :c :d :e :f :g :h :i :j :k :l :m ' +
      '<br/><b>' + topText + '</b><br/>' + message +
      '</div>'
    );

    // Function replace emoticon text → image
    var replaceEmo = function (regex, url, alt) {
      $(emoRange).each(function () {
        $(this).html(
          $(this).html()
            .replace(/<br>:/g, "<br> :")
            .replace(/<br>;/g, "<br> ;")
            .replace(/<br>=/g, "<br> =")
            .replace(/<br>\^/g, "<br> ^")
            .replace(regex,
              " <img style='max-height:24px' src='" + url +
              "' class='emo delayLoad' alt='" + alt +
              "' title='" + alt + "' />"
            )
        );
      });
    };

    // === EMOTICON LIST ===
    replaceEmo(/\s:\)\)+/g, "http://1.bp.blogspot.com/-okT2YW2xLdk/UO8kORszupI/AAAAAAAABiA/-m2KzdtWy9g/s1600/seociyus.blogspot.com_052.gif", ":a");
    replaceEmo(/\s;\(\(+/g, "http://3.bp.blogspot.com/-y0kyN7mxtSA/UO8kOPJf0KI/AAAAAAAABiE/KSpycJ1MxF8/s1600/seociyus.blogspot.com_051.gif", ":b");
    replaceEmo(/\s:\)+/g, "http://4.bp.blogspot.com/-j06i2xh_8sM/UO8kObpX4rI/AAAAAAAABiI/PajlFXUQAmE/s1600/seociyus.blogspot.com_053.gif", ":c");
    replaceEmo(/\s:-\)+/g, "http://4.bp.blogspot.com/--lk67H6IWf4/UO8kPCv8fLI/AAAAAAAABiM/b4XAUwGmEbU/s1600/seociyus.blogspot.com_055.gif", ":d");
    replaceEmo(/\s=\)\)+/g, "http://1.bp.blogspot.com/-YKv8DELCCCE/UO8kPtGZSHI/AAAAAAAABiQ/yc1b2zT6gck/s1600/seociyus.blogspot.com_057.gif", ":e");
    replaceEmo(/\s;\(+/g, "http://4.bp.blogspot.com/-iUBAaU71lDY/UO8kPfyuleI/AAAAAAAABiU/09SIIAD0J18/s1600/seociyus.blogspot.com_056.gif", ":f");
    replaceEmo(/\s;-\(+/g, "http://2.bp.blogspot.com/-SnyOak6n5Ag/UO8kQXDwCgI/AAAAAAAABig/oMHXVC1XVzw/s1600/seociyus.blogspot.com_058.gif", ":g");
    replaceEmo(/\s:d/ig, "http://1.bp.blogspot.com/-k-HCrYQC4ZI/UO8kQufPrjI/AAAAAAAABik/ilRY6xFv57s/s1600/seociyus.blogspot.com_1.gif", ":h");
    replaceEmo(/\s:-d/ig, "http://2.bp.blogspot.com/-Zcpc13NqVqs/UO8kQrEz02I/AAAAAAAABio/K7ZtMjA6AEA/s1600/seociyus.blogspot.com_2.gif", ":i");
    replaceEmo(/\s@-\)+/g, "http://3.bp.blogspot.com/-4ARnUQNOWto/UO8kRfhPofI/AAAAAAAABi0/_uev36cQ7xA/s1600/seociyus.blogspot.com_4.gif", ":j");
    replaceEmo(/\s:p/ig, "http://4.bp.blogspot.com/-yHZsoA-TFd8/UO8kRpilcAI/AAAAAAAABi4/xGKkq5hlLlI/s1600/seociyus.blogspot.com_5.gif", ":k");
    replaceEmo(/\s:o/ig, "http://3.bp.blogspot.com/-Ci5V8FILdUI/UO8DG03KBmI/AAAAAAAABf4/vJwiwEe--Mw/s1600/seociyus.blogspot.com_070.gif", ":l");
    replaceEmo(/\scheer/ig, "http://3.bp.blogspot.com/-kdvLM-CxY64/UO8DqjtSCFI/AAAAAAAABgA/zSeaYBuX9co/s1600/seociyus.blogspot.com_010.gif", ":m");

    // Click handler (show message once)
    $("div.emoWrap").one("click", function () {
      if (message) alert(message);
    });

    // Click emoticon → copy code
    $(".emo")
      .css("cursor", "pointer")
      .live("click", function (e) {
        $(".emoKey").remove();

        $(this).after(
          '<input class="emoKey" type="text" size="' + this.alt.length +
          '" value=" ' + this.alt + '" />'
        );

        $(".emoKey").trigger("select");
        e.stopPropagation();
      });

    $(".emoKey").live("click", function () {
      $(this).focus().select();
    });
  };

  return function (options) {
    init(options);
  };

})();
