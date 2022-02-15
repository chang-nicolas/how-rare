let popup = {
  overlay: function () {
    return $("#overlay");
  },
  btn: function () {
    return $(".o-popup");
  },
  oClose: function () {
    return $(".overlay-close");
  },

  modal: function () {
    this.show();
    this.close();
    this.confirm();
  },

  show: function () {
    let me = this;
    me.btn().click(function (e) {
      me.content($(e.target));
      me.overlay().show();
      return false;
    });
  },

  content: function (data) {
    let oBody = $(".overlay-content");
    // clear
    oBody.html("");
    // add content
    if (data.is("img")) {
      let thumbUrl = data.prop("src"),
        imgUrl = thumbUrl.replace("thumbnails", "images");
      oBody.append('<img src="' + imgUrl + '" alt="drop image">');
    }
  },

  close: function () {
    // define var
    let me = this,
      oContent = $(".overlay-content");

    // when the user clicks on <span> (x), close the modal
    me.oClose().click(function () {
      me.overlay().fadeOut();
    });

    // when the user clicks anywhere outside of the modal, close it
    $(document).mouseup(function (e) {
      // if the target of the click isn't the container nor a descendant of the container
      if (!oContent.is(e.target) && oContent.has(e.target).length === 0)
        me.overlay().fadeOut();
    });
  },

  confirm: function () {
    $(".delete-action").click(function (e) {
      if (confirm($(this).data("message"))) {
        $(this).siblings("form#delete-action").submit();
      }
      return false;
    });
  },
};
