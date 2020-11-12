(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 123:
/*!************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/components/uni-calendar/util.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 124));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Calendar = /*#__PURE__*/function () {
  function Calendar()





  {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},date = _ref.date,selected = _ref.selected,startDate = _ref.startDate,endDate = _ref.endDate,range = _ref.range;_classCallCheck(this, Calendar);
    // 当前日期
    this.date = this.getDate(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 范围开始
    this.startDate = startDate;
    // 范围结束
    this.endDate = endDate;
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    // this._getWeek(this.date.fullDate)
  }
  /**
     * 设置日期
     * @param {Object} date
     */_createClass(Calendar, [{ key: "setDate", value: function setDate(
    date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }

    /**
       * 清理多选状态
       */ }, { key: "cleanMultipleStatus", value: function cleanMultipleStatus()
    {
      this.multipleStatus = {
        before: '',
        after: '',
        data: [] };

    }

    /**
       * 重置开始日期
       */ }, { key: "resetSatrtDate", value: function resetSatrtDate(
    startDate) {
      // 范围开始
      this.startDate = startDate;

    }

    /**
       * 重置结束日期
       */ }, { key: "resetEndDate", value: function resetEndDate(
    endDate) {
      // 范围结束
      this.endDate = endDate;
    }

    /**
       * 获取任意时间
       */ }, { key: "getDate", value: function getDate(
    date) {var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      if (!date) {
        date = new Date();
      }
      if (typeof date !== 'object') {
        date = date.replace(/-/g, '/');
      }
      var dd = new Date(date);
      switch (str) {
        case 'day':
          dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
          break;
        case 'month':
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
          }
          break;
        case 'year':
          dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
          break;}

      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      return {
        fullDate: y + '-' + m + '-' + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay() };

    }


    /**
       * 获取上月剩余天数
       */ }, { key: "_getLastMonthDays", value: function _getLastMonthDays(
    firstDay, full) {
      var dateArr = [];
      for (var i = firstDay; i > 0; i--) {
        var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true });

      }
      return dateArr;
    }
    /**
       * 获取本月天数
       */ }, { key: "_currentMonthDys", value: function _currentMonthDys(
    dateData, full) {var _this = this;
      var dateArr = [];
      var fullDate = this.date.fullDate;var _loop = function _loop(
      i) {
        var isinfo = false;
        var nowDate = full.year + '-' + (full.month < 10 ?
        full.month : full.month) + '-' + (i < 10 ?
        '0' + i : i);
        // 是否今天
        var isDay = fullDate === nowDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          var dateCompBefore = _this.dateCompare(_this.startDate, fullDate);
          disableBefore = _this.dateCompare(dateCompBefore ? _this.startDate : fullDate, nowDate);
        }

        if (_this.endDate) {
          var dateCompAfter = _this.dateCompare(fullDate, _this.endDate);
          disableAfter = _this.dateCompare(nowDate, dateCompAfter ? _this.endDate : fullDate);
        }
        var multiples = _this.multipleStatus.data;
        var checked = false;
        var multiplesStatus = -1;
        if (_this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex(function (item) {
              return _this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        var data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.dateEqual(_this.multipleStatus.before, nowDate),
          afterMultiple: _this.dateEqual(_this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: _this.getlunar(full.year, full.month, i),
          disable: !disableBefore || !disableAfter,
          isDay: isDay };

        if (info) {
          data.extraInfo = info;
        }

        dateArr.push(data);};for (var i = 1; i <= dateData; i++) {_loop(i);
      }
      return dateArr;
    }
    /**
       * 获取下月天数
       */ }, { key: "_getNextMonthDays", value: function _getNextMonthDays(
    surplus, full) {
      var dateArr = [];
      for (var i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true });

      }
      return dateArr;
    }

    /**
       * 获取当前日期详情
       * @param {Object} date
       */ }, { key: "getInfo", value: function getInfo(
    date) {var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var dateInfo = this.canlender.find(function (item) {return item.fullDate === _this2.getDate(date).fullDate;});
      return dateInfo;
    }

    /**
       * 比较时间大小
       */ }, { key: "dateCompare", value: function dateCompare(
    startDate, endDate) {
      // 计算截止时间
      startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }

    /**
       * 比较时间是否相等
       */ }, { key: "dateEqual", value: function dateEqual(
    before, after) {
      // 计算截止时间
      before = new Date(before.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      after = new Date(after.replace('-', '/').replace('-', '/'));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }


    /**
       * 获取日期范围内所有日期
       * @param {Object} begin
       * @param {Object} end
       */ }, { key: "geDateAll", value: function geDateAll(
    begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
       * 计算阴历日期显示
       */ }, { key: "getlunar", value: function getlunar(
    year, month, date) {
      return _calendar.default.solar2lunar(year, month, date);
    }
    /**
       * 设置打点
       */ }, { key: "setSelectInfo", value: function setSelectInfo(
    data, value) {
      this.selected = value;
      this._getWeek(data);
    }

    /**
       *  获取多选状态
       */ }, { key: "setMultiple", value: function setMultiple(
    fullDate) {var _this$multipleStatus =



      this.multipleStatus,before = _this$multipleStatus.before,after = _this$multipleStatus.after;

      if (!this.range) return;
      if (before && after) {
        this.multipleStatus.before = '';
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }

    /**
       * 获取每周数据
       * @param {Object} dateData
       */ }, { key: "_getWeek", value: function _getWeek(
    dateData) {var _this$getDate =






      this.getDate(dateData),fullDate = _this$getDate.fullDate,year = _this$getDate.year,month = _this$getDate.month,date = _this$getDate.date,day = _this$getDate.day;
      var firstDay = new Date(year, month - 1, 1).getDay();
      var currentDay = new Date(year, month, 0).getDate();
      var dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)), // 本月天数
        nextMonthDays: [], // 下个月开始几天
        weeks: [] };

      var canlender = [];
      var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      var weeks = {};
      // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
      for (var i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }

    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }]);return Calendar;}();var _default =


Calendar;exports.default = _default;

/***/ }),

/***/ 124:
/*!****************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/components/uni-calendar/calendar.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                     * @1900-2100区间内的公历、农历互转
                                                                                                     * @charset UTF-8
                                                                                                     * @github  https://github.com/jjonline/calendar.js
                                                                                                     * @Author  Jea杨(JJonline@JJonline.Cn)
                                                                                                     * @Time    2014-7-21
                                                                                                     * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
                                                                                                     * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
                                                                                                     * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
                                                                                                     * @Version 1.0.3
                                                                                                     * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
                                                                                                     * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
                                                                                                     */
