// copy to clipboard for use in share button function
function copyToClipboard(text) {
  var inputc = document.body.appendChild(
    document.createElement("input")
  );
  inputc.value = window.location.href;
  inputc.select();
  document.execCommand("copy");
  inputc.parentNode.removeChild(inputc);
  alert("URL Copied.");
}

// share button functionality
(function (win, doc) {
  const testButton = doc.createElement("button");
  testButton.setAttribute("type", "share");
  if (testButton.type != "share") {
    win.addEventListener("click", function (ev) {
      ev = ev || win.event;
      let target = ev.target;
      let button = target.closest(
        'button[type="share"]'
      );
      if (button) {
        const title = "Share URL";
        const url = win.location.href;
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url,
          });
        } else {
          copyToClipboard();
        }
      }
    });
  }
})(this, this.document);


// click handler function for treemap levels
function clickHandler(click) {
    const points = tree_chart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
    if (points.length) {

      const firstPoint = points[0];
      // console.log(firstPoint)

      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 0) {
        tree_chart.config.data = get_tree_data('ame');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 1) {
        tree_chart.config.data = get_tree_data('doh');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 5) {
        tree_chart.config.data = get_tree_data('dfc');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 2) {
        tree_chart.config.data = get_tree_data('de');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 3) {
        tree_chart.config.data = get_tree_data('dfi');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 4) {
        tree_chart.config.data = get_tree_data('doj');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 6) {
        tree_chart.config.data = get_tree_data('dfe');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 8) {
        tree_chart.config.data = get_tree_data('dof');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 7) {
        tree_chart.config.data = get_tree_data('daera');
      }
      if (tree_chart.config.data.datasets[0].label2 === 'NI Executive spending total' && firstPoint.index === 9) {
        tree_chart.config.data = get_tree_data('teo');
      }
      tree_chart.update();
    }
}




function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// function getCookie(name) {
//   var nameEQ = name + "=";
//   var cookies = document.cookie.split(';');
//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i];
//     while (cookie.charAt(0) == ' ') {
//       cookie = cookie.substring(1, cookie.length);
//     }
//     if (cookie.indexOf(nameEQ) === 0) {
//       return cookie.substring(nameEQ.length, cookie.length);
//     }
//   }
//   return null;
// }

  function checkCookieExists() {
// Get all cookies
const cookies = document.cookie.split(";");

// Loop through all cookies
for (const cookie of cookies) {
  // Split the cookie into name and value
  const [name, value] = cookie.split("=");

  // If the cookie name matches cookie_consent, return true
  if (name === 'cookie_consent') {
    return true;
  }
}

// If the cookie doesn't exist, return false
return false;
}


function cookieConsent() {
  if(!checkCookieExists()) {
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'block';
  } else {
    cookieBanner.style.display = 'none';
  // loadGoogleAnalytics();
  }
}

function acceptCookies() {
  setCookie('cookie_consent',true, 365);
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';
  loadGoogleAnalytics();
}


function rejectCookies() {
  setCookie('cookie_consent',true, 365);
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';
}

  function loadGoogleAnalytics() {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KF6WGSG');

//      window.dataLayer = window.dataLayer || [];
//      function gtag() { dataLayer.push(arguments); }
//      gtag('js', new Date()); 
//      gtag('config', 'UA-72688332-4');
}


window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('reject-cookies').addEventListener('click', rejectCookies);
});

window.onload = cookieConsent;




function responsiveFonts() {
  if(window.outerWidth > 850) {
    tree_chart.config.options.labels.font.size = 14
    overall_y_label.style.fontSize = "15px";
  };
  if(window.outerWidth <= 850 && window.outerWidth > 780) {
    tree_chart.config.options.labels.font.size = 12
    overall_y_label.style.fontSize = "15px";
  };
  if(window.outerWidth <= 780) {
    tree_chart.config.options.labels.font.size = 10
  };
  if(window.outerWidth < 600) {
    tree_container.style.cssText = "height: 80vh;"
  } else {
    tree_container.style.cssText = "height: " + Math.round(tree_container.clientWidth / 2) + "px;";
  };
  if(window.outerWidth > 700) {
    Chart.defaults.font.size = 16;
    // bar_options.plugins.tooltip.titleFont.size = 16;
    // bar_options.plugins.tooltip.bodyFont.size = 14;
    // line_options.plugins.tooltip.titleFont.size = 16;
    // line_options.plugins.tooltip.bodyFont.size = 14;
    // overall_line_options.plugins.tooltip.titleFont.size = 16;
    // overall_line_options.plugins.tooltip.bodyFont.size = 14;
  };
  if(window.outerWidth <= 700 && window.outerWidth > 600) {
    Chart.defaults.font.size = 14;
    // bar_options.plugins.tooltip.titleFont.size = 14;
    // bar_options.plugins.tooltip.bodyFont.size = 12;
    // line_options.plugins.tooltip.titleFont.size = 14;
    // line_options.plugins.tooltip.bodyFont.size = 12;
    // overall_line_options.plugins.tooltip.titleFont.size = 14;
    // overall_line_options.plugins.tooltip.bodyFont.size = 12;
  };
  if(window.outerWidth <= 600 && window.outerWidth > 450) {
    Chart.defaults.font.size = 12;
    overall_y_label.style.fontSize = "12pt";
    // bar_options.plugins.tooltip.titleFont.size = 12;
    // bar_options.plugins.tooltip.bodyFont.size = 10;
    // line_options.plugins.tooltip.titleFont.size = 12;
    // line_options.plugins.tooltip.bodyFont.size = 10;
    // overall_line_options.plugins.tooltip.titleFont.size = 12;
    // overall_line_options.plugins.tooltip.bodyFont.size = 10;
  };
  if(window.outerWidth < 450) {
    Chart.defaults.font.size = 8;
    overall_y_label.style.fontSize = "8pt";
    // bar_options.plugins.tooltip.titleFont.size = 10;
    // bar_options.plugins.tooltip.bodyFont.size = 8;
    // line_options.plugins.tooltip.titleFont.size = 10;
    // line_options.plugins.tooltip.bodyFont.size = 8;
    // overall_line_options.plugins.tooltip.titleFont.size = 10;
    // overall_line_options.plugins.tooltip.bodyFont.size = 8;
  };
}


