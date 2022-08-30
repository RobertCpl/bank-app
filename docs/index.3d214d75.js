// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var _mainScss = require("./main.scss");
const loan = require("loanjs");
const account_input = document.querySelector(".transfer__account");
const description_input = document.querySelector(".transfer__description");
const amount_input = document.querySelector(".transfer__amount");
const amount_input_loan = document.querySelector(".loan__amount");
const years_input_loan = document.querySelector(".loan__period");
const form_transfer = document.querySelector(".transfer");
const form_loan = document.querySelector(".loan");
const Transfer = class {
    constructor(amount, type = "wyplata", account, description){
        this.date = new Date;
        this.account = account;
        this.description = description;
        this.amount = amount;
        this.type = type;
    }
};
const App = class {
    #state = {
        transfers: [],
        total: 0,
        loan: []
    };
    constructor(){
        form_transfer.addEventListener("submit", this.newTransfer.bind(this));
        form_loan.addEventListener("submit", this.getLoan.bind(this));
    }
    newTransfer(e) {
        e.preventDefault();
        const accNumber = account_input.value;
        const description = description_input.value;
        const amount = amount_input.value * -1;
        const transfer = new Transfer(amount, "wyp\u0142ata", accNumber, description);
        this.#state.transfers.push(transfer);
        account_input.value = description_input.value = amount_input.value = "";
        this.sumTotal();
        this.renderTransfer(transfer);
    }
    getLoan(e) {
        e.preventDefault();
        const amount = amount_input_loan.value * 1;
        const years = years_input_loan.value * 1;
        const months = years * 12;
        const intrest = 5;
        const diminishing = false;
        // credit
        const newLoan = new loan.Loan(amount, months, intrest, diminishing);
        this.#state.loan.push(newLoan);
        console.log(this.#state);
        // new transfer
        const transfer = new Transfer(amount, "wp\u0142ata", undefined, "po\u017Cyczka");
        this.#state.transfers.push(transfer);
        // console.log(this.#state)
        // clear inputs
        years_input_loan.value = amount_input_loan.value = "";
        this.sumTotal();
        this.renderTransfer(transfer);
        this.renderSchedule();
    }
    sumTotal() {
        const transferAmount = this.#state.transfers.map((e)=>e.amount).reduce((acc, value, index, arr)=>acc + value, 0);
        this.#state.total = transferAmount;
    }
    renderTransfer(transfer) {
        //render date
        const { date  } = transfer;
        console.log(date);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const day = `${date.getDate()}`.padStart(2, 0);
        const hour = date.getHours();
        const min = date.getMinutes();
        const dateHtml = `${day}/${month}/${year}`;
        //render transfer
        const transferList = document.querySelector(".history__list");
        const html = `<li class="history__item">
        <div class="history__date">${dateHtml}</div>
        <div class="history__titel">${transfer.type}</div>
        <div class="history__description">${transfer.description}</div>
        <div class="history__amount">${transfer.amount}</div>
        </li>`;
        transferList.insertAdjacentHTML("afterbegin", html);
        //render total
        const total = document.querySelector(".total__amount");
        total.textContent = this.#state.total;
    }
    renderSchedule() {
        const scheduleBox = document.querySelector(".schedule");
        this.#state.loan[0].installments.map((e)=>{
            const html = `<div class="schedule__box">
            <div class="schedule__date">12.12.2003</div>
            <div class="schedule__payment">${e.installment}</div>
            <div class="schedule__left">${e.remain.toFixed(2)}</div>
        </div>`;
            scheduleBox.insertAdjacentHTML("beforeend", html);
        });
    }
};
const app = new App();

},{"./main.scss":"1uV0l","loanjs":"li2ea"}],"1uV0l":[function() {},{}],"li2ea":[function(require,module,exports) {
/*
 * LoanJS
 * Calculating loan in equal or diminishing installments
 * https://github.com/kfiku/LoanJS
 *
 * Copyright (c) 2014 Grzegorz Klimek
 * Licensed under the MIT license.
 */ // const loanToHtmlTable = require('./lib/loanToHtmlTable')
// const Loan = require('./lib/loan')
module.exports.Loan = require("./dist/loan");
module.exports.loanToHtmlTable = require("./dist/loanToHtmlTable");

},{"./dist/loan":"b88EB","./dist/loanToHtmlTable":"lexpM"}],"b88EB":[function(require,module,exports) {
"use strict";
function _typeof(obj1) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
(function() {
    "use strict";
    /*
   * LoanJS
   * Calculating loan in equal or diminishing installments
   * https://github.com/kfiku/LoanJS
   *
   * Copyright (c) 2014 Grzegorz Klimek
   * Licensed under the MIT license.
   */ /**
   * Round helper function
   * @param {number} num number to round (example 123.4355 -> 123.44)
   *
   * @returns {number}
   */ function rnd(num) {
        return Math.round(num * 100) / 100;
    }
    /*
   * LoanJS
   * Calculating loan in equal or diminishing installments
   * https://github.com/kfiku/LoanJS
   *
   * Copyright (c) 2014 Grzegorz Klimek
   * Licensed under the MIT license.
   */ /**
   * Method to getting next instalment
   * @param {number} amount
   * @param {number} installmentsNumber
   * @param {number} interestRate
   * @param {boolean} diminishing
   * @param {number} capitalSum
   * @param {number} interestSum
   *
   * @returns {{ capital: number, interest: number, installment: number, remain: number, interestSum: number }}
   */ var getNextInstalment = function getNextInstalment(amount, installmentsNumber, interestRate, diminishing, capitalSum, interestSum) {
        var capital;
        var interest;
        var installment;
        var irmPow;
        var interestRateMonth = interestRate / 1200;
        if (diminishing) {
            capital = rnd(amount / installmentsNumber);
            interest = rnd((amount - capitalSum) * interestRateMonth);
            installment = capital + interest;
        } else {
            irmPow = Math.pow(1 + interestRateMonth, installmentsNumber);
            installment = rnd(amount * (interestRateMonth * irmPow / (irmPow - 1)));
            interest = rnd((amount - capitalSum) * interestRateMonth);
            capital = installment - interest;
        }
        return {
            capital: capital,
            interest: interest,
            installment: installment,
            remain: amount - capitalSum - capital,
            interestSum: interestSum + interest
        };
    };
    /**
   * Create Loan Object with all installments and sum of interest
   *
   * @param {number} amount                   full amount of Loan
   * @param {number} installmentsNumber       how many installments will be
   * @param {number} interestRate             interest rate in percent (3.5) equal/annuity (false)
   * @param {boolean} diminishing             if installments will be diminishing (true) or not
   *
   * @return {object}
   */ function Loan(amount, installmentsNumber, interestRate) {
        var diminishing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        /** Checking params */ if (!amount || amount <= 0 || !installmentsNumber || installmentsNumber <= 0 || !interestRate || interestRate <= 0) throw new Error("wrong parameters: ".concat(amount, " ").concat(installmentsNumber, " ").concat(interestRate));
        var installments = [];
        var interestSum = 0;
        var capitalSum = 0;
        var sum = 0;
        for(var i = 0; i < installmentsNumber; i++){
            var inst = getNextInstalment(amount, installmentsNumber, interestRate, diminishing, capitalSum, interestSum);
            sum += inst.installment;
            capitalSum += inst.capital;
            interestSum += inst.interest;
            /** adding lost sum on rounding */ if (i === installmentsNumber - 1) {
                capitalSum += inst.remain;
                sum += inst.remain;
                inst.remain = 0;
            }
            installments.push(inst);
        }
        return {
            installments: installments,
            amount: rnd(amount),
            interestSum: rnd(interestSum),
            capitalSum: rnd(capitalSum),
            sum: rnd(sum)
        };
    }
    // node or browserfy
    module.exports = Loan;
})();

},{}],"lexpM":[function(require,module,exports) {
"use strict";
function _typeof(obj1) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
(function() {
    "use strict";
    /**
   * Create Loan Object with all installments and sum of interest
   * @param {Loan}    loan     loan object
   * @param {object}  params   params
   *
   * @return {string}       html string with table
   */ function loanToHtmlTable(loan, params) {
        params = params || {};
        params.formatMoney = params.formatMoney || function(num) {
            return num.toFixed(2);
        };
        var fm = params.formatMoney;
        var trans = function trans(key) {
            if (params.translations && params.translations[key]) return params.translations[key];
            else return key;
        };
        var html = [
            "<table><thead><tr><th></th><th>" + trans("Capital") + "</th>" + "<th>" + trans("Interest") + "</th>" + "<th>" + trans("Instalment") + "</th>" + "<th>" + trans("Remain") + "</th>" + "<th>" + trans("Interest sum") + "</th>" + "</tr>" + "</thead>" + "<tbody>",
            "",
            "</tbody></table>"
        ];
        for(var i = 0; i < loan.installments.length; i++){
            var inst = loan.installments[i];
            var instHtml = "<tr><td>" + (i + 1) + "</td>" + "<td>" + fm(inst.capital) + "</td>" + "<td>" + fm(inst.interest) + "</td>" + "<td>" + fm(inst.installment) + "</td>" + "<td>" + fm(inst.remain) + "</td>" + "<td>" + fm(inst.interestSum) + "</td>" + "</tr>";
            html[1] += instHtml;
        }
        html[1] += "<tr><td>" + trans("sum") + "</td>" + "<td>" + fm(loan.capitalSum) + "</td>" + "<td>" + fm(loan.interestSum) + "</td>" + "<td>" + fm(loan.sum) + "</td>" + "<td>-</td>" + "<td>-</td>" + "</tr>";
        return html.join("");
    }
    // node or browserfy
    module.exports = loanToHtmlTable;
})();

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire05de")

//# sourceMappingURL=index.3d214d75.js.map