/* eslint-disable */
var calendar = {

  /**
                     * 农历1900-2100的润大小信息表
                     * @Array Of Property
                     * @return Hex
                     */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520], // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
                                                                    * 天干地支之天干速查表
                                                                    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
                                                                    * @return Cn string
                                                                    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
                                                                                                                 * 天干地支之地支速查表
                                                                                                                 * @Array Of Property
                                                                                                                 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
                                                                                                                 * @return Cn string
                                                                                                                 */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
                                                                                                                                     * 天干地支之地支速查表<=>生肖
                                                                                                                                     * @Array Of Property
                                                                                                                                     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
                                                                                                                                     * @return Cn string
                                                                                                                                     */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
                                                                                                                                         * 24节气速查表
                                                                                                                                         * @Array Of Property
                                                                                                                                         * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
                                                                                                                                         * @return Cn string
                                                                                                                                         */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                   * 1900-2100各年的24节气日期速查表
                                                                                                                                                                                                                                                                                                                                                                                                                   * @Array Of Property
                                                                                                                                                                                                                                                                                                                                                                                                                   * @return 0x string For splice
                                                                                                                                                                                                                                                                                                                                                                                                                   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
                                                                                                             * 数字转中文速查表
                                                                                                             * @Array Of Property
                                                                                                             * @trans ['日','一','二','三','四','五','六','七','八','九','十']
                                                                                                             * @return Cn string
                                                                                                             */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
                                                                                                                             * 日期转农历称呼速查表
                                                                                                                             * @Array Of Property
                                                                                                                             * @trans ['初','十','廿','卅']
                                                                                                                             * @return Cn string
                                                                                                                             */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
                                                       * 月份转农历称呼速查表
                                                       * @Array Of Property
                                                       * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
                                                       * @return Cn string
                                                       */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
                                                                                                                                       * 返回农历y年一整年的总天数
                                                                                                                                       * @param lunar Year
                                                                                                                                       * @return Number
                                                                                                                                       * @eg:var count = calendar.lYearDays(1987) ;//count=387
                                                                                                                                       */
  lYearDays: function lYearDays(y) {
    var i;var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {sum += this.lunarInfo[y - 1900] & i ? 1 : 0;}
    return sum + this.leapDays(y);
  },

  /**
         * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
         * @param lunar Year
         * @return Number (0-12)
         * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
         */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
         * 返回农历y年闰月的天数 若该年没有闰月则返回0
         * @param lunar Year
         * @return Number (0、29、30)
         * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
         */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
         * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
         * @param lunar Year
         * @return Number (-1、29、30)
         * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
         */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
         * 返回公历(!)y年m月的天数
         * @param solar Year
         * @return Number (-1、28、29、30、31)
         * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
         */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
        * 农历年份转换为干支纪年
        * @param  lYear 农历年的年份数
        * @return Cn string
        */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
        * 公历月、日判断所属星座
        * @param  cMonth [description]
        * @param  cDay [description]
        * @return Cn string
        */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
         * 传入offset偏移量返回干支
         * @param offset 相对甲子的偏移量
         * @return Cn string
         */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
         * 传入公历(!)y年获得该年第n个节气的公历日期
         * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
         * @return day Number
         * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
         */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {return -1;}
    if (n < 1 || n > 24) {return -1;}
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
         * 传入农历数字月份返回汉语通俗表示法
         * @param lunar month
         * @return Cn string
         * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
         */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
         * 传入农历日期数字返回汉字表示法
         * @param lunar day
         * @return Cn string
         * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
         */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";break;
      case 20:
        s = "\u4E8C\u5341";break;
        break;
      case 30:
        s = "\u4E09\u5341";break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
         * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
         * @param y year
         * @return Cn string
         * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
         */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
         * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
         * @param y  solar year
         * @param m  solar month
         * @param d  solar day
         * @return JSON object
         * @eg:console.log(calendar.solar2lunar(1987,11,01));
         */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;var leap = 0;var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {isLeap = false;}
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;--i;
      }
    }
    if (offset < 0) {
      offset += temp;--i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': this.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month), 'IDayCn': this.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
         * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
         * @param y  lunar year
         * @param m  lunar month
         * @param d  lunar day
         * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
         * @return JSON object
         * @eg:console.log(calendar.lunar2solar(1987,9,10));
         */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {return -1;} // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {return -1;} // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {return -1;} // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {offset += day;}
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ }),

/***/ 148:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/日历.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 15:
/*!************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/lie.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAFAUlEQVR4nO3dX2hXdRiA8QcktImCazBIIogogrQbFRLDpLCIqJgIEtmNMlk3dWELqqFIFAT9gUACyYikwi6ygd2YYpC2GBPq0kiTRQRelKZGYVsXB0FiHtNzzvuew54PPPff9wsvv9+cOwckSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSbPSCmAH8BXwI3AemDaruV+AY8D7wADQQ8s9DHxH/sXZ7OwM8CIwj5bpAT4n/4LMpoFJYBkt0Y+fGta+/gQeJ9ki4Dj5l2E2U1PAOpLMBY5e5YBm2V0g6evWyHUc1iyjE8AcAvUC52oewqzJhgi0raEhzJpqkkATDQ1h1mRLCNCfNJxZ1bYSYFXScGZV20WAgaThzKo2SoDNScOZVW2MAINJw5lVbYIALoh1NRfErCQXxKwkF8SsJBfErCQXxKwkF8SsJBfErKSQBdmUNJxZ1b4lwBNJw5lVbT8BViYNZ1a13QToSxrOrGrDBDkWNJBZnd1DkB1BA5nV1U8E8qkm1rW2EMxPEetKPxD8XCwonqw4XvHgZk13AVhKkj7g5FUOaJbVFPAoyRbj092tff1FC57ufsl8YB/5l2I2DfwMLKeF1uKnieV1FngJuJGWWwG8gu8otGa79I7CDyn+j2Dr31EoSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSeqQHmANsBF4HthuVmMvA4PAY8CtdMh64AvyH0tps6vvgRFgAS21HBgj/6JsdncaeIaW2QD8Tf7lmF1qHzCPFhgm/zLMZmocWEiiJ2c4lFmbOkzCCzwBll3jQc2yeosER67zsGbRXQTuJNAjDQxh1mSfEuiThoYwa6qLFC+bbdwc4Pfg4czqaIAAS5OGM6vaGwR4KGk4s6p9TICNScOZVe0QAQaThjOr2gQBXBDrai6IWUkuiFlJLohZSS6IWUkuiFlJLohZSS6IWUkuiFlJIQvydNJwZlU7QgD/WMq62mcE8G/Rrau9S4D5FH+dlT2s2bW2hSAHggYyq7ObCTIUNJBZXX1DoBuAyQaGMGuq1QR7qqaDmzXdfpLs/p8HNMvqJLCIRKMzHMqsDf0G3EWyOcAH5F+G2eWdBG6nRZ4F/iD/Ysz2kvy16kr6KH5beZb8S7LZ10HgXjriQYp3xm03a7hNQC+SJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJNXpAYqn3r1H8X6Gw2Y19iXwEfAmHXqy4k3AO/hsXsvpILCSlnoBn+5u7Wgv0E9L9AOHyL8Us8s7Dawl2SLgOPmXYTZTU8A6kswFjl7lgGbZXQCWkWDkOg5rltEJilcFhukFztU8hFmTDRFoW0NDmDXVJIEmGhrCrMmWEKA/aTizqm0lwKqk4cyqtosAA0nDmVVtlACbk4Yzq9oYAQaThjOr2gQBXBDrai6IWUkuiFlJLohZSS6IWUkuiFlJLohZSS6IWUkhC+Jv0q2rjRNgfdJwZlU7QIDVScOZVW0PAW5LGs6saq8SZDJoILM6W0OQnUEDmdXVeQKfbLIkYCCzOnudYHtqOrhZ050BFhJsMfBrxYObRbSBJEspHu2YfQFmV+o1kt1P8RGWfRFm/20nLXEHcIr8CzGbBv4BnqNlFlD8IsavXJbZYeBuWmwxMAx8Tf5l2exoEngbuI8OugVYTvGzilldraL4ah/+z7eSJEmSJEmSJEmSJEmSpGvzL4/P5egX6Y7CAAAAAElFTkSuQmCC"

/***/ }),

