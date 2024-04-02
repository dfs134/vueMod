$(function() {
  var SN = SpatialNavigation;
  SN.init();
  SN.set({
    straightOnly: true
  });
  SN.add("content", {
    selector: ".content .item",
    enterTo: "last-focused"
  });
  SN.add("search", {
    selector: "#search-box-placeholder"
  });
  SN.add("sidebar", {
    selector: "#sidebar"
  });
  SN.add("menu", {
    selector: "#menu .item",
    defaultElement: "#menu .item:first-child",
    enterTo: "default-element",
    leaveFor: {
      right: "@content",
      up: "",
      down: "",
      left: ""
    }
  });
  $(window).on("sn:focused", function(evt) {
    var $target = $(evt.target);
    if ($target.is("#sidebar")) {
      $("#sidebar").addClass("focused");
      SN.disable("sidebar");
      setTimeout(function() {
        SN.focus("menu");
      }, 200);
    } else if (!$target.parents("#sidebar").length) {
      $("#sidebar").removeClass("focused");
      SN.enable("sidebar");
    }
  });
  var currentRow = 1;
  var duringAnimation = false;
  $(".content .item")
    .on("sn:willfocus", function() {
      var $target = $(this);
      var row = $target.parents(".contentgroup").data("content-row");
      if (row > currentRow) {
        SN.pause();
        $('.contentgroup[data-content-row="' + currentRow + '"]')
          .addClass("fading-out")
          .fadeOut(300);
        window.requestAnimationFrame(function() {
          var $div = $("<div>")
            .addClass("animate placeholder")
            .prependTo("#content");
          window.requestAnimationFrame(function() {
            $div.removeClass("placeholder").on("transitionend", function() {
              $div.remove();
              SN.focus($target);
              SN.resume();
            });
          });
        });
        currentRow = row;
        return false;
      }
      currentRow = row;
    })
    .on("sn:willmove", function(evt) {
      if (duringAnimation) {
        return false;
      }
      var detail = evt.originalEvent.detail;
      if (
        detail.direction == "up" &&
        detail.cause == "keydown" &&
        currentRow > 1
      ) {
        duringAnimation = true;
        window.requestAnimationFrame(function() {
          var $targetRow = $(
            '.contentgroup[data-content-row="' + (currentRow - 1) + '"]'
          );
          var $div = $("<div>")
            .addClass("animate")
            .prependTo("#content");
          $targetRow.fadeIn(300);
          window.requestAnimationFrame(function() {
            $div.addClass("placeholder").on("transitionend", function() {
              $div.remove();
              $targetRow.removeClass("fading-out");
              duringAnimation = false;
              SN.move("up");
            });
          });
        });
        return false;
      }
    });
  SN.makeFocusable();
  SN.focus("content");
});
