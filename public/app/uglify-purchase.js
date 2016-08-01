function nextTick(e){setTimeout(e,0)}function make4Len16(e){var r=e.toString(16);while(r.length<4){r="0"+r}return r}var pendingFuncs;window.addEventListener("message",function(){if(pendingFuncs){$.each(pendingFuncs,function(e,r){r()});pendingFuncs=null}},false);function unsafeCallback(e){return e}function encode_utf8(e){return unescape(encodeURIComponent(e))}function decode_utf8(e){return decodeURIComponent(escape(e))}function ab2str(e){if(e.constructor.name=="ArrayBuffer"){e=new Uint8Array(e)}return decode_utf8(String.fromCharCode.apply(null,e))}function str2ab(e,r,t){e=encode_utf8(e);var n=e.length;if(t)n++;if(!r){r=new ArrayBuffer(n)}var o=new Uint8Array(r);if(t)o[e.length]=0;for(var a=0,i=e.length;a<i;a++){o[a]=e.charCodeAt(a)}return r}var slashN="\n".charCodeAt(0);function writeLine(e,r,t){if(r.constructor.name=="Object")r=JSON.stringify(r);writeString(e,r+"\n",t)}function readLine(e,r){var t=[];function n(){e.read(function(o){for(var a=0;a<o.byteLength;a++){if(o[a]==slashN){var i=o.subarray(0,a);t.push(i);var s="";for(var c in t){c=t[c];s+=ab2str(c)}var u=o.subarray(a+1);e.unshift(u);r(s);return}}t.push(o);n()})}n()}function readString(e,r){var t="";e.onClose=function(){r(t)};function n(r){t+=ab2str(r);e.read(n)}e.read(n)}function writeString(e,r,t){if(r.constructor.name=="Object")r=JSON.stringify(r);e.write(str2ab(r),t)}function appendBuffer(e,r){var t=new Uint8Array(e.byteLength+r.byteLength);t.set(e,0);t.set(r,e.byteLength);return t}var timeThing=(new Date).getTime();function timeTrace(e){var r=(new Date).getTime();console.log(e+": "+(r-timeThing));timeThing=r}function bufferToHex(e){var r=new Uint8Array(e);var t="";for(var n in r){n=r[n];if(n<16)t+="0"+n.toString(16);else t+=n.toString(16)}return t}function hexToBuffer(e){var r=new ArrayBuffer(e.length/2);var t=new Uint8Array(r);for(var n=0;n<e.length/2;n++){var o=e.substr(n*2,2);t[n]=parseInt(o,16)}return r}function base64ToArrayBuffer(e){var r=window.atob(e);var t=r.length;var n=new Uint8Array(t);for(var o=0;o<t;o++){var a=r.charCodeAt(o);n[o]=a}return n.buffer}function arrayBufferToBase64(e){var r="";var t=new Uint8Array(e);var n=t.byteLength;for(var o=0;o<n;o++){r+=String.fromCharCode(t[o])}return window.btoa(r)}var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(e){var r;var t;var n="";for(r=0;r+3<=e.length;r+=3){t=parseInt(e.substring(r,r+3),16);n+=b64map.charAt(t>>6)+b64map.charAt(t&63)}if(r+1==e.length){t=parseInt(e.substring(r,r+1),16);n+=b64map.charAt(t<<2)}else if(r+2==e.length){t=parseInt(e.substring(r,r+2),16);n+=b64map.charAt(t>>2)+b64map.charAt((t&3)<<4)}while((n.length&3)>0){n+=b64pad}return n}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{enumerable:false,configurable:false,writable:false,value:function(e,r){r=r||0;return this.lastIndexOf(e,r)===r}})}function getQueryVariable(e,r){if(!r)r=window.location;var t=r.search.substring(1);var n=t.split("&");for(var o=0;o<n.length;o++){var a=n[o].split("=");if(decodeURIComponent(a[0])==e){return decodeURIComponent(a[1])}}}Object.fromArray=function(e){var r={};for(var t in e){var n=e[t];r[n]=n}return r};$.ajaxTransport("+binary",function(e,r,t){if(window.FormData&&(e.dataType&&e.dataType=="binary"||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob))){return{send:function(r,t){var n=new XMLHttpRequest,o=e.url,a=e.type,i=e.async||true,s=e.responseType||"blob",c=e.data||null,u=e.username||null,l=e.password||null;n.addEventListener("load",function(){var r={};r[e.dataType]=n.response;t(n.status,n.statusText,r,n.getAllResponseHeaders())});n.open(a,o,i,u,l);for(var f in r){n.setRequestHeader(f,r[f])}n.responseType=s;n.send(c)},abort:function(){t.abort()}}}});function throttleTimeout(e,r,t,n){if(e){clearTimeout(e.timeout)}else{e={items:[]}}e.timeout=setTimeout(function(){n(e.items);e.items=[]},t);e.items.push(r);return e}function copyTextToClipboard(e){var r=document.createElement("textarea");r.style.position="fixed";r.style.top=0;r.style.left=0;r.style.width="2em";r.style.height="2em";r.style.padding=0;r.style.border="none";r.style.outline="none";r.style.boxShadow="none";r.style.background="transparent";r.value=e;document.body.appendChild(r);r.select();try{var t=document.execCommand("copy")}catch(n){console.log("Oops, unable to copy")}document.body.removeChild(r)}function showNotification(e,r){console.log("notification:",e);if(!window.chrome||!window.chrome.notifications)return;var t=chrome.runtime.getManifest();var n=t.name;r=r||t.icons[128];chrome.notifications.create({type:"basic",iconUrl:r,title:n,message:e})}var blobFromUrl=function(){var e={};return function(r,t){if(e[r]){t(e[r]);return}var n=new XMLHttpRequest;n.open("GET",r,true);n.responseType="blob";n.onload=function(n){t(e[r]=window.URL.createObjectURL(this.response))};n.send()}}();function Success(){}(function(){function*e(){}var r=e();r.constructor.prototype.async=function(){var e=this;var r=e.next();if(r.done)return;function t(){r=e.throw(new Error(arguments));o()}function n(){var t=arguments[0];r=e.next(t);o()}function o(o){var a;var i;if(r.done)return;if(!r.value){r=e.next(n);return}if(r.value.constructor==Promise){r.value.then(n).catch(t);return}if(r.value==Error){a=true;r=e.next(t)}else if(r.value==Success){i=true;r=e.next(n)}else{throw new Error("Unexpected yield value for callback. Only Error and Success allowed.")}if(!r.value)throw new Error("Double yield callbacks must explicitly define both Error and Success");if(r.value==Error&&a)throw new Error("Error callback already defined");else if(r.value==Success&&i)throw new Error("Success callback already defined");else if(r.value!=Error&&r.value!=Success)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");if(a)r=e.next(n);else r=e.next(t)}o()}})();function spewSocket(e){e.read(function(r){console.log(ab2str(r));spewSocket(e)})}function getAuthToken(e,r){chrome.identity.getAuthToken({interactive:e,scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/chromewebstore.readonly"]},function(e){if(!e)console.error("unable to get authToken",chrome.runtime.lastError);r(e)})}$(document).ready(function(){$("#purchase-options").hide();chrome.storage.local.get(["vysorUsage"],function(e){var r=e.vysorUsage;if(!r)r=0;var t=r/(60*60*1e3);t=Math.round(t*2)/2;$("#used").html("<span class='time-highlight'>You've used Vysor for "+t+" hours. Support Vysor. Go Pro.</span>")});function e(e){$.each(e.response.details.inAppProducts,function(e,r){var t=r.sku;var n=r.localeData[0].title;var o=r.prices[0];var a=o.valueMicros/1e6+" "+o.currencyCode;var i=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet</a></td></tr>');i.find("#sub").text(n);i.find("#price").text(a);i.find("#purchase").click(function(){google.payments.inapp.buy({parameters:{env:"prod"},sku:t,success:function(){refreshLicenseManager();console.log("success",arguments)},failure:function(){refreshLicenseManager();console.log("failure",arguments)}})});$("#prices").append(i)});var n=$('<tr><td id="sub"></td><td id="price"></td><td></td></tr>');$("#prices").append(n);r();t();$("#purchase-options-loading h4").hide();$("#purchase-options").show()}function r(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> PayPal</a></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");e.find("#purchase").click(function(){getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var r="https://clockworkbilling.appspot.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:r});chrome.app.window.current().close()}.bind(this))});$("#prices").append(e)}function t(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Credit Card or Alipay</a></td></tr>');e.find("#sub").text("Enterprise Licensing (Monthly)");e.find("#price").text("$2");e.find("#purchase").click(function(){var e="https://billing.vysor.io/";chrome.browser.openTab({url:e});chrome.app.window.current().close()});$("#prices").append(e)}function n(){console.log(arguments);$("#purchase-options-loading h4").html('Chrome Web Store subscription pricing unavailable.<br/>This may be caused when behind a VPN or firewall.<br/>Please make ensure you are <a href="https://www.google.com/chrome/browser/signin.html" target="_blank">logged into Chrome</a><br/>and <a href="https://developer.chrome.com/webstore/pricing#seller" target="_blank">your country supports Chrome Web Store payments</a>.<br/>Alternatively, you may purchase the Lifetime Pass through PayPal.');$("#purchase-options").show();r();t()}google.payments.inapp.getSkuDetails({parameters:{env:"prod"},success:e,failure:n});$("#retrieve").click(function(){getAuthToken(true,function(e){if(!e){console.log("Unable to get token for retrieve?");return}refreshLicenseManager()})})});