/***/ 156:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/添加.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 16:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/begin.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 162:
/*!**************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/help.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/stop.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAE20lEQVR4nO3WsevnAxzH8cNC3Wa5MBgNVmUR22U13KbULf4DZmVgMyirPwApWQxiOONdytlMQlmUkkGe/oLfdb/f/b6f5+v0fPwJr3fPel+5kiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJ/k+AV4BPePj9DLwNXLU3PS/gBnDLne9S3AVu2nteGuBde9ET+Am4Zm97P4BHgc/kvU7hO+AJe98HArxhr3hCP/IQHAj4wB7qhL6w970w4Brwt73gib1n73wvwEv2QAd43d75QoB37OUO8CfwiL31WYBP7YEOcMve+UKAr+zlDvK8vfVZgF/tcY5g73whwG17uINct7c+iz3MgZ6ytz434I692kFetbc+C/CPPc5BnrG3PjcKREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILuC2vdpBrttbn8Ue5kBP21ufG/C1vdpBXrC3Pgvwuz3OQR6ztz434H17tQP8BTxub30W4Et7oAPcsXe+EOA54F97vRP70N75XoDX7IEO8Ka984UBH9nrndAfPAS/L/CtPdQJ/WDv+8CAj+0VT+A34EV72/sBPAl8I+91Ct8Dz9r7XgrgZeBzd89L8QvwFnDV3vS8gBvALXe+S3EXuGnvmSRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiQX8x/eB7ZqXP1b/wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 18:
/*!***************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/juxing.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAFUUlEQVR4nO3dz4vUdRjA8e/mQVpEEAo8KAhKkl1iu2TtwUuQ/gUd65R0coVgj3M0wfKyhyBhwUgRgqKIVQy2umx0WYiFPWySePEou4Gwg707fMeDm/s489X5PPOdeb/+g+f5Pm/mB7NsVUmSJEmSJEmSJEmSJEmSxhpwEDgDzAELwBKwCtwFtlBbbFE/s1XqZ7gAnKN+tgez76w1gH3AR8D13kI1Gf4GrlE/+33ZdzhygHeAK/iqoPoGvgLezr7LdMAscCv3eWiE3QRms++0OOA94Jfk5as9fgPezb7boQOmgUtAN3ffaqEucBGYzr7joQBmgI3cHWsMbAAz2ff8wgBTwHlgO3evGiPbwFz2bT834CXgRvIyNb6uAXuy77wR4GXgp+QFavz9QNs+lwCvAH8kL06T43fg1ey77wuwh7pqqaTvGfW3W9QfyL9JXpQm19XsBkLUP0CTMp3N7uCpgNfxq1zl+wd4I7uHJ1B/Y7WWvBjpsT8ZpW+2gPnsjUg7zGd3UVVVVQGHgM3sbUg7bAKHs/uoqP+4SRpF17PjOIq/zNXo6gLHMgNZzN6A9AyLWXH46qE2yHkVATrZk0t96mQEcid7aqlP66XjOJU9sTSgN0sG4tsrtU2nZCAr2dNKA1ouFcd+4N/saaUBPQQOlAjEzx9qq1MlAjmbPaXU0PD/VgS4nD2l1NDlEoH8mD2l1NB3JQLxGyy11XKJQFazp5QaWikRyHr2lFJDw//JCXA/e0qpofslArmXPaXU0D0DkXZnIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUKBLIevaUUkPrJQJZyZ5SamilRCDL2VNKDS2VCOTb7Cmlhq6WCORC9pRSQ50SgXyYPaXU0AclAjmZPaXU0FslAtkLPMyeVBrQQ2Dv0APpReI3WWqb5SJx9ALpZE8rDahTMhA/h6htThYLpBfJX9kTS326UzSOXiC+zVJbdDICOZI9tdSnI8UD6UWymD259AyLKXH0AjkGdLM3IO2iCxxNC6QXydfZW5B2sZgaRy+Qw8Bm9iakHTaBQ9l9VFVVVcB89jakHeazu3gCsJa9EalnLbuH/wGOAw+yN6OJ9wB4LbuHpwLOAI+SF6TJ9Qh4P7uDEPBJ9pY0sT7Ovv++4M9QVF4n++4HAnyZvTFNjM+z731gwBRwJXtzGntfZN96YxiJhqu9cTxGHckcsJ28TI2PbeA8MJV93y8MMANs5O5VY2ADmMm+56EApoGL+AtgDa4LXAKms+946IATwO3cfatFbgMnsu+2OGAWuJm8fI2uW8Bs9p2mo/58cgH/94jqG/iMcf2c8byof/T4KfBr6mNSST9Tf9N5PPv+WgU4AJwGzgELwBKwCtwFtrKepga2Rf3MVqmf4QJ1EKeB/dl3JkmSJEmSJEmSJEmSJEkarv8Aj5aUm7GdO8EAAAAASUVORK5CYII="

/***/ }),

