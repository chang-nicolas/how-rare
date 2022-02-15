let howRareIs = {
  init: function () {
    this.showScore();

    dayNight.plug();
    popup.modal();
    page.request();
    utils.search();
  },

  showScore: function () {
    $(document).on("click", ".scorebox", function () {
      let score = $(this).parent().parent().parent().next();
      setTimeout(function () {
        if (score.css("display") === "none") score.show();
        else score.hide();
      }, 400);
    });
  },
};

let page = {
  request: function () {
    let page = $("[data-page]").data("page");
    switch (page) {
      case "index":
        return this.index();
      case "collection":
        return this.collection();
      case "rare":
        return this.rare();
      case "drops":
        return this.drops();
      case "faq":
        return this.faq();
      default:
        return this.index();
    }
  },

  index: function () {
    utils.sortable("mc");
    pagin.boot("/get/collections");
  },

  collection: function () {
    let name = $("#collection").val();
    toggle.stats();
    filter.setFilters({
      collection: name,
    });
    filter.collectionFilter(function (e) {
      $(".results_count strong").html(e.total);
    });

    pagin.topage("/collection/search/filter", "use-filter");
  },

  rare: function () {
    toggle.sales();
  },

  drops: function () {
    // TODO
  },

  faq: function () {
    $("#faq [data-accordion]").accordion();
  },
};

let utils = {
  sortable: function (attr) {
    $(".sort_table").on("click", function () {
      $(this).toggleClass("up");

      let table = $(".table").sort(function (a, b) {
        let cA = parseFloat($(a).find(".coll_sortable").data(attr));
        let cB = parseFloat($(b).find(".coll_sortable").data(attr));
        return cA < cB ? -1 : cA > cB ? -1 : 0;
      });

      $(".collection-pagination").html(table);
    });
  },

  search: function () {
    let that = this,
      pattern = "^[A-Za-z0-9? ,_-]+$",
      form = $("#search-form"),
      searchField = $("#search-collections"),
      container = $("#search-suggestions");

    searchField.on("input", function () {
      let value = $(this).val();
      if (that.pregMatch(pattern, value) && value.length >= 2) {
        $.ajax({
          method: "post",
          data: { search: value },
          url: "/get/collections/search",
          headers: { "X-CSRF-TOKEN": $('input[name="_token"]').val() },
          success: function (r) {
            container.empty().append(r.view);
          },
          error: function (r) {
            console.error("ERROR", r.statusText);
          },
        });
      }
      container.html("");
      return false;
    });

    container.one("click", ".r__collection_i_data", function () {
      let slug = $(this).find(".r__collection_i_data__slug").html();
      searchField.val(slug);
      // form.attr('action', '/collection/'+slug)
      // form.submit();
      window.location = "/" + slug;
      return false;
    });

    form.click(() => false);
  },

  pregMatch: function (pattern, value) {
    let regex = new RegExp(pattern);
    return regex.test(value);
  },
};

let filter = {
  filters: {},

  setFilters: function (filters) {
    this.filters = filters;
  },

  getFilters: function () {
    return this.filters;
  },

  collectionFilter: function (callback = null) {
    let that = this,
      filters = {
        ids: {},
        traits: {},
        rank: {},
        price: {},
      },
      selectChangeEventHandler = function (el) {
        let container = $(el).data("filter");
        if (container) {
          filters["traits"][container] = $(el).val();
        }
        return filters;
      },
      textInputChangeEventHandler = function () {
        let container = $(this).data("filter");
        if (container) {
          filters[container] = $(this).val();
        }
        return filters;
      },
      rangeInputChangeEventHandler = function (el, e) {
        let minBtn = $(el).parent().children(".min"),
          maxBtn = $(el).parent().children(".max"),
          range_min = $(el).parent().children(".range_min"),
          range_max = $(el).parent().children(".range_max"),
          minVal = parseFloat($(minBtn).val()),
          maxVal = parseFloat($(maxBtn).val()),
          origin = e.originalEvent.target.className,
          container = $(el).parent().data("filter");

        if (origin === "min" && minVal >= maxVal) $(minBtn).val(maxVal);

        minVal = parseFloat($(minBtn).val());
        $(range_min).html(minVal);

        if (origin === "max" && maxVal <= minVal) $(maxBtn).val(minVal);

        maxVal = parseFloat($(maxBtn).val());
        $(range_max).html(maxVal);

        filters[container] = { min: minVal, max: maxVal };
        return filters;
      };

    $("div.nfts_holder").on("change", "select", function () {
      selectChangeEventHandler(this);
      $("#collection-filter").submit();
    });

    $('input[type="range"]').on("input", function (e) {
      rangeInputChangeEventHandler(this, e);

      container = $(this).parent().data("filter");
      if (!container || !filters[container]) {
        return;
      }

      // Submit form only when user stop moving slider
      // 1. get current filter values
      // 2. wait .6 seconds
      // 3. get filter values again
      // 3. compare; if match submit

      var start_min = parseFloat($(this).parent().children(".min").val());
      var start_max = parseFloat($(this).parent().children(".max").val());

      setTimeout(function () {
        stop_min = parseFloat(
          $('div[data-filter="' + container + '"]')
            .children(".min")
            .val()
        );
        stop_max = parseFloat(
          $('div[data-filter="' + container + '"]')
            .children(".max")
            .val()
        );

        if (start_min == stop_min && start_max == stop_max) {
          $("#collection-filter").submit();
        }
      }, 600);
    });

    $('input[type="text"]').on("input", textInputChangeEventHandler);

    $("#collection-filter").submit(function (e) {
      e.preventDefault();
      pagin.reset();
      filters.collection = $(this).data("filter");

      $("div.loader_overlay").show();

      $.ajax({
        method: "post",
        data: filters,
        url: "/collection/search/filter?sort=" + $("#sort_by").val(),
        headers: { "X-CSRF-TOKEN": $('input[name="_token"]').val() },
        success: function (r) {
          if (callback) callback(r);
          that.setFilters(r.filters);
          $(".nfts_content").replaceWith(r.view);

          // update trait filters count
          $('#collection-filter select[data-type="trait_filter"]').each(
            function () {
              var filter = this.getAttribute("data-filter");
              $("option", this).each(function () {
                trait = this.value;
                if (r.traits[filter][trait]) {
                  new_val = $(this)
                    .html()
                    .replace(/\(\d+\)/, "(" + r.traits[filter][trait] + ")");
                } else {
                  new_val = $(this)
                    .html()
                    .replace(/\(\d+\)/, "(0)");
                }
                $(this).html(new_val);
              });
            }
          );

          // update attribute_count count
          $('#collection-filter select[data-filter="trait_count"] option').each(
            function () {
              if (r.attribute_count[this.value]) {
                new_val = $(this)
                  .html()
                  .replace(
                    /\(\d+\)/,
                    "(" + r.attribute_count[this.value] + ")"
                  );
              } else {
                new_val = $(this)
                  .html()
                  .replace(/\(\d+\)/, "(0)");
              }
              $(this).html(new_val);
            }
          );

          $("div.loader_overlay").hide();
        },
        error: function (r) {
          $("div.loader_overlay").hide();
          console.error("ERROR", r.statusText);
        },
      });
      return filters;
    });
  },
};

