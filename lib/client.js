var LazyLoad=function(x,h){function r(b,a){var c=h.createElement(b),d;for(d in a)a.hasOwnProperty(d)&&c.setAttribute(d,a[d]);return c}function k(b){var a=i[b],c,d;if(a){c=a.callback;d=a.urls;d.shift();l=0;if(!d.length){c&&c.call(a.context,a.obj);i[b]=null;j[b].length&&m(b)}}}function w(){if(!e){var b=navigator.userAgent;e={async:h.createElement("script").async===true};(e.webkit=/AppleWebKit\//.test(b))||(e.ie=/MSIE/.test(b))||(e.opera=/Opera/.test(b))||(e.gecko=/Gecko\//.test(b))||(e.unknown=true)}}function m(b,
a,c,d,s){var n=function(){k(b)},o=b==="css",f,g,p;w();if(a){a=typeof a==="string"?[a]:a.concat();if(o||e.async||e.gecko||e.opera)j[b].push({urls:a,callback:c,obj:d,context:s});else{f=0;for(g=a.length;f<g;++f)j[b].push({urls:[a[f]],callback:f===g-1?c:null,obj:d,context:s})}}if(!(i[b]||!(p=i[b]=j[b].shift()))){q||(q=h.head||h.getElementsByTagName("head")[0]);a=p.urls;f=0;for(g=a.length;f<g;++f){c=a[f];if(o)c=r("link",{charset:"utf-8","class":"lazyload",href:c,rel:"stylesheet",type:"text/css"});else{c=
r("script",{charset:"utf-8","class":"lazyload",src:c});c.async=false}if(e.ie)c.onreadystatechange=function(){var t=this.readyState;if(t==="loaded"||t==="complete"){this.onreadystatechange=null;n()}};else if(o&&(e.gecko||e.webkit))if(e.webkit){p.urls[f]=c.href;u()}else setTimeout(n,50*g);else c.onload=c.onerror=n;q.appendChild(c)}}}function u(){var b=i.css,a;if(b){for(a=v.length;a&&--a;)if(v[a].href===b.urls[0]){k("css");break}l+=1;if(b)l<200?setTimeout(u,50):k("css")}}var e,q,i={},l=0,j={css:[],js:[]},
v=h.styleSheets;return{css:function(b,a,c,d){m("css",b,a,c,d)},js:function(b,a,c,d){m("js",b,a,c,d)}}}(this,this.document);


CommonStyle = {};

var css_paths = [];
var js_paths = [];

CommonStyle.css = function(paths) {
  css_paths = css_paths.concat(paths);
}

CommonStyle.js = function(paths) {
  js_paths = js_paths.concat(paths);
}

CommonStyle.load = function(include_base) {
  
  if (typeof(include_base) == 'undefined' || include_base) {
    CommonStyle.css('/lib/stylesheets/style.min.css');
  }

  if (css_paths.length > 0) {
    $('body').hide();
    
    LazyLoad.css(
        CommonStyle.update_url(css_paths), function() {
          $('body').show();
          CommonStyle.load_js();
    });
  }
  else {
    CommonStyle.load_js();
  }
}

CommonStyle.load_js = function() {
  if (js_paths.length > 0) {
    LazyLoad.js(CommonStyle.update_url(js_paths));
  }
}

CommonStyle.update_url = function (paths) {
  var cs_domain = location.protocol + '//' + __meteor_runtime_config__.COMMONSTYLE_HOST;

  for(var i=0;i<paths.length;i++) {
    paths[i] = cs_domain + paths[i];
  }
  
  return paths;
}