$(function initializeVersionSelect() {
  function normalizePath(path) {
    var normalized = [];
    path.split("/").forEach(function(bit, i) {
      if (bit === "." || (bit === "" && i !== 0)) {
        return;
      } else if (bit === "..") {
        if (normalized.length === 1 && normalized[0] === "") {
          // We must be trying to .. past the root!
          throw new Error("invalid path");
        } else if (normalized.length === 0 ||
                   normalized[normalized.length - 1] === "..") {
          normalized.push("..");
        } else {
          normalized.pop();
        }
      } else {
        normalized.push(bit);
      }
    });
    return normalized.join("/");
  }

  // `base_url` comes from the base.html template for this theme.
  var REL_BASE_URL = (typeof base_url === 'undefined' ? '.' : base_url);
  var ABS_BASE_URL = normalizePath(window.location.pathname + "/" + REL_BASE_URL);
  var CURRENT_VERSION_STR = ABS_BASE_URL ? ABS_BASE_URL.split('/v/')[1].split('/')[0] : 'latest';

  function makeSelect(options, selected) {
    var select = document.createElement("select");

    options.forEach(function(i) {
      var option = new Option(i.text, i.value, undefined,
                              i.value === selected);
      select.add(option);
    });

    return select;
  }

  function getCurrentVersion(versions) {
    return versions.find(function(i) {
      return i.version === CURRENT_VERSION_STR ||
             i.aliases.includes(CURRENT_VERSION_STR) ||
             (CURRENT_VERSION_STR === 'latest' && i.latest);
    });
  }

  function getVersionLink(version) {
    var match = window.location.href.match(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//);
    if (match) {
      // path has version number in it
      return window.location.href.replace(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//,  '/v/' + version + '/');
    } else {
      // path does not have version in it
      return window.location.href.replace(window.location.origin, window.location.origin + '/v/' + version);
    }
  }

  function getLatestVersionLink() {
    return window.location.href.replace(/\/v\/[0-9]*\.[0-9]*\.[0-9]*\//, '/');
  }

  var getVersions = $.get('/versions.json');
  var getTemplate = $.get('/custom/version-select.html');

  $.when(getVersions, getTemplate)
    .done(function(versionsResponse, templateResponse) {
      var versions = versionsResponse[0];
      var template = templateResponse[0];
      var currentVersion = getCurrentVersion(versions);
      var latestVersion = versions.find(function(version) { return version.latest; });

      // add template
      $('.rst-versions').append(template);

      var $versionSelect = $('.version-select');
      var $versionSelectBar = $('.version-select__bar');
      var $versionSelectBarVersion = $('.version-select__bar-version');
      var $versionSelectMenu = $('.version-select__menu');
      var $versionSelectMenuVersions = $('.version-select__menu-versions');
      var $versionSelectMenuVersionsLatest = $('.version-select__menu-versions-latest');

      // append select bar version; use CURRENT_VERSION_STR since it's a string that's either "latest" or "*.*.*"
      $versionSelectBarVersion.append(CURRENT_VERSION_STR);

      // expand/collapse click handler
      $versionSelectBar.click(function(event) {
        if (!$versionSelect.hasClass('version-select--shift-up')) {
          $versionSelect.addClass('version-select--shift-up');
        } else {
          $versionSelect.removeClass('version-select--shift-up');
        }
      });

      // set link for latest version
      $versionSelectMenuVersionsLatest.attr('href', getLatestVersionLink());

      // append versions
      versions.forEach(function(version) {
        $versionSelectMenuVersions.append('<dd><a href="' + getVersionLink(version.version) + '">v' + version.title + '</a></dd>');
      });
    });
});
