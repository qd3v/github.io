/**
 * --------------------------------------------------------------------------
 * Job banner visibility toggle
 * --------------------------------------------------------------------------
 * TODO:
 * - replace fades with CSS animation
 */

jQuery(function() {
  var COOKIE_NAME = 'job-banner-dismissed';
  var DISMISS_PERIOD_DAYS = 7;
  var VISIBLE_CSS_CLASS = 'ik-job-banner__visible';
  var HIDDEN_CSS_CLASS = 'ik-job-banner__hidden';

  var BANNER_SELECTOR = '.ik-job-banner';
  var BUTTON_SELECTOR = '.ik-job-banner--dismiss';

  function hideJobBanner($banner) {
    $banner.fadeOut(700).removeClass(VISIBLE_CSS_CLASS).addClass(HIDDEN_CSS_CLASS);
  }

  function showJobBanner($banner) {
    console.log("Showing job banner");

    $banner.fadeIn(700).removeClass(HIDDEN_CSS_CLASS).addClass(VISIBLE_CSS_CLASS);
  }

  function isDismissed() {
    return Cookies.get(COOKIE_NAME);
  }

  function setDismissed() {
    Cookies.set(COOKIE_NAME, 1, {expires: DISMISS_PERIOD_DAYS});
  }

  var $banner = $(BANNER_SELECTOR);

  if ($banner.size() === 0) {
    return;
  }

  var $dismissButton = $(BUTTON_SELECTOR, $banner);
  var dismissed = isDismissed();

  if (!dismissed) {
    showJobBanner($banner);

    $dismissButton.click(function() {
      hideJobBanner($banner);
      setDismissed();
    });
  } else {
    console.log("Job banner dismissed");
  }
});


//# sourceMappingURL=main.js.map