/***/ 187:
/*!**************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/loge.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 190:
/*!***************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/policy.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var text = {
  content: "\u6B22\u8FCE\u60A8\u4F7F\u7528\u8BB0\u5212\u670D\u52A1\uFF01\u6211\u4EEC\u73CD\u89C6\u60A8\u5728\u5411\u6211\u4EEC\u63D0\u4F9B\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u65F6\u5BF9\u6211\u4EEC\u7684\u4FE1\u4EFB\uFF0C\u6211\u4EEC\u5C06\u6309\u7167\u672C\u9690\u79C1\u653F\u7B56\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5E76\u4FDD\u969C\u60A8\u4FE1\u606F\u7684\u5B89\u5168\u3002\n\u8BF7\u60A8\u52A1\u5FC5\u8BA4\u771F\u9605\u8BFB\u672C\u9690\u79C1\u653F\u7B56\uFF0C\u5728\u786E\u8BA4\u5145\u5206\u4E86\u89E3\u5E76\u540C\u610F\u540E\u518D\u4F7F\u7528\u8BB0\u5212\u670D\u52A1\u3002\n\uFF081\uFF09\u6743\u9650\u63A7\u5236\n\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA9\u81EA\u5DF1\u5141\u8BB8\u7684\u4EBA\u5F97\u5230\u81EA\u5DF1\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u6211\u4EEC\u7684\u4FE1\u606F\u91C7\u7528\u7684\u662F\u8986\u76D6\u7684\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u5BF9\u7528\u6237\u7684\u4F4D\u7F6E\u4FE1\u606F\u5F97\u5230\u4FDD\u7559\u3002\n\uFF082\uFF09\u91CD\u8981\u6570\u636E\u52A0\u5BC6\n\u5BF9\u4E00\u4E9B\u91CD\u8981\u7684\u6570\u636E\u6309\u4E00\u5B9A\u7684\u7B97\u6CD5\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5982\u7528\u6237\u53E3\u4EE4\u3001\u91CD\u8981\u53C2\u6570\u7B49\u3002\n\uFF083\uFF09\u6570\u636E\u5907\u4EFD\n\u5141\u8BB8\u7528\u6237\u8FDB\u884C\u6570\u636E\u7684\u5907\u4EFD\u548C\u6062\u590D\uFF0C\u4EE5\u5F25\u8865\u6570\u636E\u7684\u7834\u574F\u548C\u4E22\u5931\u3002\n\uFF084\uFF09\u8BB0\u5F55\u65E5\u5FD7\n\u672C\u7CFB\u7EDF\u5E94\u8BE5\u80FD\u591F\u8BB0\u5F55\u7CFB\u7EDF\u8FD0\u884C\u65F6\u6240\u53D1\u751F\u7684\u6240\u6709\u9519\u8BEF\uFF0C\u5305\u62EC\u672C\u673A\u9519\u8BEF\u548C\u7F51\u7EDC\u9519\u8BEF\u3002\u8FD9\u4E9B\u9519\u8BEF\u8BB0\u5F55\u4FBF\u4E8E\u67E5\u627E\u9519\u8BEF\u7684\u539F\u56E0\u3002\u65E5\u5FD7\u540C\u65F6\u8BB0\u5F55\u7528\u6237\u7684\u5173\u952E\u6027\u64CD\u4F5C\u4FE1\u606F\u3002\n\uFF085\uFF09\u60A8\u7684\u6743\u5229\n\u6309\u7167\u4E2D\u56FD\u76F8\u5173\u7684\u6CD5\u5F8B\u3001\u6CD5\u89C4\u3001\u6807\u51C6\uFF0C\u4EE5\u53CA\u5176\u4ED6\u56FD\u5BB6\u3001\u5730\u533A\u7684\u901A\u884C\u505A\u6CD5\uFF0C\u6211\u4EEC\u4FDD\u969C\u60A8\u5BF9\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4FE1\u606F\u884C\u4F7F\u4EE5\u4E0B\u6743\u5229\uFF1A\n1\u3001\u8BBF\u95EE\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\n2\u3001\u66F4\u6B63\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\n3\u3001\u5220\u9664\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\n4\u3001\u6539\u53D8\u60A8\u6388\u6743\u540C\u610F\u7684\u8303\u56F4\n5\u3001\u4E2A\u4EBA\u4FE1\u606F\u4E3B\u4F53\u6CE8\u9500\u8D26\u6237\n6\u3001\u672C\u9690\u79C1\u6743\u653F\u7B56\u5982\u4F55\u66F4\u65B0\n\u6211\u4EEC\u53EF\u80FD\u9002\u65F6\u4F1A\u5BF9\u672C\u9690\u79C1\u6743\u653F\u7B56\u8FDB\u884C\u8C03\u6574\u6216\u53D8\u66F4\uFF0C\u672C\u9690\u79C1\u6743\u653F\u7B56\u7684\u4EFB\u4F55\u66F4\u65B0\u5C06\u4EE5\u6807\u6CE8\u66F4\u65B0\u65F6\u95F4\u7684\u65B9\u5F0F\u516C\u5E03\u5728\u6211\u4EEC\u7F51\u7AD9\u4E0A\uFF0C\u9664\u6CD5\u5F8B\u6CD5\u89C4\u6216\u76D1\u7BA1\u89C4\u5B9A\u53E6\u6709\u5F3A\u5236\u6027\u89C4\u5B9A\u5916\uFF0C\u7ECF\u8C03\u6574\u6216\u53D8\u66F4\u7684\u5185\u5BB9\u4E00\u7ECF\u901A\u77E5\u6216\u516C\u5E03\u540E\u76847\u65E5\u540E\u751F\u6548\u3002\u5982\u60A8\u5728\u9690\u79C1\u6743\u653F\u7B56\u8C03\u6574\u6216\u53D8\u66F4\u540E\u7EE7\u7EED\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u4EFB\u4E00\u670D\u52A1\u6216\u8BBF\u95EE\u6211\u4EEC\u76F8\u5173\u7F51\u7AD9\u7684\uFF0C\u6211\u4EEC\u76F8\u4FE1\u8FD9\u4EE3\u8868\u60A8\u5DF2\u5145\u5206\u9605\u8BFB\u3001\u7406\u89E3\u5E76\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u9690\u79C1\u6743\u653F\u7B56\u5E76\u53D7\u5176\u7EA6\u675F\u3002" };





















exports.text = text;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 33:
/*!*****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/calender.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 34:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/table.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 35:
/*!****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/presell.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 4:
/*!***************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 44:
/*!******************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/setstyle.png ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 45:
/*!***************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/right.png ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAACvElEQVR4nO3avWoUURzG4be1ERsRLLSxsFALP/ACrIWAFoJgIShE8BqijVbehlcgdn4giDcQEMHOThE0BhFR1172eJLM7H/C7vPA6d/mx3BmJgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjCwSR3k7xI8jLJ0yRXphwE+8V6ku0ksznnbZLL002Daa1nfhj/nvWpBsJUjiX5kZ0FIhJWzsPsPA6RsHJeZ/eBiISV8T57C0QkrIQ32XsgsyS36idDnY0MC0QkLLWjGR7ILMnt6uFQ5UbGicSThKW104+F/zt/ktysHg5VRAIdIoEOkUCHSKBDJNAhEugQCXSIBDrGiuR69XCoMkYkvyMSlphIoEMk0CES6BAJdIgEOkQCHSKBDpFAh0igQyTQIRLoEAl0jBXJ1erhUGWMSH5FJCwxkUCHSKBDJNAhEugQCXSIBDpEAh13MjySWZK16uFQZYxIvic5UT0cqowRyePy1VBoaCRb9ZOh1tCL++H6yVBnaCCH6idDjaFxfKifDDXGuKTfqx4NFcaI412SA9XDYdHGiONTkpPVw2HRxvjV5GPEwRISBzSIAxrEAQ3igIYx4vgccbCExorjdPVwWDRxQIM4oEEc0CAOaBAHNIgDGsQBDeKABnFAgzigQRzQIA5oEAc0iAMaxAENY8TxJeJgCY0Vx9nq4bBo4oAGcUCDOKBBHNAgDmgQBzSIAxrEAQ3XMjyOr0nOVw+HRTuSZDvigLk2Ig5oepZhcVyonwx1NiMOaHqevb2tOjfFWKj2ILuL41u8ymWFHE/yMzuP4+I0M2E6a+nHsRVxsMLOJHmV+XFsJjk13TTYP84meZTkSZL7SS5NOwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBV/QXuHiQw0QrFNwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 46:
/*!*****************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/aboutus.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 47:
/*!*********************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/recommendus.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 48:
/*!***********************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/privacypolicy.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/*!********************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/clearcache.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 60:
/*!*****************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/js_sdk/u-charts/u-charts/u-charts.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.9.4.20200331
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign = function assign(target) {for (var _len2 = arguments.length, varArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {varArgs[_key2 - 1] = arguments[_key2];}
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!varArgs || varArgs.length <= 0) {
    return target;
  }
  // 深度合并对象
  function deepAssign(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
      deepAssign(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
  }

  varArgs.forEach(function (val) {
    target = deepAssign(target, val);
  });
  return target;
};

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.event.trigger('scrollLeft');
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.event.trigger('scrollRight');
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y, points[i + 1].y);
    } else {
      return false;
    }
  }
  function isNotMiddlePointX(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].x >= Math.max(points[i - 1].x, points[i + 1].x) || points[i].x <= Math.min(points[i - 1].x, points[i + 1].x);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  if (isNotMiddlePointX(points, i + 1)) {
    pBx = points[i + 1].x;
  }
  if (isNotMiddlePointX(points, i)) {
    pAx = points[i].x;
  }
  if (pAy >= Math.max(points[i].y, points[i + 1].y) || pAy <= Math.min(points[i].y, points[i + 1].y)) {
    pAy = points[i].y;
  }
  if (pBy >= Math.max(points[i].y, points[i + 1].y) || pBy <= Math.min(points[i].y, points[i + 1].y)) {
    pBy = points[i + 1].y;
  }
  if (pAx >= Math.max(points[i].x, points[i + 1].x) || pAx <= Math.min(points[i].x, points[i + 1].x)) {
    pAx = points[i].x;
  }
  if (pBx >= Math.max(points[i].x, points[i + 1].x) || pBx <= Math.min(points[i].x, points[i + 1].x)) {
    pBx = points[i + 1].x;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    var titleText = [];
    if (categories) {
      titleText = categories;
    } else {
      titleText = item.data;
    }
    return {
      text: option.format ? option.format(item, titleText[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0) {
      if (item.data[1] - item.data[0] < 0) {
        color[1] = downColor;
      } else {
        color[1] = upColor;
      }
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = opts.chartData.eachSpacing / 2;
  var xAxisPoints = [];
  if (calPoints.length > 0) {
    if (opts.type == 'candle') {
      for (var i = 0; i < calPoints[0].length; i++) {
        xAxisPoints.push(calPoints[0][i][0].x);
      }
    } else {
      for (var _i3 = 0; _i3 < calPoints[0].length; _i3++) {
        xAxisPoints.push(calPoints[0][_i3].x);
      }
    }
    if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
      spacing = opts.chartData.eachSpacing / 2;
    }
    if (!opts.categories) {
      spacing = 0;
    }
    if (isInExactChartArea(currentPoints, opts, config)) {
      xAxisPoints.forEach(function (item, index) {
        if (currentPoints.x + offset + spacing > item) {
          currentIndex = index;
        }
      });
    }
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x <= opts.width - opts.area[1] + 10 && currentPoints.x >= opts.area[3] - 10 && currentPoints.y >= opts.area[0] && currentPoints.y <= opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i4 = 0; _i4 < lineNum; _i4++) {
      var temp = series.slice(_i4 * maxLength, _i4 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i5 = 0; _i5 < _currentRow.length; _i5++) {
        var _item = _currentRow[_i5];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i6 = 0; _i6 < legendData.widthArr.length; _i6++) {
        _legendWidth += legendData.widthArr[_i6];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item, opts.xAxis.fontSize || config.fontSize);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getXAxisTextList(series, opts, config) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data = dataCombine(series);
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[0]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.xAxis.data[index].min === 'number') {
      minData = Math.min(opts.xAxis.data[index].min, minData);
    }
    if (typeof opts.xAxis.data[index].max === 'number') {
      maxData = Math.max(opts.xAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.xAxis.min === 'number') {
      minData = Math.min(opts.xAxis.min, minData);
    }
    if (typeof opts.xAxis.max === 'number') {
      maxData = Math.max(opts.xAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  //var dataRange = getDataRange(minData, maxData);
  var minRange = minData;
  var maxRange = maxData;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.xAxis.splitNumber;

  for (var i = 0; i <= opts.xAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range;
}

function calXAxisData(series, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  result.ranges = getXAxisTextList(series, opts, config);
  result.rangesFormat = result.ranges.map(function (item) {
    item = opts.xAxis.format ? opts.xAxis.format(item) : util.toFixed(item, 2);
    return item;
  });

  var xAxisScaleValues = result.ranges.map(function (item) {
    // 如果刻度值是浮点数,则保留两位小数
    item = util.toFixed(item, 2);
    // 若有自定义格式则调用自定义的格式化函数
    item = opts.xAxis.format ? opts.xAxis.format(Number(item)) : item;
    return item;
  });

  result = Object.assign(result, getXAxisPoints(xAxisScaleValues, opts, config));
  // 计算X轴刻度的属性譬如每个刻度的间隔,刻度的起始点\结束点以及总长
  var eachSpacing = result.eachSpacing;

  var textLength = xAxisScaleValues.map(function (item) {
    return measureText(item);
  });

  // get max length of categories text
  var maxTextLength = Math.max.apply(this, textLength);

  // 如果刻度值文本内容过长,则将其逆时针旋转45°
  if (maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  if (opts.xAxis.disabled === true) {
    result.xAxisHeight = 0;
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.legendShape = each.legendShape;
    listItem.pointShape = each.pointShape;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item2 = series[_i7];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item3 = series[_i8];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item4 = series[_i9];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i10 = 0; _i10 < series.length; _i10++) {
    var _item5 = series[_i10];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i11 = 0; _i11 < categories.length; _i11++) {
        if (item.data <= categories[_i11].value) {
          item.color = categories[_i11].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        if (item.constructor.toString().indexOf('Array') > -1) {
          var xranges, xminRange, xmaxRange;
          xranges = [].concat(opts.chartData.xAxisData.ranges);
          xminRange = xranges.shift();
          xmaxRange = xranges.pop();
          value = item[1];
          point.x = opts.area[3] + validWidth * (item[0] - xminRange) / (xmaxRange - xminRange);
        } else {
          value = item.value;
        }
      }
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[1]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.yAxis.data[index].min === 'number') {
      minData = Math.min(opts.yAxis.data[index].min, minData);
    }
    if (typeof opts.yAxis.data[index].max === 'number') {
      maxData = Math.max(opts.yAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.yAxis.min === 'number') {
      minData = Math.min(opts.yAxis.min, minData);
    }
    if (typeof opts.yAxis.max === 'number') {
      maxData = Math.max(opts.yAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.yAxis.splitNumber;

  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i12) {
      var yData = opts.yAxis.data[_i12];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      rangesArr[_i12] = getYAxisTextList(newSeries[_i12], opts, config, columnstyle.type, _i12);
      var yAxisFontSizes = yData.fontSize || config.fontSize;
      yAxisWidthArr[_i12] = { position: yData.position ? yData.position : 'left', width: 0 };
      rangesFormatArr[_i12] = rangesArr[_i12].map(function (items) {
        items = util.toFixed(items, 6);
        items = yData.format ? yData.format(Number(items)) : items;
        yAxisWidthArr[_i12].width = Math.max(yAxisWidthArr[_i12].width, measureText(items, yAxisFontSizes) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pixelRatio : 0;
      yAxisWidthArr[_i12].width += calibration + 3 * opts.pixelRatio;
      if (yData.disabled === true) {
        yAxisWidthArr[_i12].width = 0;
      }};for (var _i12 = 0; _i12 < YLength; _i12++) {_loop3(_i12);
    }

  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type);
    yAxisWidthArr[0] = { position: 'left', width: 0 };
    var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = util.toFixed(item, 6);
      item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pixelRatio;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = { position: 'left', width: 0 };
      opts.yAxis.data[0] = { disabled: true };
    } else {
      opts.yAxis.data[0] = { disabled: false, position: 'left', max: opts.yAxis.max, min: opts.yAxis.min, format: opts.yAxis.format };
    }

  }

  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };


}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].format ? opts.yAxis.data[i].format(Number(item)) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  if (opts.dataPointShapeType == 'hollow') {
    context.setStrokeStyle(color);
    context.setFillStyle(opts.background);
    context.setLineWidth(2 * opts.pixelRatio);
  } else {
    context.setStrokeStyle("#ffffff");
    context.setFillStyle(color);
    context.setLineWidth(1 * opts.pixelRatio);
  }
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 2.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 3 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        if (data[index].constructor == Array) {
          value = data[index][1];
        } else {
          value = data[index].value;
        }
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y - 4);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text, item.textSize || config.fontSize);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i13 = 0; _i13 < textObjectCollection.length; _i13++) {
    var _item6 = textObjectCollection[_i13];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var points = calMarkLineData(markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pixelRatio);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  if (toolTipOption.showBox == false) {return;}
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);

  var calPoints = [];
  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var i = 0; i < points.length; i++) {
          var item = points[i];
          if (item !== null && i > leftNum && i < rightNum) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            context.closePath();
            context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        for (var _i14 = 0; _i14 < points.length; _i14++) {
          var _item7 = points[_i14];
          if (_item7 !== null && _i14 > leftNum && _i14 < rightNum) {
            context.beginPath();
            context.setFillStyle(_item7.color || eachSeries.color);
            var startX = _item7.x - _item7.width / 2 + 1;
            var height = opts.height - _item7.y - opts.area[2];
            var height0 = opts.height - _item7.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, _item7.y);
            context.fillRect(startX, _item7.y, _item7.width - 2, height);
            context.closePath();
            context.fill();
          }
        };
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          for (var _i15 = 0; _i15 < points.length; _i15++) {
            var _item8 = points[_i15];
            if (_item8 !== null && _i15 > leftNum && _i15 < rightNum) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = _item8.x - _item8.width / 2;
              var height = opts.height - _item8.y - opts.area[2];
              context.moveTo(startX, _item8.y);
              context.fillRect(startX, _item8.y, _item8.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, _item8.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + height);
                context.stroke();
              }
            }
          };
        } else {
          for (var _i16 = 0; _i16 < points.length; _i16++) {
            var _item9 = points[_i16];
            if (_item9 !== null && _i16 > leftNum && _i16 < rightNum) {
              context.beginPath();
              context.setFillStyle(_item9.color || eachSeries.color);
              var startX = _item9.x - _item9.width / 2;
              var height = opts.height - _item9.y - opts.area[2];
              context.moveTo(startX, _item9.y);
              context.fillRect(startX, _item9.y, _item9.width, height);
              context.closePath();
              context.fill();
            }
          };
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var calPoints = [];

  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      var splitPointList = splitPoints(points);

      for (var i = 0; i < splitPointList.length; i++) {
        var _points = splitPointList[i];
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (_points.length === 1) {
          context.moveTo(_points[0].x, _points[0].y);
          context.arc(_points[0].x, _points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points[0].x, _points[0].y);
          var startPoint = 0;
          for (var j = 0; j < _points.length; j++) {
            var item = _points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          }
          context.moveTo(_points[0].x, _points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    for (var i = 0; i < splitPointList[0].length; i++) {
      if (i > leftNum && i < rightNum) {
        var item = splitPointList[0][i];
        context.beginPath();
        //如果上涨
        if (data[i][1] - data[i][0] > 0) {
          context.setStrokeStyle(candleOption.color.upLine);
          context.setFillStyle(candleOption.color.upFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        } else {
          context.setStrokeStyle(candleOption.color.downLine);
          context.setFillStyle(candleOption.color.downFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        }
        context.closePath();
        context.fill();
        context.stroke();
      }
    }
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2,
    gradient: false },
  opts.extra.area);

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);
    for (var i = 0; i < splitPointList.length; i++) {
      var _points2 = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      if (areaOption.gradient) {
        var gradient = context.createLinearGradient(0, opts.area[0], 0, opts.height - opts.area[2]);
        gradient.addColorStop('0', hexToRgb(eachSeries.color, areaOption.opacity));
        gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
        context.setFillStyle(gradient);
      } else {
        context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      }
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (_points2.length > 1) {
        var firstPoint = _points2[0];
        var lastPoint = _points2[_points2.length - 1];
        context.moveTo(firstPoint.x, firstPoint.y);
        var startPoint = 0;
        if (areaOption.type === 'curve') {
          for (var j = 0; j < _points2.length; j++) {
            var item = _points2[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points2, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j = 0; _j < _points2.length; _j++) {
            var _item10 = _points2[_j];
            if (startPoint == 0 && _item10.x > leftSpace) {
              context.moveTo(_item10.x, _item10.y);
              startPoint = 1;
            }
            if (_j > 0 && _item10.x > leftSpace && _item10.x < rightSpace) {
              context.lineTo(_item10.x, _item10.y);
            }
          };
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var _item11 = _points2[0];
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, endY);
        context.lineTo(_item11.x - eachSpacing / 2, endY);
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (_points2.length === 1) {
          context.moveTo(_points2[0].x, _points2[0].y);
          context.arc(_points2[0].x, _points2[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points2[0].x, _points2[0].y);
          var _startPoint = 0;
          if (areaOption.type === 'curve') {
            for (var _j2 = 0; _j2 < _points2.length; _j2++) {
              var _item12 = _points2[_j2];
              if (_startPoint == 0 && _item12.x > leftSpace) {
                context.moveTo(_item12.x, _item12.y);
                _startPoint = 1;
              }
              if (_j2 > 0 && _item12.x > leftSpace && _item12.x < rightSpace) {
                var _ctrlPoint = createCurveControlPoints(_points2, _j2 - 1);
                context.bezierCurveTo(_ctrlPoint.ctrA.x, _ctrlPoint.ctrA.y, _ctrlPoint.ctrB.x, _ctrlPoint.ctrB.y, _item12.x, _item12.y);
              }
            };
          } else {
            for (var _j3 = 0; _j3 < _points2.length; _j3++) {
              var _item13 = _points2[_j3];
              if (_startPoint == 0 && _item13.x > leftSpace) {
                context.moveTo(_item13.x, _item13.y);
                _startPoint = 1;
              }
              if (_j3 > 0 && _item13.x > leftSpace && _item13.x < rightSpace) {
                context.lineTo(_item13.x, _item13.y);
              }
            };
          }
          context.moveTo(_points2[0].x, _points2[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }
    }

    //画点
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pixelRatio;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pixelRatio;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);

    splitPointList.forEach(function (points, index) {

      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        var startPoint = 0;
        if (lineOption.type === 'curve') {
          for (var j = 0; j < points.length; j++) {
            var item = points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j4 = 0; _j4 < points.length; _j4++) {
            var _item14 = points[_j4];
            if (startPoint == 0 && _item14.x > leftSpace) {
              context.moveTo(_item14.x, _item14.y);
              startPoint = 1;
            }
            if (_j4 > 0 && _item14.x > leftSpace && _item14.x < rightSpace) {
              context.lineTo(_item14.x, _item14.y);
            }
          };
        }
        context.moveTo(points[0].x, points[0].y);
      }

    });

    context.stroke();
    context.setLineDash([]);

    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;

    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      for (var i = 0; i < points.length; i++) {
        var item = points[i];
        if (item !== null && i > leftNum && i < rightNum) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      }
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);
      for (var _i17 = 0; _i17 < _splitPointList.length; _i17++) {
        var _points3 = _splitPointList[_i17];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (_points3.length > 1) {
          var firstPoint = _points3[0];
          var lastPoint = _points3[_points3.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          var startPoint = 0;
          if (eachSeries.style === 'curve') {
            for (var j = 0; j < _points3.length; j++) {
              var _item15 = _points3[j];
              if (startPoint == 0 && _item15.x > leftSpace) {
                context.moveTo(_item15.x, _item15.y);
                startPoint = 1;
              }
              if (j > 0 && _item15.x > leftSpace && _item15.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(_points3, j - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item15.x, _item15.y);
              }
            };
          } else {
            for (var _j5 = 0; _j5 < _points3.length; _j5++) {
              var _item16 = _points3[_j5];
              if (startPoint == 0 && _item16.x > leftSpace) {
                context.moveTo(_item16.x, _item16.y);
                startPoint = 1;
              }
              if (_j5 > 0 && _item16.x > leftSpace && _item16.x < rightSpace) {
                context.lineTo(_item16.x, _item16.y);
              }
            };
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var _item17 = _points3[0];
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, endY);
          context.lineTo(_item17.x - eachSpacing / 2, endY);
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
        }
        context.closePath();
        context.fill();
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          var _startPoint2 = 0;
          if (eachSeries.style == 'curve') {
            for (var _j6 = 0; _j6 < points.length; _j6++) {
              var _item18 = points[_j6];
              if (_startPoint2 == 0 && _item18.x > leftSpace) {
                context.moveTo(_item18.x, _item18.y);
                _startPoint2 = 1;
              }
              if (_j6 > 0 && _item18.x > leftSpace && _item18.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(points, _j6 - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item18.x, _item18.y);
              }
            }
          } else {
            for (var _j7 = 0; _j7 < points.length; _j7++) {
              var _item19 = points[_j7];
              if (_startPoint2 == 0 && _item19.x > leftSpace) {
                context.moveTo(_item19.x, _item19.y);
                _startPoint2 = 1;
              }
              if (_j7 > 0 && _item19.x > leftSpace && _item19.x < rightSpace) {
                context.lineTo(_item19.x, _item19.y);
              }
            }
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      eachSeries.addPoint = true;
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;

      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pixelRatio);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }


  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(String(item), xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pixelRatio;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(String(item), xAxisFontSize);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < opts.yAxis.splitNumber + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + 3;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];var _loop4 = function _loop4(

  _i18) {
    var yData = opts.yAxis.data[_i18];
    if (yData.disabled !== true) {
      var rangesFormat = opts.chartData.yAxisData.rangesFormat[_i18];
      var yAxisFontSize = yData.fontSize || config.fontSize;
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[_i18];
      //画Y轴刻度及文案
      rangesFormat.forEach(function (item, index) {
        var pos = points[index] ? points[index] : endY;
        context.beginPath();
        context.setFontSize(yAxisFontSize);
        context.setLineWidth(1 * opts.pixelRatio);
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setFillStyle(yData.fontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(String(item), tStartLeft - yAxisWidth.width, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartLeft, pos);
            context.lineTo(tStartLeft - 3 * opts.pixelRatio, pos);
          }
        } else {
          context.fillText(String(item), tStartRight + 4 * opts.pixelRatio, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartRight, pos);
            context.lineTo(tStartRight + 3 * opts.pixelRatio, pos);
          }
        }
        context.closePath();
        context.stroke();
      });
      //画Y轴轴线
      if (yData.axisLine !== false) {
        context.beginPath();
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setLineWidth(1 * opts.pixelRatio);
        if (yAxisWidth.position == 'left') {
          context.moveTo(tStartLeft, opts.height - opts.area[2]);
          context.lineTo(tStartLeft, opts.area[0]);
        } else {
          context.moveTo(tStartRight, opts.height - opts.area[2]);
          context.lineTo(tStartRight, opts.area[0]);
        }
        context.stroke();
      }

      //画Y轴标题
      if (opts.yAxis.showTitle) {

        var titleFontSize = yData.titleFontSize || config.fontSize;
        var title = yData.title;
        context.beginPath();
        context.setFontSize(titleFontSize);
        context.setFillStyle(yData.titleFontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(title, tStartLeft - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        } else {
          context.fillText(title, tStartRight - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        }
        context.closePath();
        context.stroke();
      }
      if (yAxisWidth.position == 'left') {
        tStartLeft -= yAxisWidth.width + opts.yAxis.padding;
      } else {
        tStartRight += yAxisWidth.width + opts.yAxis.padding;
      }
    }};for (var _i18 = 0; _i18 < opts.yAxis.data.length; _i18++) {_loop4(_i18);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio,
    gap: 2 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);

  var centerPosition;
  if (arcbarOption.center) {
    centerPosition = arcbarOption.center;
  } else {
    centerPosition = {
      x: opts.width / 2,
      y: opts.height / 2 };

  }

  var radius;
  if (arcbarOption.radius) {
    radius = arcbarOption.radius;
  } else {
    radius = Math.min(centerPosition.x, centerPosition.y);
    radius -= 5 * opts.pixelRatio;
    radius -= arcbarOption.width / 2;
  }

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    //背景颜色
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
    context.setLineCap('round');
    context.beginPath();
    if (arcbarOption.type == 'default') {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
    } else {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, 0, 2 * Math.PI, false);
    }
    context.stroke();
    //进度条
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;

  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {

    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();

    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pixelRatio);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();

    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(series[0].color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();

    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();

    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i19 = 0; _i19 < categories.length; _i19++) {
      var eachCategories = categories[_i19];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();

    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i20 = 0; _i20 < gaugeOption.splitLine.splitNumber + 1; _i20++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();

    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i21 = 0; _i21 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i21++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();

    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);

    for (var _i22 = 0; _i22 < series.length; _i22++) {
      var eachSeries = series[_i22];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }

    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }

  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2,
    gridCount: 3 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(angle), radius / radarOption.gridCount * i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= radarOption.gridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i23 = 0; _i23 < points.length; _i23++) {
        var _text = points[_i23].name;
        var _tHeight = points[_i23].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i23].area = areav;
          points[_i23].areav = _area;
        } else {
          points[_i23].area = _area;
        }
        points[_i23].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  _this.animationInstance && _this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize : config.fontSize);
      }
      opts.area[0] += (maxTitleHeight + 6) * opts.pixelRatio;
    }
    var rightIndex = 0,leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i24 = 0; _i24 < yAxisWidth.length; _i24++) {
      if (yAxisWidth[_i24].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i24].width + opts.yAxis.padding;
        } else {
          opts.area[3] += yAxisWidth[_i24].width;
        }
        leftIndex += 1;
      } else {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i24].width + opts.yAxis.padding;
        } else {
          opts.area[1] += yAxisWidth[_i24].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  } else {
    if (opts.type === 'line' || opts.type === 'area' || opts.type === 'points') {
      opts.chartData.xAxisData = calXAxisData(series, opts, config);
      categories = opts.chartData.xAxisData.rangesFormat;
      var _calCategoriesData2 = calCategoriesData(categories, opts, config, opts.chartData.xAxisData.eachSpacing),
      _xAxisHeight = _calCategoriesData2.xAxisHeight,
      _angle = _calCategoriesData2.angle;
      config.xAxisHeight = _xAxisHeight;
      config._xAxisTextAngle_ = _angle;
      opts.area[2] += _xAxisHeight;
      opts.chartData.categoriesData = _calCategoriesData2;
    } else {
      opts.chartData.xAxisData = {
        xAxisPoints: [] };

    }
  }
  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.yAxis.dashLength *= opts.pixelRatio;
  opts.yAxis.padding *= opts.pixelRatio;
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.dashLength *= opts.pixelRatio;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;
  opts.rotate = opts.rotate ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 83:
/*!****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/history.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 84:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/right.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAACvElEQVR4nO3avWoUURzG4be1ERsRLLSxsFALP/ACrIWAFoJgIShE8BqijVbehlcgdn4giDcQEMHOThE0BhFR1172eJLM7H/C7vPA6d/mx3BmJgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjCwSR3k7xI8jLJ0yRXphwE+8V6ku0ksznnbZLL002Daa1nfhj/nvWpBsJUjiX5kZ0FIhJWzsPsPA6RsHJeZ/eBiISV8T57C0QkrIQ32XsgsyS36idDnY0MC0QkLLWjGR7ILMnt6uFQ5UbGicSThKW104+F/zt/ktysHg5VRAIdIoEOkUCHSKBDJNAhEugQCXSIBDrGiuR69XCoMkYkvyMSlphIoEMk0CES6BAJdIgEOkQCHSKBDpFAh0igQyTQIRLoEAl0jBXJ1erhUGWMSH5FJCwxkUCHSKBDJNAhEugQCXSIBDpEAh13MjySWZK16uFQZYxIvic5UT0cqowRyePy1VBoaCRb9ZOh1tCL++H6yVBnaCCH6idDjaFxfKifDDXGuKTfqx4NFcaI412SA9XDYdHGiONTkpPVw2HRxvjV5GPEwRISBzSIAxrEAQ3igIYx4vgccbCExorjdPVwWDRxQIM4oEEc0CAOaBAHNIgDGsQBDeKABnFAgzigQRzQIA5oEAc0iAMaxAENY8TxJeJgCY0Vx9nq4bBo4oAGcUCDOKBBHNAgDmgQBzSIAxrEAQ3XMjyOr0nOVw+HRTuSZDvigLk2Ig5oepZhcVyonwx1NiMOaHqevb2tOjfFWKj2ILuL41u8ymWFHE/yMzuP4+I0M2E6a+nHsRVxsMLOJHmV+XFsJjk13TTYP84meZTkSZL7SS5NOwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBV/QXuHiQw0QrFNwAAAABJRU5ErkJggg=="

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map