let toggle = {
  stats: function () {
    let that = this;
    $("#toggle_stats").on("click", function () {
      $(this).toggleClass("close");
      $(".stats_full_holder").each(function () {
        that.heightToOpenClose($(this));
      });
    });
  },

  sales: function () {
    let that = this;
    $("#toggle_sales").on("click", function () {
      $(this).toggleClass("close");
      $(".sales_history").each(function () {
        that.heightToOpenClose($(this));
      });
    });
  },

  heightToOpenClose: function (e) {
    if (e.hasClass("open")) e.on("end", this.heightToClose(e));
    // close
    else e.on("end", this.heightToOpen(e)); // open
  },

  heightToOpen: function (
    e // open
  ) {
    e.height(e.get(0).scrollHeight).addClass("open"); // get height and open
    return e.one("transitionend", function () {
      // after transition complete
      $(this).height(""); // revert to CSS-set height
    });
  },

  heightToClose: function (
    e // close
  ) {
    return e.height(e.get(0).scrollHeight).height("").removeClass("open"); // get height and close
  },
};

let cookie = {
  createCookie: function (name, value, days) {
    let expires;
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie =
      encodeURIComponent(name) +
      "=" +
      encodeURIComponent(value) +
      expires +
      "; path=/";
  },

  readCookie: function (name) {
    let nameEQ = encodeURIComponent(name) + "=",
      ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  },
};

let dayNight = {
  plug: function () {
    let me = this;

    if (cookie.readCookie("daynight") === "true") me.enableLightMode();

    $("a.daynight").on("click", function () {
      let enabled = !$("link.daynight").prop("disabled");
      cookie.createCookie("daynight", !enabled, 365);
      enabled ? me.disableLightMode() : me.enableLightMode();
      return false;
    });
  },

  enableLightMode: function () {
    $("link.daynight").prop("disabled", false);
  },

  disableLightMode: function () {
    $("link.daynight").prop("disabled", true);
  },
};

let pagin = {
  page: 2,
  last: 99999,

  boot: function (url, data = null) {
    let me = this;

    if (!$(".collection-pagination").length) return false;

    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        let urlPag = url + "?page=" + me.page;
        if (me.page > me.last) return false;
        me.loadData(urlPag, data, "");
      }
    });
  },

  topage: function (url, data = null) {
    let me = this;
    $("div.nfts_holder").on("click", "div.pager a", function (e) {
      e.preventDefault();
      let urlPag =
        url + "?page=" + $(this).data("page") + "&sort=" + $("#sort_by").val();
      me.loadData(urlPag, data, "div.nfts_content");
    });
  },

  loadData: function (url, data, el_holder) {
    let me = this;
    if (data === "use-filter") {
      data = filter.getFilters();
    }

    $("div.loader_overlay").show();

    $.ajax({
      method: "post",
      data: data,
      url: url,
      headers: { "X-CSRF-TOKEN": $('input[name="_token"]').val() },
      success: function (r) {
        me.page = r.page;
        me.last = r.last;
        $("div.loader_overlay").hide();
        if (el_holder != "") {
          $(el_holder).replaceWith(r.view);
        } else {
          $(".collection-pagination").append(r.view);
        }
      },
      error: function (r) {
        $("div.loader_overlay").hide();
        console.error("ERROR", r.statusText);
      },
    });
  },

  reset: function () {
    this.page = 2;
    this.last = 9999;
    return true;
  },
};

$(document).ready(function () {
  howRareIs.init();
});
