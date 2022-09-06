var sbi_js_exists = void 0 !== sbi_js_exists;
sbi_js_exists ||
  (!(function (i) {
    function e() {
      var i,
        e,
        t,
        s = s || { VER: "0.9.944" };
      (s.bgs_Available = !1),
        (s.bgs_CheckRunned = !1),
        (function (i) {
          i.fn.extend({
            sbi_imgLiquid: function (e) {
              (this.defaults = {
                fill: !0,
                verticalAlign: "center",
                horizontalAlign: "center",
                useBackgroundSize: !0,
                useDataHtmlAttr: !0,
                responsive: !0,
                delay: 0,
                fadeInTime: 0,
                removeBoxBackground: !0,
                hardPixels: !0,
                responsiveCheckTime: 500,
                timecheckvisibility: 500,
                onStart: null,
                onFinish: null,
                onItemStart: null,
                onItemFinish: null,
                onItemError: null,
              }),
                (function () {
                  if (!s.bgs_CheckRunned) {
                    s.bgs_CheckRunned = !0;
                    var e = i('<span style="background-size:cover" />');
                    i("body").append(e),
                      (function () {
                        var i = e[0];
                        if (i && window.getComputedStyle) {
                          var t = window.getComputedStyle(i, null);
                          t && t.backgroundSize && (s.bgs_Available = "cover" === t.backgroundSize);
                        }
                      })(),
                      e.remove();
                  }
                })();
              var t = this;
              return (
                (this.options = e),
                (this.settings = i.extend({}, this.defaults, this.options)),
                this.settings.onStart && this.settings.onStart(),
                this.each(function (e) {
                  function n() {
                    (r.responsive || c.data("sbi_imgLiquid_oldProcessed")) &&
                      c.data("sbi_imgLiquid_settings") &&
                      ((r = c.data("sbi_imgLiquid_settings")),
                      (l.actualSize = l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4),
                      l.sizeOld && l.actualSize !== l.sizeOld && o(),
                      (l.sizeOld = l.actualSize),
                      setTimeout(n, r.responsiveCheckTime));
                  }
                  function a() {
                    c.data("sbi_imgLiquid_error", !0), l.addClass("sbi_imgLiquid_error"), r.onItemError && r.onItemError(e, l, c), d();
                  }
                  function o() {
                    var i,
                      t,
                      s,
                      n,
                      a,
                      o,
                      g,
                      h,
                      f = 0,
                      u = 0,
                      b = l.width(),
                      _ = l.height();
                    void 0 === c.data("owidth") && c.data("owidth", c[0].width),
                      void 0 === c.data("oheight") && c.data("oheight", c[0].height),
                      r.fill === b / _ >= c.data("owidth") / c.data("oheight")
                        ? ((i = "100%"), (t = "auto"), (s = Math.floor(b)), (n = Math.floor(b * (c.data("oheight") / c.data("owidth")))))
                        : ((i = "auto"), (t = "100%"), (s = Math.floor(_ * (c.data("owidth") / c.data("oheight")))), (n = Math.floor(_))),
                      (g = b - s),
                      "left" === (a = r.horizontalAlign.toLowerCase()) && (u = 0),
                      "center" === a && (u = 0.5 * g),
                      "right" === a && (u = g),
                      -1 !== a.indexOf("%") && (a = parseInt(a.replace("%", ""), 10)) > 0 && (u = g * a * 0.01),
                      (h = _ - n),
                      "left" === (o = r.verticalAlign.toLowerCase()) && (f = 0),
                      "center" === o && (f = 0.5 * h),
                      "bottom" === o && (f = h),
                      -1 !== o.indexOf("%") && (o = parseInt(o.replace("%", ""), 10)) > 0 && (f = h * o * 0.01),
                      r.hardPixels && ((i = s), (t = n)),
                      c.css({ width: i, height: t, "margin-left": Math.floor(u), "margin-top": Math.floor(f) }),
                      c.data("sbi_imgLiquid_oldProcessed") ||
                        (c.fadeTo(r.fadeInTime, 1),
                        c.data("sbi_imgLiquid_oldProcessed", !0),
                        r.removeBoxBackground && l.css("background-image", "none"),
                        l.addClass("sbi_imgLiquid_nobgSize"),
                        l.addClass("sbi_imgLiquid_ready")),
                      r.onItemFinish && r.onItemFinish(e, l, c),
                      d();
                  }
                  function d() {
                    e === t.length - 1 && t.settings.onFinish && t.settings.onFinish();
                  }
                  var r = t.settings,
                    l = i(this),
                    c = i("img:first", l);
                  return c.length
                    ? (c.data("sbi_imgLiquid_settings")
                        ? (l.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"),
                          (r = i.extend({}, c.data("sbi_imgLiquid_settings"), t.options)))
                        : (r = i.extend(
                            {},
                            t.settings,
                            (function () {
                              var i = {};
                              if (t.settings.useDataHtmlAttr) {
                                var e = l.attr("data-sbi_imgLiquid-fill"),
                                  n = l.attr("data-sbi_imgLiquid-horizontalAlign"),
                                  a = l.attr("data-sbi_imgLiquid-verticalAlign");
                                ("true" === e || "false" === e) && (i.fill = Boolean("true" === e)),
                                  void 0 === n ||
                                    ("left" !== n && "center" !== n && "right" !== n && -1 === n.indexOf("%")) ||
                                    (i.horizontalAlign = n),
                                  void 0 === a ||
                                    ("top" !== a && "bottom" !== a && "center" !== a && -1 === a.indexOf("%")) ||
                                    (i.verticalAlign = a);
                              }
                              return s.isIE && t.settings.ieFadeInDisabled && (i.fadeInTime = 0), i;
                            })()
                          )),
                      c.data("sbi_imgLiquid_settings", r),
                      r.onItemStart && r.onItemStart(e, l, c),
                      void (s.bgs_Available && r.useBackgroundSize
                        ? (-1 === l.css("background-image").indexOf(encodeURI(c.attr("src"))) &&
                            l.css({ "background-image": 'url("' + encodeURI(c.attr("src")) + '")' }),
                          l.css({
                            "background-size": r.fill ? "cover" : "contain",
                            "background-position": (r.horizontalAlign + " " + r.verticalAlign).toLowerCase(),
                            "background-repeat": "no-repeat",
                          }),
                          i("a:first", l).css({ display: "block", width: "100%", height: "100%" }),
                          i("img", l).css({ display: "none" }),
                          r.onItemFinish && r.onItemFinish(e, l, c),
                          l.addClass("sbi_imgLiquid_bgSize"),
                          l.addClass("sbi_imgLiquid_ready"),
                          d())
                        : (function t() {
                            if (c.data("oldSrc") && c.data("oldSrc") !== c.attr("src")) {
                              var s = c.clone().removeAttr("style");
                              return (
                                s.data("sbi_imgLiquid_settings", c.data("sbi_imgLiquid_settings")),
                                c.parent().prepend(s),
                                c.remove(),
                                ((c = s)[0].width = 0),
                                void setTimeout(t, 10)
                              );
                            }
                            return c.data("sbi_imgLiquid_oldProcessed")
                              ? void o()
                              : (c.data("sbi_imgLiquid_oldProcessed", !1),
                                c.data("oldSrc", c.attr("src")),
                                i("img:not(:first)", l).css("display", "none"),
                                l.css({ overflow: "hidden" }),
                                c
                                  .fadeTo(0, 0)
                                  .removeAttr("width")
                                  .removeAttr("height")
                                  .css({
                                    visibility: "visible",
                                    "max-width": "none",
                                    "max-height": "none",
                                    width: "auto",
                                    height: "auto",
                                    display: "block",
                                  }),
                                c.on("error", a),
                                (c[0].onerror = a),
                                (function i() {
                                  c.data("sbi_imgLiquid_error") ||
                                    c.data("sbi_imgLiquid_loaded") ||
                                    c.data("sbi_imgLiquid_oldProcessed") ||
                                    (l.is(":visible") && c[0].complete && c[0].width > 0 && c[0].height > 0
                                      ? (c.data("sbi_imgLiquid_loaded", !0), setTimeout(o, e * r.delay))
                                      : setTimeout(i, r.timecheckvisibility));
                                })(),
                                void n());
                          })()))
                    : void a();
                })
              );
            },
          });
        })(jQuery),
        (i = s.injectCss),
        (e = document.getElementsByTagName("head")[0]),
        ((t = document.createElement("style")).type = "text/css"),
        t.styleSheet ? (t.styleSheet.cssText = i) : t.appendChild(document.createTextNode(i)),
        e.appendChild(t);
    }
    function t() {
      (this.feeds = {}), (this.options = sb_instagram_js_options);
    }
    function s(i, e, t) {
      (this.el = i),
        (this.index = e),
        (this.settings = t),
        (this.minImageWidth = 0),
        (this.imageResolution = 150),
        (this.resizedImages = {}),
        (this.needsResizing = []),
        (this.outOfPages = !1),
        (this.page = 1),
        (this.isInitialized = !1);
    }
    function n(e, t) {
      i.ajax({ url: sbiajaxurl, type: "post", data: e, success: t });
    }
    (t.prototype = {
      createPage: function (e, t) {
        void 0 !== sb_instagram_js_options.ajax_url &&
          void 0 === window.sbiajaxurl &&
          (window.sbiajaxurl = sb_instagram_js_options.ajax_url),
          (void 0 !== window.sbiajaxurl && -1 !== window.sbiajaxurl.indexOf(window.location.hostname)) ||
            (window.sbiajaxurl = location.protocol + "//" + window.location.hostname + "/wp-admin/admin-ajax.php"),
          i("#sbi-builder-app").length &&
            void 0 === window.sbiresizedImages &&
            i(".sbi_resized_image_data").length &&
            void 0 !== i(".sbi_resized_image_data").attr("data-resized") &&
            0 === i(".sbi_resized_image_data").attr("data-resized").indexOf('{"') &&
            ((window.sbiresizedImages = JSON.parse(i(".sbi_resized_image_data").attr("data-resized"))),
            i(".sbi_resized_image_data").remove()),
          i(".sbi_no_js_error_message").remove(),
          i(".sbi_no_js").removeClass("sbi_no_js"),
          e(t);
      },
      createFeeds: function (e) {
        e.whenFeedsCreated(
          i(".sbi").each(function (e) {
            i(this).attr("data-sbi-index", e + 1);
            var t = i(this),
              a = void 0 !== t.attr("data-sbi-flags") ? t.attr("data-sbi-flags").split(",") : [],
              o = void 0 !== t.attr("data-options") ? JSON.parse(t.attr("data-options")) : {};
            if (a.indexOf("testAjax") > -1) {
              window.sbi.triggeredTest = !0;
              n({ action: "sbi_on_ajax_test_trigger" }, function (i) {
                console.log("did test");
              });
            }
            var d = {
              cols: t.attr("data-cols"),
              colsmobile:
                void 0 !== t.attr("data-colsmobile") && "same" !== t.attr("data-colsmobile")
                  ? t.attr("data-colsmobile")
                  : t.attr("data-cols"),
              colstablet:
                void 0 !== t.attr("data-colstablet") && "same" !== t.attr("data-colstablet")
                  ? t.attr("data-colstablet")
                  : t.attr("data-cols"),
              num: t.attr("data-num"),
              imgRes: t.attr("data-res"),
              feedID: t.attr("data-feedid"),
              postID: "undefind" != typeof t.attr("data-postid") ? t.attr("data-postid") : "unknown",
              shortCodeAtts: t.attr("data-shortcode-atts"),
              resizingEnabled: -1 === a.indexOf("resizeDisable"),
              imageLoadEnabled: -1 === a.indexOf("imageLoadDisable"),
              debugEnabled: a.indexOf("debug") > -1,
              favorLocal: a.indexOf("favorLocal") > -1,
              ajaxPostLoad: a.indexOf("ajaxPostLoad") > -1,
              gdpr: a.indexOf("gdpr") > -1,
              overrideBlockCDN: a.indexOf("overrideBlockCDN") > -1,
              consentGiven: !1,
              locator: a.indexOf("locator") > -1,
              autoMinRes: 1,
              general: o,
            };
            (window.sbi.feeds[e] = (function (i, e, t) {
              return new s(i, e, t);
            })(this, e, d)),
              window.sbi.feeds[e].setResizedImages(),
              window.sbi.feeds[e].init();
            var r = jQuery.Event("sbiafterfeedcreate");
            (r.feed = window.sbi.feeds[e]), jQuery(window).trigger(r);
          })
        );
      },
      afterFeedsCreated: function () {
        i(".sb_instagram_header").each(function () {
          var e = i(this);
          e.find(".sbi_header_link").on("mouseenter mouseleave", function (i) {
            switch (i.type) {
              case "mouseenter":
                e.find(".sbi_header_img_hover").addClass("sbi_fade_in");
                break;
              case "mouseleave":
                e.find(".sbi_header_img_hover").removeClass("sbi_fade_in");
            }
          });
        });
      },
      encodeHTML: function (i) {
        return void 0 === i
          ? ""
          : i
              .replace(/(>)/g, "&gt;")
              .replace(/(<)/g, "&lt;")
              .replace(/(&lt;br\/&gt;)/g, "<br>")
              .replace(/(&lt;br&gt;)/g, "<br>");
      },
      urlDetect: function (i) {
        return i.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      },
    }),
      (s.prototype = {
        init: function () {
          var e = this;
          (e.settings.consentGiven = e.checkConsent()),
            i(this.el).find(".sbi_photo").parent("p").length && i(this.el).addClass("sbi_no_autop"),
            i(this.el).find("#sbi_mod_error").length && i(this.el).prepend(i(this.el).find("#sbi_mod_error")),
            this.settings.ajaxPostLoad ? this.getNewPostSet() : this.afterInitialImagesLoaded();
          var t,
            s =
              ((t = 0),
              function (i, e) {
                clearTimeout(t), (t = setTimeout(i, e));
              });
          jQuery(window).on("resize", function () {
            s(function () {
              e.afterResize();
            }, 500);
          }),
            i(this.el)
              .find(".sbi_item")
              .each(function () {
                e.lazyLoadCheck(i(this));
              });
        },
        initLayout: function () {},
        afterInitialImagesLoaded: function () {
          this.initLayout(),
            this.loadMoreButtonInit(),
            this.hideExtraImagesForWidth(),
            this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed();
        },
        afterResize: function () {
          this.setImageHeight(), this.setImageResolution(), this.maybeRaiseImageResolution(), this.setImageSizeClass();
        },
        afterLoadMoreClicked: function (i) {
          i.find(".sbi_loader").removeClass("sbi_hidden"),
            i.find(".sbi_btn_text").addClass("sbi_hidden"),
            i.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide");
        },
        afterNewImagesLoaded: function () {
          var e = i(this.el),
            t = this;
          this.beforeNewImagesRevealed(),
            this.revealNewImages(),
            this.afterNewImagesRevealed(),
            setTimeout(function () {
              e.find(".sbi_loader").addClass("sbi_hidden"),
                e.find(".sbi_btn_text").removeClass("sbi_hidden"),
                t.maybeRaiseImageResolution();
            }, 500);
        },
        beforeNewImagesRevealed: function () {
          this.setImageHeight(), this.maybeRaiseImageResolution(!0), this.setImageSizeClass();
        },
        revealNewImages: function () {
          var e = i(this.el);
          e.find(".sbi-screenreader").each(function () {
            i(this).find("img").remove();
          }),
            "function" == typeof sbi_custom_js &&
              setTimeout(function () {
                sbi_custom_js();
              }, 100),
            this.applyImageLiquid(),
            e.find(".sbi_item").each(function (i) {
              jQuery(this)
                .find(".sbi_photo")
                .on("mouseenter mouseleave", function (i) {
                  switch (i.type) {
                    case "mouseenter":
                      jQuery(this).fadeTo(200, 0.85);
                      break;
                    case "mouseleave":
                      jQuery(this).stop().fadeTo(500, 1);
                  }
                });
            }),
            setTimeout(function () {
              jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");
              var i = 10;
              e.find(".sbi_transition").each(function () {
                var e = jQuery(this);
                setTimeout(function () {
                  e.removeClass("sbi_transition");
                }, i),
                  (i += 10);
              });
            }, 500);
        },
        lazyLoadCheck: function (e) {
          if (e.find(".sbi_photo").length && !e.closest(".sbi").hasClass("sbi-no-ll-check")) {
            var t = this.getImageUrls(e),
              s = void 0 !== t[640] ? t[640] : e.find(".sbi_photo").attr("data-full-res");
            if (!this.settings.consentGiven && s.indexOf("scontent") > -1) return;
            e.find(".sbi_photo img").each(function () {
              s && void 0 !== i(this).attr("data-src") && i(this).attr("data-src", s),
                s && void 0 !== i(this).attr("data-orig-src") && i(this).attr("data-orig-src", s),
                i(this).on("load", function () {
                  !i(this).hasClass("sbi-replaced") &&
                    i(this).attr("src").indexOf("placeholder") > -1 &&
                    (i(this).addClass("sbi-replaced"),
                    s &&
                      (i(this).attr("src", s),
                      i(this).closest(".sbi_imgLiquid_bgSize").length &&
                        i(this)
                          .closest(".sbi_imgLiquid_bgSize")
                          .css("background-image", "url(" + s + ")")));
                });
            });
          }
        },
        afterNewImagesRevealed: function () {
          this.listenForVisibilityChange(),
            this.sendNeedsResizingToServer(),
            this.settings.imageLoadEnabled || i(".sbi_no_resraise").removeClass("sbi_no_resraise");
          var e = i.Event("sbiafterimagesloaded");
          (e.el = i(this.el)), i(window).trigger(e);
        },
        setResizedImages: function () {
          i(this.el).find(".sbi_resized_image_data").length &&
          void 0 !== i(this.el).find(".sbi_resized_image_data").attr("data-resized") &&
          0 === i(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"')
            ? ((this.resizedImages = JSON.parse(i(this.el).find(".sbi_resized_image_data").attr("data-resized"))),
              i(this.el).find(".sbi_resized_image_data").remove())
            : void 0 !== window.sbiresizedImages && (this.resizedImages = window.sbiresizedImages);
        },
        sendNeedsResizingToServer: function () {
          var e = this,
            t = i(this.el);
          if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
            var s = i(this.el).find(".sbi_item").length,
              a = void 0 !== e.settings.general.cache_all && e.settings.general.cache_all,
              o = "";
            if ((void 0 !== t.attr("data-locatornonce") && (o = t.attr("data-locatornonce")), i("#sbi-builder-app").length)) {
              if (void 0 !== window.sbiresizeTriggered && window.sbiresizeTriggered) return;
              window.sbiresizeTriggered = !0;
            }
            n(
              {
                action: "sbi_resized_images_submit",
                needs_resizing: e.needsResizing,
                offset: s,
                feed_id: e.settings.feedID,
                atts: e.settings.shortCodeAtts,
                location: e.locationGuess(),
                post_id: e.settings.postID,
                cache_all: a,
                locator_nonce: o,
              },
              function (t) {
                var s = t;
                for (var n in ("object" != typeof t && 0 === t.trim().indexOf("{") && (s = JSON.parse(t.trim())),
                e.settings.debugEnabled && console.log(s),
                s))
                  s.hasOwnProperty(n) && (e.resizedImages[n] = s[n]);
                e.maybeRaiseImageResolution(),
                  setTimeout(function () {
                    e.afterResize();
                  }, 500),
                  i("#sbi-builder-app").length && (window.sbiresizeTriggered = !1);
              }
            );
          } else if (e.settings.locator) {
            o = "";
            void 0 !== t.attr("data-locatornonce") && (o = t.attr("data-locatornonce")),
              n(
                {
                  action: "sbi_do_locator",
                  feed_id: e.settings.feedID,
                  atts: e.settings.shortCodeAtts,
                  location: e.locationGuess(),
                  post_id: e.settings.postID,
                  locator_nonce: o,
                },
                function (i) {}
              );
          }
        },
        loadMoreButtonInit: function () {
          var e = i(this.el),
            t = this;
          e.find("#sbi_load .sbi_load_btn")
            .off()
            .on("click", function () {
              t.afterLoadMoreClicked(jQuery(this)), t.getNewPostSet();
            });
        },
        getNewPostSet: function () {
          var e = i(this.el),
            t = this;
          t.page++;
          var s = "";
          void 0 !== e.attr("data-locatornonce") && (s = e.attr("data-locatornonce"));
          n(
            {
              action: "sbi_load_more_clicked",
              offset: e.find(".sbi_item").length,
              page: t.page,
              feed_id: t.settings.feedID,
              atts: t.settings.shortCodeAtts,
              location: t.locationGuess(),
              post_id: t.settings.postID,
              current_resolution: t.imageResolution,
              locator_nonce: s,
            },
            function (s) {
              var n = s;
              "object" != typeof s && 0 === s.trim().indexOf("{") && (n = JSON.parse(s.trim())),
                t.settings.debugEnabled && console.log(n),
                t.appendNewPosts(n.html),
                t.addResizedImages(n.resizedImages),
                t.settings.ajaxPostLoad ? ((t.settings.ajaxPostLoad = !1), t.afterInitialImagesLoaded()) : t.afterNewImagesLoaded(),
                n.feedStatus.shouldPaginate ? (t.outOfPages = !1) : ((t.outOfPages = !0), e.find(".sbi_load_btn").hide()),
                i(".sbi_no_js").removeClass("sbi_no_js");
            }
          );
        },
        appendNewPosts: function (e) {
          var t = i(this.el);
          t.find("#sbi_images .sbi_item").length ? t.find("#sbi_images .sbi_item").last().after(e) : t.find("#sbi_images").append(e);
        },
        addResizedImages: function (i) {
          for (var e in i) this.resizedImages[e] = i[e];
        },
        setImageHeight: function () {
          var e = i(this.el),
            t = e.find(".sbi_photo").eq(0).innerWidth(),
            s = this.getColumnCount(),
            n = e.find("#sbi_images").innerWidth() - e.find("#sbi_images").width(),
            a = n / 2;
          (sbi_photo_width_manual = e.find("#sbi_images").width() / s - n),
            e.find(".sbi_photo").css("height", t),
            e.find(".sbi-owl-nav").length &&
              setTimeout(function () {
                var i = 2;
                e.find(".sbi_owl2row-item").length && (i = 1);
                var t = e.find(".sbi_photo").eq(0).innerWidth() / i;
                (t += parseInt(a) * (2 - i + 2)), e.find(".sbi-owl-nav div").css("top", t);
              }, 100);
        },
        maybeRaiseSingleImageResolution: function (e, t, s) {
          var n = this,
            a = n.getImageUrls(e),
            o = e.find(".sbi_photo img").attr("src"),
            d = 150,
            r = e.find("img").get(0),
            l = o === window.sbi.options.placeholder ? 1 : r.naturalWidth / r.naturalHeight;
          s = void 0 !== s && s;
          if (
            !(
              e.hasClass("sbi_no_resraise") ||
              e.hasClass("sbi_had_error") ||
              (e.find(".sbi_link_area").length && e.find(".sbi_link_area").hasClass("sbi_had_error"))
            )
          )
            if (a.length < 1)
              e.find(".sbi_link_area").length &&
                e.find(".sbi_link_area").attr("href", window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png"));
            else {
              ((e.find(".sbi_link_area").length &&
                e.find(".sbi_link_area").attr("href") ===
                  window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png")) ||
                !n.settings.consentGiven) &&
                e.find(".sbi_link_area").attr("href", a[a.length - 1]),
                void 0 !== a[640] && e.find(".sbi_photo").attr("data-full-res", a[640]),
                i.each(a, function (i, e) {
                  e === o && ((d = parseInt(i)), (s = !1));
                });
              var c = 640;
              switch (n.settings.imgRes) {
                case "thumb":
                  c = 150;
                  break;
                case "medium":
                  c = 320;
                  break;
                case "full":
                  c = 640;
                  break;
                default:
                  var g = Math.max(n.settings.autoMinRes, e.find(".sbi_photo").innerWidth()),
                    h = n.getBestResolutionForAuto(g, l, e);
                  switch (h) {
                    case 320:
                      c = 320;
                      break;
                    case 150:
                      c = 150;
                  }
              }
              if (c > d || o === window.sbi.options.placeholder || s) {
                if (n.settings.debugEnabled) {
                  var f = o === window.sbi.options.placeholder ? "was placeholder" : "too small";
                  console.log("rais res for " + o, f);
                }
                var u = a[c].split("?ig_cache_key")[0];
                if (
                  (o !== u && (e.find(".sbi_photo img").attr("src", u), e.find(".sbi_photo").css("background-image", 'url("' + u + '")')),
                  (d = c),
                  "auto" === n.settings.imgRes)
                ) {
                  var b = !1;
                  e.find(".sbi_photo img").on("load", function () {
                    var t = i(this),
                      s = t.get(0).naturalWidth / t.get(0).naturalHeight;
                    if (1e3 !== t.get(0).naturalWidth && s > l && !b) {
                      switch (
                        (n.settings.debugEnabled && console.log("rais res again for aspect ratio change " + o),
                        (b = !0),
                        (g = e.find(".sbi_photo").innerWidth()),
                        (h = n.getBestResolutionForAuto(g, s, e)),
                        (c = 640),
                        h)
                      ) {
                        case 320:
                          c = 320;
                          break;
                        case 150:
                          c = 150;
                      }
                      c > d &&
                        ((u = a[c].split("?ig_cache_key")[0]),
                        t.attr("src", u),
                        t.closest(".sbi_photo").css("background-image", 'url("' + u + '")')),
                        ("masonry" !== n.layout && "highlight" !== n.layout) ||
                          (i(n.el).find("#sbi_images").smashotope(n.isotopeArgs),
                          setTimeout(function () {
                            i(n.el).find("#sbi_images").smashotope(n.isotopeArgs);
                          }, 500));
                    } else if (n.settings.debugEnabled) {
                      var r = b ? "already checked" : "no aspect ratio change";
                      console.log("not raising res for replacement  " + o, r);
                    }
                  });
                }
              }
              e.find("img").on("error", function () {
                if (i(this).hasClass("sbi_img_error")) console.log("unfixed error " + i(this).attr("src"));
                else {
                  var e;
                  if (
                    (i(this).addClass("sbi_img_error"),
                    !(
                      i(this).attr("src").indexOf("media/?size=") > -1 ||
                      i(this).attr("src").indexOf("cdninstagram") > -1 ||
                      i(this).attr("src").indexOf("fbcdn") > -1
                    ) && n.settings.consentGiven)
                  ) {
                    if ("undefined" !== i(this).closest(".sbi_photo").attr("data-img-src-set"))
                      void 0 !== (e = JSON.parse(i(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/"))).d &&
                        (i(this).attr("src", e.d),
                        i(this)
                          .closest(".sbi_photo")
                          .css("background-image", "url(" + e.d + ")"),
                        i(this)
                          .closest(".sbi_item")
                          .addClass("sbi_had_error")
                          .find(".sbi_link_area")
                          .attr("href", e[640])
                          .addClass("sbi_had_error"));
                  } else
                    (n.settings.favorLocal = !0),
                      void 0 !== (e = n.getImageUrls(i(this).closest(".sbi_item")))[640] &&
                        (i(this).attr("src", e[640]),
                        i(this)
                          .closest(".sbi_photo")
                          .css("background-image", "url(" + e[640] + ")"),
                        i(this)
                          .closest(".sbi_item")
                          .addClass("sbi_had_error")
                          .find(".sbi_link_area")
                          .attr("href", e[640])
                          .addClass("sbi_had_error"));
                  setTimeout(function () {
                    n.afterResize();
                  }, 1500);
                }
              });
            }
        },
        maybeRaiseImageResolution: function (e) {
          var t = this,
            s = void 0 !== e && !0 === e ? ".sbi_item.sbi_new" : ".sbi_item",
            n = !t.isInitialized;
          i(t.el)
            .find(s)
            .each(function (e) {
              !i(this).hasClass("sbi_num_diff_hide") &&
                i(this).find(".sbi_photo").length &&
                void 0 !== i(this).find(".sbi_photo").attr("data-img-src-set") &&
                t.maybeRaiseSingleImageResolution(i(this), e, n);
            }),
            (t.isInitialized = !0);
        },
        getBestResolutionForAuto: function (e, t, s) {
          (isNaN(t) || t < 1) && (t = 1);
          var n = e * t,
            a = 10 * Math.ceil(n / 10),
            o = [150, 320, 640];
          if ((s.hasClass("sbi_highlighted") && (a *= 2), -1 === o.indexOf(parseInt(a)))) {
            var d = !1;
            i.each(o, function (i, e) {
              e > parseInt(a) && !d && ((a = e), (d = !0));
            });
          }
          return a;
        },
        hideExtraImagesForWidth: function () {
          if ("carousel" !== this.layout) {
            var e = i(this.el),
              t = void 0 !== e.attr("data-num") && "" !== e.attr("data-num") ? parseInt(e.attr("data-num")) : 1,
              s = void 0 !== e.attr("data-nummobile") && "" !== e.attr("data-nummobile") ? parseInt(e.attr("data-nummobile")) : t;
            i(window).width() < 480
              ? s < e.find(".sbi_item").length &&
                e
                  .find(".sbi_item")
                  .slice(s - e.find(".sbi_item").length)
                  .addClass("sbi_num_diff_hide")
              : t < e.find(".sbi_item").length &&
                e
                  .find(".sbi_item")
                  .slice(t - e.find(".sbi_item").length)
                  .addClass("sbi_num_diff_hide");
          }
        },
        setImageSizeClass: function () {
          var e = i(this.el);
          e.removeClass("sbi_small sbi_medium");
          var t = e.innerWidth(),
            s = parseInt(e.find("#sbi_images").outerWidth() - e.find("#sbi_images").width()) / 2,
            n = this.getColumnCount(),
            a = (t - s * (n + 2)) / n;
          a > 120 && a < 240 ? e.addClass("sbi_medium") : a <= 120 && e.addClass("sbi_small");
        },
        setMinImageWidth: function () {
          i(this.el).find(".sbi_item .sbi_photo").first().length
            ? (this.minImageWidth = i(this.el).find(".sbi_item .sbi_photo").first().innerWidth())
            : (this.minImageWidth = 150);
        },
        setImageResolution: function () {
          if ("auto" === this.settings.imgRes) this.imageResolution = "auto";
          else
            switch (this.settings.imgRes) {
              case "thumb":
                this.imageResolution = 150;
                break;
              case "medium":
                this.imageResolution = 320;
                break;
              default:
                this.imageResolution = 640;
            }
        },
        getImageUrls: function (i) {
          var e = JSON.parse(i.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/")),
            t = i.attr("id").replace("sbi_", "");
          if (
            (this.settings.consentGiven || this.settings.overrideBlockCDN || (e = []),
            void 0 !== this.resizedImages[t] &&
              "video" !== this.resizedImages[t] &&
              "pending" !== this.resizedImages[t] &&
              "error" !== this.resizedImages[t].id &&
              "video" !== this.resizedImages[t].id &&
              "pending" !== this.resizedImages[t].id)
          ) {
            if (void 0 !== this.resizedImages[t].sizes) {
              var s = [];
              void 0 !== this.resizedImages[t].sizes.full &&
                ((e[640] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg"), s.push(640)),
                void 0 !== this.resizedImages[t].sizes.low &&
                  ((e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg"), s.push(320)),
                void 0 !== this.resizedImages[t].sizes.thumb &&
                  (s.push(150), (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "thumb.jpg")),
                this.settings.favorLocal &&
                  (-1 === s.indexOf(640) &&
                    s.indexOf(320) > -1 &&
                    (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg"),
                  -1 === s.indexOf(320) &&
                    (s.indexOf(640) > -1
                      ? (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg")
                      : s.indexOf(150) > -1 && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "thumb.jpg")),
                  -1 === s.indexOf(150) &&
                    (s.indexOf(320) > -1
                      ? (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg")
                      : s.indexOf(640) > -1 && (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg")));
            }
          } else
            (void 0 === this.resizedImages[t] ||
              (void 0 !== this.resizedImages[t].id && "pending" !== this.resizedImages[t].id && "error" !== this.resizedImages[t].id)) &&
              this.addToNeedsResizing(t);
          return e;
        },
        getAvatarUrl: function (i, e) {
          if ("" === i) return "";
          var t = this.settings.general.avatars;
          return "local" === (e = void 0 !== e ? e : "local")
            ? void 0 !== t["LCL" + i] && 1 === parseInt(t["LCL" + i])
              ? sb_instagram_js_options.resized_url + i + ".jpg"
              : void 0 !== t[i]
              ? t[i]
              : ""
            : void 0 !== t[i]
            ? t[i]
            : void 0 !== t["LCL" + i] && 1 === parseInt(t["LCL" + i])
            ? sb_instagram_js_options.resized_url + i + ".jpg"
            : "";
        },
        addToNeedsResizing: function (i) {
          -1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i);
        },
        applyImageLiquid: function () {
          var t = i(this.el);
          e(), "function" == typeof t.find(".sbi_photo").sbi_imgLiquid && t.find(".sbi_photo").sbi_imgLiquid({ fill: !0 });
        },
        listenForVisibilityChange: function () {
          var e,
            t,
            s,
            n = this;
          (e = jQuery),
            (t = { callback: function () {}, runOnLoad: !0, frequency: 100, sbiPreviousVisibility: null }),
            (s = {
              sbiCheckVisibility: function (i, e) {
                if (jQuery.contains(document, i[0])) {
                  var t = e.sbiPreviousVisibility,
                    n = i.is(":visible");
                  (e.sbiPreviousVisibility = n),
                    null == t ? e.runOnLoad && e.callback(i, n) : t !== n && e.callback(i, n),
                    setTimeout(function () {
                      s.sbiCheckVisibility(i, e);
                    }, e.frequency);
                }
              },
            }),
            (e.fn.sbiVisibilityChanged = function (i) {
              var n = e.extend({}, t, i);
              return this.each(function () {
                s.sbiCheckVisibility(e(this), n);
              });
            }),
            "function" == typeof i(this.el).filter(":hidden").sbiVisibilityChanged &&
              i(this.el)
                .filter(":hidden")
                .sbiVisibilityChanged({
                  callback: function (i, e) {
                    n.afterResize();
                  },
                  runOnLoad: !1,
                });
        },
        getColumnCount: function () {
          var e = i(this.el),
            t = this.settings.cols,
            s = this.settings.colsmobile,
            n = this.settings.colstablet,
            a = t;
          return (
            (sbiWindowWidth = window.innerWidth),
            e.hasClass("sbi_mob_col_auto")
              ? (sbiWindowWidth < 640 && parseInt(t) > 2 && parseInt(t) < 7 && (a = 2),
                sbiWindowWidth < 640 && parseInt(t) > 6 && parseInt(t) < 11 && (a = 4),
                sbiWindowWidth <= 480 && parseInt(t) > 2 && (a = 1))
              : sbiWindowWidth > 480 && sbiWindowWidth <= 800
              ? (a = n)
              : sbiWindowWidth <= 480 && (a = s),
            parseInt(a)
          );
        },
        checkConsent: function () {
          if (this.settings.consentGiven || !this.settings.gdpr) return !0;
          if ("undefined" != typeof CLI_Cookie)
            null !== CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) &&
              (null !== CLI_Cookie.read("cookielawinfo-checkbox-non-necessary") &&
                (this.settings.consentGiven = "yes" === CLI_Cookie.read("cookielawinfo-checkbox-non-necessary")),
              null !== CLI_Cookie.read("cookielawinfo-checkbox-necessary") &&
                (this.settings.consentGiven = "yes" === CLI_Cookie.read("cookielawinfo-checkbox-necessary")));
          else if (void 0 !== window.cnArgs) {
            var i = ("; " + document.cookie).split("; cookie_notice_accepted=");
            if (2 === i.length) {
              var e = i.pop().split(";").shift();
              this.settings.consentGiven = "true" === e;
            }
          } else
            void 0 !== window.cookieconsent
              ? (this.settings.consentGiven =
                  "allow" ===
                  (function (i) {
                    for (var e = i + "=", t = window.document.cookie.split(";"), s = 0; s < t.length; s++) {
                      var n = t[s].trim();
                      if (0 == n.indexOf(e)) return n.substring(e.length, n.length);
                    }
                    return "";
                  })("complianz_consent_status"))
              : void 0 !== window.Cookiebot
              ? (this.settings.consentGiven = Cookiebot.consented)
              : void 0 !== window.BorlabsCookie && (this.settings.consentGiven = window.BorlabsCookie.checkCookieConsent("instagram"));
          var t = jQuery.Event("sbicheckconsent");
          return (t.feed = this), jQuery(window).trigger(t), this.settings.consentGiven;
        },
        afterConsentToggled: function () {
          if (this.checkConsent()) {
            var i = this;
            i.maybeRaiseImageResolution(),
              setTimeout(function () {
                i.afterResize();
              }, 500);
          }
        },
        locationGuess: function () {
          var e = i(this.el),
            t = "content";
          return (
            e.closest("footer").length
              ? (t = "footer")
              : e.closest(".header").length || e.closest("header").length
              ? (t = "header")
              : (e.closest(".sidebar").length || e.closest("aside").length) && (t = "sidebar"),
            t
          );
        },
      }),
      (window.sbi_init = function () {
        (window.sbi = new t()), window.sbi.createPage(window.sbi.createFeeds, { whenFeedsCreated: window.sbi.afterFeedsCreated });
      });
  })(jQuery),
  jQuery(document).ready(function (i) {
    void 0 === window.sb_instagram_js_options &&
      (window.sb_instagram_js_options = {
        font_method: "svg",
        resized_url: location.protocol + "//" + window.location.hostname + "/wp-content/uploads/sb-instagram-feed-images/",
        placeholder: location.protocol + "//" + window.location.hostname + "/wp-content/plugins/instagram-feed/img/placeholder.png",
      }),
      void 0 !== window.sb_instagram_js_options.resized_url &&
        -1 === window.sb_instagram_js_options.resized_url.indexOf(location.protocol) &&
        ("http:" === location.protocol
          ? (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("https:", "http:"))
          : (window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("http:", "https:"))),
      sbi_init(),
      i("#cookie-notice a").on("click", function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i("#cookie-law-info-bar a").on("click", function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i(".cli-user-preference-checkbox").on("click", function () {
        setTimeout(function () {
          i.each(window.sbi.feeds, function (i) {
            (window.sbi.feeds[i].settings.consentGiven = !1), window.sbi.feeds[i].afterConsentToggled();
          });
        }, 1e3);
      }),
      i(window).on("CookiebotOnAccept", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !0), window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("cmplzAcceptAll", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !0), window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("cmplzRevoke", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !1), window.sbi.feeds[i].afterConsentToggled();
        });
      }),
      i(document).on("borlabs-cookie-consent-saved", function (e) {
        i.each(window.sbi.feeds, function (i) {
          (window.sbi.feeds[i].settings.consentGiven = !1), window.sbi.feeds[i].afterConsentToggled();
        });
      });
  }));
