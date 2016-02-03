<!--Async Tag // use this to load tags -->
<script type='text/javascript'>ADNPM.loadAll();</script>
<!--Cookie Choice Script -->
<script src="{{env::files_url}}files/mein-deutschbuch-theme/theme/js/cookiechoices.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function (event) {
        cookieChoices.showCookieConsentBar("Cookies helfen uns bei der Bereitstellung unserer Dienste. Durch die Nutzung unserer Seiten erklaeren Sie sich mit dem Setzen von Cookies einverstanden.",
                "Zustimmen", "Mehr erfahren", "{{link_url::11}}");
    });
</script>
<style>
#cookieChoiceInfo{bottom:0!important;top:auto!important;padding:1em!important;background:#ccc!important;color:#333!important}#cookieChoiceInfo a,#cookieChoiceInfo span{padding:.2em 1em;font-size:large;display:inline-block}#cookieChoiceInfo a{color:#fff;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:4px;background:#234361;line-height:2}#cookieChoiceInfo a#cookieChoiceDismiss{background:#337ab7}#cookieChoiceInfo a:hover{text-decoration:none;opacity:.8}
</style>
<!--Custom Script -->
<script src="{{env::files_url}}files/mein-deutschbuch-theme/theme/js/custom.js"></script
<!--Add Blocker -->
<script src="{{env::files_url}}files/mein-deutschbuch-theme/theme/js/ads.js"></script>
<script>
      if( window.canRunAds === undefined ){
        // adblocker detected, show fallback
        alert ('no ads');
      }
    </script>