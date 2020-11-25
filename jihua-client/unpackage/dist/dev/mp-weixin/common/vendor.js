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
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
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

/***/ 124:
/*!************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/th.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 125:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/lkq.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAIAAAD65UUzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAIdUAACHVAQSctJ0AAGSzSURBVHhe7b0FeF1Xliaab+a9781Mz0z3637T3VVdXCEnMVuSbVmSxczMumK0mNG2bEsyM0oyyhbjBemKmckoU5w4ZtFlvuettc+V7KSSVDnlqlS6e3nr3IP7rL3+vWiffY7fo37qpCbljdU3dnx9F11+UvSf8PxN0793eH7i9J/w/E3TTx+eP4F+urD9Jzx/0/STh+drQl8GYWnXmzvo8tOi/yjw/ETp3wE8KijLG28ColSq4VemkJNjKpUSVpbO/InQv2d45HI5/KpUCkqtpFRQVEqphD70U6GfDDxq1IRvoe+BBxYKhUKtVqpkUkolp2QS6qemQP9OtYcsiFmDQypKIRW8eGapv0UyN4tq9NOhf4+hwddWVVKhgJKKA1ydHQ0MJC+eAzzfpYh/g/TTgOdNgcL61zbpQu8EVVk6olSjSkE4oJaJ+c+fmulssNTaQC0sgL3TnPxToJ8APLQ0VYTodZroPSrw+2RVqVSq0NHA+eQqci0CJBHWXr4Y6uJkuGIFtYjwwMlwueb43zb9deEBmSyLZWn9DTkRP4HlDcId6F/UchkFvkQpQycPBVZkMrVUSikVuF8qwyKDdSWlVOH5SygpJML02Jj8hDjHTZvUL19RcoDnTXVcvt0f3PpvgP4K8GgEjCuwQLGQdVhR40KqhKOky4PQKSgKOBkFCDvhRHDkUIRSSiymhIuUhCd4/uXs5zNf3Z76YmLs8dTE09s3BF98rv7qCbXAp4RiiKYVgkUATwkwgCZRcJ3Yy9Wx+OA+O23tewNDKqEMgwOsneYEtAnib+AB7guF7Kbpaxs/Dv014dE0WAMV9Ho1AoPyJ2ApFRIClkSllpETlJQYdEIpm+c/e/jFvoI95mYm2hu19Iz0N+lv1tmkra+vr6ent3HzJgMDA6ONm3Q/W+1sbhnm7X359Enx7EuVBLQNbyIWS40Mt5w9eshhq+Hpwn1wM8iHNMwgJ9gb/qPDAz8Ag4IUyA/xVw3CQxhAAnJYRcVBI6VQQ+YooYTzquePuZdKgx2tddeu3qCttUJXb6OLh1NSdmDRsaTz5SlXKmPPX04uq0guq44rvpR65rx1YLiWvrGliYW5rq7RunXxgSFzXz6F+6gUSiMTg7NnT8eEb7M2sxJK5uWUGPIhuVwJtwa/tQTPm1jQHP6HgQcF8QY80E/pLTLQgkKQy9QKuVQuE6rkoi8fzEQHBhhv0jHYrGNkZhq/ffuO0kt5lQ0JZY2J9Z1xjT2hNW3BdW2hTe1Qwpu64psHoms5SRVNO67VO4bH+YVFnzp1xt7WYc2nq/Myc8VC0dat+geOHTt6/toGQ/PmdrZMtqBSSun7ImMksiCsLhNhjz78o9JfFh5sPHRfkgoutxStGexREAumUkNHBmAosYTiCx9PTLlbWurqaK/W0/fJzEm/VpfJ7o5r6I5t7I9pGgxr6Itkj4Q3DzPYg0EtI8Hc0cDm4aDm4TDOSARnKIIzEMbq2dbUGV9Ws8rVKyh3R86BA4ZWlmvWrLEyMy84eBzA28KI2KC16c7wEKXErqCEsJtmDP6wF8EvsArRhcbQ/ej014CHqAshEAEJB+hNBY2QWqEWC4TPn0f7Buqt1zU0sY3bsS/ncm1idXNwXXsAe9iHPcrgXg9smQzkTDA4o4HNo37sIb/mEf/WcUb7pC9nJLBlHHb6coZdGvtgGdzQEVfXYpiYYRkdF79rd2BkjL6esW9UUlpDW2pjm7V/uMFWk5zcDJFwgRhYCMk1jBJ4FApKThj+hj79OPTX8j00JnQhBg6kASGUULCgFi0+nBg10NJesWFz2K5DCVc4sdW9MbV90U3DkdzxkNYJL/Ygo30CYAhtnw5pGYcCGhPaNu7HHfZqGfRvHWO0TgRyxwI4o6HtNwJYY8HN44y6rqi6Tuu8AzbR6aFp+ca27lt9wkJrOYGszpgqZtSxMxvMzBgMf/HsnGJBANmSBOII5A1YRb1Brt9k+Mejvzw8mhZiZ9T80vGzmpJJxSLefER4sL7+li02NjllNZHX2EH1gwGsiZDm68GcySDOGKNlNLBtgmAwHgAYsEfCWmH/KKNlOKB1KKBt1I87CmoE54AOwSVwIaN5KoQ7Hdg4GNvQZxS7wz0p3zshL+b4heiWAXdmVzC7L7axPfVyuXVQiLa+4fFjpyGEl8k0ekz6DulMpFMtMf+j0V/cuIGZwCV0UeKBwK6rwSsLVZRQcLOnS2/T5k8367lvz0usawyqbWWwhv2YQwHccbRXLeOM5jEowdyJwOaxIO4ErIOJA12BEwAVQAswg/1wJuAHewLZo0HNk2AJ/Vqm/JmjYQ1Dsddaf2cf6JxWZJ1RFFTTA/X4MQcZ7H5GfWtEDTO9qs7ALyAxM5vPWwCMUHUg+QVUkNHl3vRj0l/B92ABbCD7gxWpVKoWSRXPX6b4eFtu2qRrYbermhlcXsNgdvi3jHoywYWMgF8BWQd1TgV2TPk1jyJCLVMgd/A9AE8Ad5LRjCsga/+moUAWGEDADHULzvRnj/k2TwZ13EIdYo/FsIa8T1UYxuXZ5h21PVQRypoKYoOdHPMCneMOMurYSZV1Bi6e5y5eBJeDMT3gQYIZZB06lhpY/jHpr+F7IECCCFogEkqlYkohfX5jzE5rlen61ckZ2enXGqKbukOZvX5NfWCa/JmgNJOBbZN+3DEv9pA3Z4jWEm/WEGiVb+NwQNNoYON4YMNYSMN4eON0aONEEHPMr3HQv77ft2nQmz3qw53y5077N08BhOCNfDh9YezuTwPirNL3G2Sd8jzfGs4ExRqH0zw5EGIMRNR37Kzmvq9r/PDFY7lKqFBJac2BooS8+N+39iBB4k4aKZWIVAJ+xaljZp/92n7D7x10P9m9Nz+5qjEcouSmoVDOuH/jCDh2VBHOBPgYUA6I03ybBvwaBwIaBhgNA0H1A6ENwyFVg25nOZZ7K80Lrlntq3I5y/a+0h5RPxzBHEO5o4ZNB3DA6E0FtU+5tvT7sTq1IjMcMw9b5J22LCqLYE6EcW+C9XNnjYJqBtX3RV/mhhadMXNyAh7lSokUDRwlJaZNrfwPAA+2VylT8hZ2b9tmu3ZVjJO5p94HdQfCQz03ZZaWQloT2TAYyhrzZfX7c4fBXoWA22gaD64Z8ipttT9SbX+kyvlkjcuJGtM9xVuyjxrlnDDPO2uZV2KZU2yRXWyz86Jpzjmj9FMO+yuCqgeDWaP+9QMQUwQ0jfuzJ9yYA5AnGSfs9sw6Yp15xCD7mF9FN3QCUEfQUTgNQI2rn8qp6FmzSX/h5VNQGzISBDEcwvOj0zuD5w+H6HEPBgZgzeWUSOTn5GS8YVNmRMjeOO+TyfaNhbbXitxsXAwKauqTGrrCWRCMjfpzhkObhn0ut1nsLdPPPmeUXWy5/aL1jgumWWctcost8s5a5Z2z3l5sk3vONgdKiW3mOZsMLI47LlnkluhmnLY+XBlQ1QN6FtE87Vs/BDlTBGtYPzzPO/OYXcZRs7xT9mfqfRv64UaQPPk3DQY2jYbUT2XUDVs4efe1ccHZKDF+g1jmR9Ybmv5S2gPY4FAJBGoymZrPZzg6GWzWj9ledOTCmSCr33GKbNoObG0sNKjc721vr5V5rTKioQ+8iHdlv9Gu80a5Zw2zT1vuOG+747JVVqlt9iXHnKv2WVccssuccq/Z516BPXY5F+3zLtjlljrmlDrnXbDKPGeRXWqzo8wk94JZwUWvC+zgugGIrf3BaZW3fuYR75p61Cn3HKidcdF5MGgQv4V2XQ9sHwP35tk4ElPTHZaSnZeRAUEB4gMqBAYZ+tuPjdEPg+ePcY1PyMhjGJlM8HLOxc5JS1s3s+jwroq6yLzEU2mmXYVb2veua92vxd6lfyzNwoFhv72O5XGi0nDHeZO8c5bbz1nlltiB9HMu2mVedMq86px1DYp92mX7jMsAkm1WmW32FTjqkHPeKfe8Q3YJQpVz0TrzgnX2RYvtpVvzzoI9hMQWUI+p7FzjleCadswpt8Qk8/TWHWci2SMQwUOg6NPS79s24s2diqjrTtpzYFt4pFJCWzXQHTILa3mMg/7Bta/Rt+17g77v2J9EPwAewIb29jhUgwyQH9ig/SgCowLPKqUkokc3bm3V0tPaYhZ78lJ2DbPg2hULq3UNRbYdO9b27FvXVrS6vUinfrfR7hiTIIaTb+ZO2+yjZlnHLHPPgrgdsy87Z191zChDbLKvOmVdBEWxyyqxzb5gn3PNIfuqQ8ZF55wLjrnn7bNLnHMvOmbjil3ueYuci8aZJQBzaAk7tbzbPuuoTfJe1+wTjhlnrLNLdLNPBtb148hQy1AgFxLbcQ/OJKCYuOtgVEiYUor5qVwlVlIKbBEdwtGNpssbEieZHBZygN5DE9kDG/T5dHnjtKU9f5x+GDyaorkL+aEbgxYbGFaIVfxZZnm5sb6JrqHt7vO1yeWszOqaPaf3RvrosPYY9xWuHdy/tmfvqp59azv3bWreZbkrSM/R1jAsc4d9yh6n7WcBBoesS3bplxzSr7jnVdmnX3LKLnXMOuecV+ySe8ExrdQ5pcQ15aRTyiHn7OOuuSdtEw66Zpx0Sj3imHbcJg0vt8s8ZZ9+JOlUwwaPOJfso7YZhz3zwVQW6+eeZdT2BXKGGC2DUCC29mWCcet08A+9ePqMUixG1cfsWUU/hfoaPF+XKWwReDSdld5DTiGb9MZyWToHSbPnj9Pbw/O6argZcgZbdBuw4ICNghItVJ05ob9hi7V7SPY1bsIVlntGTnhaTFyEzaU9rq37tnbuWdmV/1Ff4Yqhok/7ClZ37tLh7rHeF7zVwWB1eEaOW9ZBh9xiMFN2uVdBSwAb16wr9hnFLtnFbhlnPNOO+yUfC0jaz0jaxUjd4ZOe65Oxwz+ryCu5wDexICDlgFfyEZ/Mk55p+wNyj662C3JO3W+fc8Q294RNxlmb7Rf0t58LaxwOZPYFtw4GtAI2XVFNfVkVbD1T8xcP71KQmWE2ig84sJkaedItpWEgRIQAC2gy9MzlQ3gFbv9BmIQEJ3ztck35Xnp7eOAWhDOytgyPWqZSgkdVSWTS2dljO/JMdLe4hydkXG6KrG5Prm818XR58cUoGLFrecbte7cM7Fs3uHfNUNHKnvwPhkGHdq3q3qPbvtvyaLShgc77YampnmlFzlmn7NJP26adcUg95Zxx2mN7qX3aMfvUw+ZRu9bbh60wcV9l5faxpcPvLW1+Y27zKzOH31m4fmzqvtLKZ6VtoFVUjmtC3lpb74DMA64phQ6ZB5zyTtpnnjJPO2WyuyS4vie8edSf3ede3xrZ0pda1eKWmGluYyHlvVDLxBjO0IIjLaWbCXiRgkNT2HQgIgKygD1YYB3QonsqrC+XJaJPI/Rth7+VfqD2kGrJ3AEo2N3UKqVcJRVS0sWcxNjN6ze7hiUm1HFDOT2hrI48TrO9u4XgfuvhmE3cvZZdBboDhdp9+WsGi9b3713dVfjZ4GGd/kOb2/dubD1kXpxmbKfzLwG+HhGpOzwS893S95mEp6xw9P25qetvHQK1IrOc9pZEXmLHVbRHl3PDypsjqlrDqrgxzJ7w6taE6rbYq6y4KrZJRv5vLew/MLb+zMzZ2DfaKTHfIW6XS8IBu8QDvmeqgus6A5uG/ZmjIdzRiOqWvHPXtA3MZvnzCkomVclQxAqUI+KEzcMxbPIQCBWDwPNGwUFuKCgQOJsub66/cdUbRGSoKd9LPxAemgn8g/tCYxRytVhAyXg5adE6mzbEbN+XXdUazOnxYLZFNraEHznU0Vouu8fcZvI/2osMB/frdeevHtyj1bNrXf9BrfbCle0Fq1p3f9ay59P2fVrcvYZ1B32igp1WbjHQcmeYJGZvK72cXtmQUdcSW86Mqe3YxuoLru1m1PYEMUcCmMMM1kgwa4TR1B/K6Y9h9YXVtoU1dsZyupJr2JkVDbuqm+NPlJlsy/mtlc/P9d22RuRGXqxNYnWH1rTFNHRvq2rOuFila2LNbGSJlfJFhUiqVspR4qShOPQGBZWG+BiNMIkAaFRew0ODQRyO5hwaG3ygRAq9X0OkCk35XvpB8Cxxg9yr5JRcSklFlGg2PNhTW087ICcvrrI5tLEvsK4tqrbFo+CIoZv77FdTintNieb/o3nXpq69GBcMF63v27Ous2Bt5/51ffu1uwpW9xau7izawNqvf+WIx+5TO3bW12+rbwlr7Aqq5kSzwEP0gJOAaoMhZeGMBbJHfZljPqxxPzLsFtE04Hyu0ub45bCm/gDmkE9jf2Bjf2h9byTYseq20BrUsKTGvtDShhW+kf9qaWeTk5t95crOI8eNjEx2pGeopCIaCnQb4Dig/4EHRfFBK/GIpr1EoLCgTwbpa0AiRC5UUnIJJZerlTiVi4CK9lADjwYMzfl/Cr09PERVNewCk0opJZZSAoGvh4uW/qa4AwdyGrnRzdCjRx2OlZtn7PVMyTc0s3w506e4U5ds8j87i7Z271vXU/DJ4G5QoPUAT9fe9W171rYVanP3GjQdtr103GP/mdgdNRei61lBzf2+LSPejV0h3GGAJKx5PKhljMEZCeCMMpon/DiTvk0TjIYJqyOVW3MPW+w+viG9MKC2E6yWN3vcnzvtzR4N4IxDZupe2xbI6QtjDYRWdyTVdqRUsQKOHtvM8NtoZBzuH6BYnKfEIpAljg7K6Ul0SxMNUKAozderb8ADBXcSQmyUgA2IYp4S8SkZ1AMH4Y92V0SvNGf/xeChbwHqD+xj5ikXU1KJ+gXfych2lZZu9P4jiTWsyIauoMpegx2llnml1on7PSMznO3tRA/6vuQcSt7y9/0Ftr17dAaK1o4UrB0uWNe7e3V30Xpu4Yb6/YbnD3oePZ2849KB9LqKqKY2f9aAT/OID3fMnz0S0jwVxJ5igNBbRv1bx/xboEx4NQz7VA0Y5V82zT4Fzt86vcDlKGpPCNg6hGfShzvh1zLhR1KcgOYhwBV0jox5DzJqW6Mqm3SDolbqm27W1vF3dJzoHJC+mKeEQkrIo3BKFwoRuj1t1DClQ2lDQRnDArfQ6uFMH6JYSsXCwtPrE1brPjy1I1U5O4sIkZgCq0GBkRqQsArN6h+D6i3gQW1VA8PIGPYy6Cki4fTAiLGO8QZt0/QTl5MrOGB/Amp6jfMvWm6/bJlZ4pR6LDBhu4eDHf9G69C55G0b/mfnTtuB/cZdRRu79xs0Fxk1HLSuOeFWctT59NmIg2WFeZUX4usbQ5ndkIu4M8cDOm6CiANbJoM5k8Et10PabjJaJ1xqu1CHGgacz9SZ5p60TD3onFIUkJJvFpqY1NAVwRqErDOseSqAOwkI4RIQ4o4iri2jAdxx//Ybbg1DgS3jQQ1d4VdZ2VWsPSWX/cNj1mpt1dLSMzc0rLl6gRIDQlK5TAJNxsFRGhtYyGWwgbIGwYPHJSBBwQmPoHOzTz02rgw2XOmi9Vv+gzs4uKqQEh1DVHFBV7JUNPu/l94CHqVSKZdLoSiFPPWLp7OTE+GO7nra+nqOXmmX62Oq2qPZ+IDSYFeJRc5568xSq9xSp9wTASnb05LjZpovj57NyDT/NbfQhbXHsHG/ydWDzqeOhRWU7sytOBl77Xhs/ZUEFjOG0w6RXgCrL6h5msG9xeBe92EPh7RPQpIPIQCDMxrcOgkrIXV9DkUlDqkFEXkH3MLi7dz9zhRf9EtIj6poDmwaCmVNQAGFIw/xpvH5Apc8CIfSOoKD4pzBEPYoo6EvjDMUxuyOZbYlNbQlVHDTLzWG7dy9fouOs4XRq7vX5bxZYujwSa8cxxCAQNZypQJyIzktY/QqYOAlQor3LMJsfYTe79h7w73W/3PD8f04rRWyKDiFfqnoLwEPmtSlFYAHMxulvPjIIUetDR7aOk5aOkW5Ow9eLMu6XJVR25XSNOJxql4v46RFRrF9dqlV1kn77P0eKTmmjrbMq2daLu+vOpt7Zl/YmUP+J46HHSjO2lVxKrG2OqSp2Y/T5dXS78XupwdaQlonAjiTDM510vfHAtsmAtiDYW3jINAIZl9sfZfDzhOOCTsNHLxCIuPGxiZAeML5ebfw6IT6ToAwvGU6mAVeajyoeRLgIQhN4tNx7lggdwSsXDB3FOABZ+bLGfZvHfFrGQhoHvCr649qGoD4cMeVcjsvr3Xr1qSlJj//6gvIhMDAgRTAgilwmjHmeLBUwj74B3hBKD7/JNhkpf+6v6vLsuXucU22+DXDYD2YfXBpSxi89j10VWQV9tO69Z30dsYNzSbUJpTWnjhjs2a15ZoVNhtXOpsYOFlamZjY6dsznLNPgNLY5l40SzrulHXEIWO3TmB45OFDR6srfDNSYk8dyaq+mlpxKbW2Kr6BFd/SFc7pCmzuYYDZaZvwah6BJXgIkCy4dHAb9E7vlnHPpoEg1mBsU09GRZNLYpq2sc2OPfsXhRI0/cTcSvl8Cy+/6MoWP9ZwEHcCQAVdAS9F9AawAZwmQzlYQrjTEDvALXDeAZl+FdoG68MBrVNB3KkI9lhMfW9iTWv0iYvrzWw36xvWlF2WC+bkSolIISEyBeniHWUqSqJQq6VS9cvHATq/jdL5+44Ci/Z83c49Rg15tu7rfk3Nz+J0e4VSJiOe7A14llb/DHiW9eabRNcpkFLz8xPtTQfSojJ9XaMd7M209LwZ8S5pR+xyS20yzlqkHLJKK/jUOyy09Fr0tYa4CmZSU3tYfUswq4vB7vVtGoDQC6cMcEeC20ZwQkHrFLgKWMHwjINOwrtllNE+gZ2dORjR0Jfc1BN0tFjL0aXw6BExT6SWyiH2RaMPrCpVSqnI0ts3oa4tgD2Mc0XI5B7QDACJzCpBeII501ACWGOh7TdC26cByLCO64Al3A6harvu2zod0HIDwoog5nBETXtOFTcwI19ni0FkRIhEKiCqQ3JVELVMJZMp1DLRi5lhN+1fJm39165dlm256wb3aXcXaDN3GHuu+Tn1/BmJDhCJ5bznNTb4BxX9edoDIH0DJ9iA/iqX4oscarDCMhH1/EkqI9jAwNo7qcAp57Rp6hHXjGPmcfm6cTlxDZ3hdf2BdQNh7PGAhgF/Zj/GY5yB4LaJUPY0lOCWkZD2UZ/mYZwm0DDkX9cXWNvhU9MKSuPXMele176N0wcRR+rZ8k+MbM7XNs1KBDzxIphZ4AoWGDVBA6Evi3kR6Wlx5U0hLJzoAwEFLNH/t4yRgutoKlvHA9rGEbbmETINaALAgBLcOg39w68ZVSqsdRL5bOhl1HVtq27NvVCpbWjuaO+EqiAVqSSQ1oC2KtQLs301Jc7r/j7W7B+5u03ad2n3FGr1FK3t3bu2dY+h26r/b/H2dUoskcuVMsjZlzCgsUGJYgHWiVv6bvpTfQ9NKBTyWgHgDivYeWXy+Rs3TddtdA9Odkra75R3yiHnhGFwhnXCzrS6NuiDEPv6Nk16Myf9Wq5DEOUN4gMBgUdhjUdwpwI5EPIOgCjBZ4TWdieyhn4VlBjJ6fNjD3g1dEYxO5MqmmwjE3L2Hl0UyYRikUQmVKplwIAM0j7gB5pGuFFIBRfra+IvVEY2dvuwh/zapuh4bwke8DqgTOO+UEBZuaBhOEsrpBW1CmwanIyq3AJsjKDustFCenFxymNceUt2abn2VktnRxfp/ALF58kX5ij+yxyGo+e6/3ePz0et+0wgEIW0uq9wbW/Bmu6ila0FBl5r/+nxQA8lleGQAyary4TSe+17/kzt+QOCuhAajC2hD0nl0EFC7exs9EwCkotcM447pR00icy1jd/jX3DOJu+A46ELflU9DPZkSOttf9YU9FDowpiLtEGwO8xoAykMAUK+9UOhNb3J5SydkISQ8w3hVR0R7N6o+ma//Ue3+gR8Nb8olsggYILeAAUsP93rSAs1HAmF/K8Ei27ZO2Kq2X7sPpBsIGcijHsdYIBwg0YIegAAgDMa2yd8mwfBruIUbUCuGWeYgrcLbMMYDwysT9OgZ9OQJ2fcrb4/tGkwvq4jt5y5ysCc4eJNLczz70+46v7Gd/1/v5SwseOgaee+TTjkkf/ZcMHa/t2re4rWc3YbBmr98012tZi/AFEEFjruQ14xSwX+oSBp2vCd9NbwqFX4wIpgBLdVzH/1RG/lmhD/iNCso85pRyzid63zjmUUnbdLO2CesXdLRmE4c4jBhNQSJ9BA+33Yo7D0bRn1aR/xbYP8YzC4oT+irj+5un2tk6dv1va0qhZI7EFpHLPzDpSV8RRygYCHigpWH+IA7IzY+17bcqJAYEAW5TI9V8+M8vpQVhdOkwMkWMOAjV/rYFDrKESDOLmXIAThAAYOnGEISUBLyBgEBBF0lDgJoTxtCb2Yw3DInzUU3tSbWN28/ULVOq0tIc72lmt/lmj3fsd+h84CvY4Crb4DG/qK1vTtWgnwDBXiMFVHkUn4hr/vLt5PiRagW4nEoEKEVVR2YF8Dzx+DBult4aGUaoI/JGVyJQSO+3Jytm40jkncyUgrcknf96F7eFpVl13WMae8kx97R8fXtgfV9YKkQG8C269jCACCYKPd9+GOgYMJZo3ENvanlrFMAqPvzS2Y+/unXqvNrmFa+gX1jo2+WHwuVvJl4OEAFgIDGWSkW0e0BvaowQeqJEophHFTUzMOwbHbqlm+Te3g4TDLYfcFtPR5cXp9QF1YOMsXzJcva9C7ftC/aTKAPe3Dmgxsvwm8+XIgjsA5pwAJzlRlD0d1Tfs3dEc3D0HEGH2tMb2iPuXshdT8zNM7AuvzbbuLtvbsXj+wd/3g/vX9e9f2F63r27MG7Fv33rVdhfpJOv/tqL95nr9H5akzwCzOnkM0gGHkGVaX7NsfobeGB+QEcQgOcsCviGenb2Bt6xUYn++VtPNDW5+k6na3Q5ftso6apxQ5FJ6JquuIakbr4cUa8QFvzx4KYA6FsEa8ansgXPZiDgZXdqRVtpoERM3KVUK51NDWcvuVK9oenjOffw5xEaWCtA4SbxXON9PAg2P7CA+0EzFDD0SUSSWVSimhMi9vX/ThM/F1zRHNvf71bX4Xa+OauoJY7QGc7lAuKhBokg+zz/RkbSj7hn/DpB8TIsYbwAwDkl/0PaNBnLHg5jHAJn3iYUBDJ5eisromT97+YpKicjr6dtZcPX0mo/aQZ2vBFsCjv3BNHxnMBa/Ts2f1wAGtrqI1Pfu2nA/59KjvpkxH0xhHBzUfuheNBmLzBiykh30v/QDfgz0XJQR6++Lx1nVr3YNiAzIPbPaKCDtyMaaibWv2Ide8oyvcw7bVd4eyByGjBF0J4l4H4+7T2Mto6jU9dCWkccibMxzCGUy/1uIUkfrg+bxYKlHK+Da2plautnefPQJtAGtGotilkRPSGASEbtKSPpHIUiVRyCEBAkGo+PKwsMSkopPJNeyoq/VrHAM80wtSa5hRDZyAhnY/To8Xp9uX3e1f0/FJ8r7gusGAuqGQtpteLDRuECBEtV0PYY7inNPGXl9Wry+zJ6n7jt/Vlu0jtzooKmlwOrCqOrfixLGzsY2HLXuLtAcKN4zs1x7cv5YgtK5j19ruovXNu9e377egPq/pPLd7T1wkJRFpptgD0W15o0W487vph8CjVEkBHvi9dGifjb5+YFy2WViafkR6UhU3qqrTKPeIY9qeTWEpQbU4bRozc3DLzVN+DcPBzH5GTbvxvuKwup5gVm9sfYdFaNzDZ/PAqkIipBQia/Mtjx7cUCiFMrUcbwEHaCuAjaEXb9DSfiDSLSFmAHsrBx1KStvumpK9p6IuLmP3jbtPLYLDHXO2byuvD69hBVQzI5vattW0hJc1GmQdiG/q86loD+ZOQFTtzRoJaBoNZo2GccZCIaUlI0CMxqFIznhQQ0dsz7gXq8+f1bGNWZ15cVfJftf2AyY9hTrd+Su7dn/SVbBqsEirv1C7Z692W5FOU9FW6l6Zj95vxY9uQtSv4RGI5llT/gLwgM8hsSL2WIa1rZORaVTy9pWOjIT6zvD67sDLLaY5hzcGREacvRzBHvHhTvmBE26ZCGy+wWgciazv25J7cFvLQHhda2IV2yo+7frjxxiSQfqmVvH4s8nJMfyFl5RaLiHjjpov4KAlRZhgz3LTkMgaMKRZh1PRDWHYPS8Qtw+M6hpZ5GTuOHH4JI8v/uLV3M5j59ZauvrkFGScLy+sY26/Vp16/rJuND7VDajhQjeCeA/Sr5C260FMdIrgvTBFA4eEAcWgH6sXVoLZQ4Hs9qS6shPFWTWHPblFehAX9O9fD+lO967P+gvWDhbpdBbodp1wVN4rK4p05Fw8KePN4xA/sEezThcNz3+E3g4ekIYC4SGhgUThvFk/0NHT3DUw7PjlaE5/QGOP55k6h10n33fwTqvhMBoHvbnXfZsxCgrgTIZzpiCt2ZS2J57ZnlzH8szJH7h3X6KSKVUSjAJxfowKogCABgN3YtLwD9YAArghiVBhCZEJBifErJHwkWR5uAPARM+k+fiBHJRc+ej+vUul53D+Dei8gpLIqftPF45dqrD09t1gYW7m4+WdmqbjF5RR0wz+PxAMWtOAP3skCGK2+l7rc9WMhp5g5iCDBTHeMFhpw4NlwQ1Dvk190azmPZXFBw5FVR2yb92v2757NUQHmPdAYL1rDXen9viVIOpBdVtxfqq/K85bgo4GTNLlbeht4UEnjA4B2yqz/myDv63nVp/wuBouGKsQdp/TwQsGCTs3R2XE1bT5MQd92xAeTPogOW8Y8LvUGHShKqWyllFYeJnFecVbwImKShFIG8QsVYLYEQp0Obi2ZNkQFFRZGiEJ5Fv0M0i1DEeOX3OF2BBnhfoGGRI4MKlKIqUkAikfboRPQZQyqRqv4WG0q5pdXOgbGbn18Atrz8DEg8XbazuiajqCmvqCWL3hrJ7Qy412haeja3rDGhEez7oum2NVRgUXQkHDmrqiG5lZlacPn4quPGLfWqg9ULQWAjlIeiAH6j645Wl7nvpe/V32hQDTLRBA0QGbphBa2nqnxg1qhLANpamQUAKB1WcbDLUMMy/Wh9a2+zX1hDK7PQ+UfOIRHnC6Kry+1481DBERxKzQH3FQgNm/KiE3u4GTe6WsoOQcTy6TyiVkCEAhkAppIEhqQ9QC2IaC6gE/crVaLJMLBVLF80WK2/9le9+XLxcooUgmEvNorgAVCLjpd4zxKpKYiRUSslMhUUsIclL0mio5vhmCU6XokUqVSiITCaRnSsrXm7kkFlem1reFX2tIruemX6n7nZ13el1fTD2+aRzQPOJ1kWucf96o6BKqVHNfXCtnZ+XRI8dD6w6ZtxVqdUIOtFen/+AG9p71iuunqM+bB64ddduqpRTMkxsRRsliqUBPeqfwEFLhi9QgALHEWmeTlYVzZmVHePO4D6cP8sG4s1W/NHaLrOr2bxrCYeM2fCc0qBVfEQ2qbdPalpx79apDaDBfjW6FHphBddH0LgIJjQrRHGCfiBIsA2oJX0Kl72Im5HUlbR/I2tXKF5LZaARYwJgAQGpZqgQK1E2iJrKJw3MoDjSK9HH6/gqlXC4HdeJLVHlFR7XN7QNSc/NOny+6Wm0RmWgSm5dQ2+1Z2w7OybusRz/vvMmuC15XWgEtP3ZHdEPDjvJjJ4551x8xAh3q3bsOYoSuA3rUvcunMtyctnzgaKojk/GgdZo7ahSdBgZNNc3Sd9FbwIMhLGkP5vAyKSWTG2/QcfENzWwa9Gsc9GL1BNVzfQtOGcXkhdQN4OBNMz6gZLRC9j4AEXZEJdt7T5FDROgLkUCkQCMjEkuBN9QPwrhmRSNu/CXZNjQBegN+CGdOSKXu4Ubn9Mfmjmbu6ZnlQVoMjoY0GqSsGR0lf3TbYWW5AL6wBPVU4iR3EA9sYUpLfyGEohb5PJ6Ar1AoxBLZ02evPBnBWsZmYVnbVxg7BO4vDq1rYzT1hzVM6OVeMM47Z7D9JCiQZ31HIKcvvqGm8Eru6aOuTQcNOwq02vLXd+41p2aqAk0/Yl05TKl4oPcy8sSILq/hUUOE9a7hwZAKm6iQ8oWbN2xM2nVwW2VnCMTNrO7Qxrbfu4fEXWEHM4f9MY0Yxxd3uSO+jd1Rjd322/cl7z/YMdjHk4gAHpAqBl0QP4slGhFDdAAQ4V7s9XhH8kdeh4JQRClUU8mFFfGFzYl7WjP21AvlFJhH0mOQSHOXaoKrierIwZbRT53pA9ADyCEgPG1JjxBbBBSiFJkQuo1CBG5JIlVOTd8u3H/I0M075Vp9RFVbYHmfYf4F09zjljuOmu8+GcHs8WODo2rJYlXsKc28dNCBXbCVmW10/UzMXEeJt+77Q80VSukCsLasO/TdAB7kF+4KBXZ9N/0A44ZWWy0Tjw8PbdDZUnCxNqq6B7LxMFZfaE3L7/2i4+u6AphDXqyR4NZJiEr92EORzcMZTd0r7T39QiPEoDoyKfYmAEaueHh9SjY3B6yCsQNpEuwh9oIoQZPHIUykTSBnnkL1VEQ19j5q6vnquZASSJUY6RF44A8tIYEHWoyXQ2USCUoGToBjoDf4+SolRnEoFM1TMlRZcgtAEa4R43etQFulIolQIpJK+OC/hC/4C7bRsSllDZnMEaO809a5xx23H//Ye9u26nbvhh6/loGw+pbs2ssHS5IvHA08n+M5UJwfa7bOTfuj9rqrqLaEf03BBW3ZyH3p1n03vT08UCPOGBJER4Vqm9ttr2wOre8FPMLrOsx3H3c/cSWsth0iUZ/mERzD5wwzmiciGvoyrzbp2rnenXlIyRQgKHyBRiJ5Mjk2yGqgZCK5FMJrdEUgUrVQ8PjOLZUcwjk52ivi7IHwEQ90cAV+FAyyYnD6iATd+0ivXFIdDNkU4sWWiopBFmu6t+fRrRuvvnqIEwcAM5EAR394ryg5vuUKVlpjUWkbo6ZEMqVURQkUKogloBMByRViCPxeSHkbnRwLqtus0w/bZZ5yzDlrEL3dqbA4jDniA7a9ri+yqSOJWZtTUVx89VxSmB/D0uD5xKBasKCQ4KTtJRhoQLCz4ArhnOz/Tnp7eKA6nKbDMzbR3+Lul1LZHNbUG8IaiK3l/pt7YExdZzi7P6B5KLADch0cAIWoOrK+J/NsmY2rj1Qgo6DdWIN0/uZUS+kpydPPKZkA8lLYB1yrpfLZu3c7qyrVYgFEWdAMNAXEBtDWR9NA0iSiNpoWwgIOkl4JgZlQLpg7t79I9uTp4qNHt0YGOLUVabGRrlYW9iZGHvZWxScO9bdz5558KRUsIkgigAolBgYQbC7o1PRDYfvwo2fzagjG4e4SuUCqFn618MLKLyQg+6BH5knX9NOe2cdX+iaGVncFccYCOVPBrdMe9R1RzPbCppb9xcUH8ndSEhGabjBkUDmyCgxiA15rD+H8++m9PzyJ3vGtRXMYurV40dBIzzdnZ3JtSxizO6S+w/9UqU5cenBdOz63bx/24w7Tz/MD2yZiGrpC8vaOT90VgykCoyUQUS+fMU/un53qp0QLOBsGeAWe5UqKx+NeOP/q+nXoxtgqPEY/a4SjUpJxghmkIQJPQTcbLRbNG7gu3K+Q3rt1/fnDB2CF8eu7UAd4JYBBDlolkAl5X8zcbrxWlrUtxmjD2sSQYPn8vFooAn8FkcKiXPGViNq2kxO/pydtV/3zBRwkAlMrkcGv4sHjL/Qs7ALT9nsmHfRIOWQQnhN0oS6S1RvIHvVnj0EsF9Y8EFHLziqvsbJ3VvHFGNtgI/APrRz5HAyJ/mHzTZl+J/0geEAIEuGmjdrBe/bHljOjm7qj6tv+l5l9XAUrtLEPuPRvHQnqwM8NBLBHPJi9kQ3tNkFREKth5AscLvA7L5T2lpdQvCc4UACqA4oAYZdY8sXoSMuFYkrAp8SY5MMh8twCIjTBVE+n9OUzvDUSdEMyDXOpmeR1QyCSL6tV6clJZKQAzsHxCNgPXg3jDnBxCqVoYYECmyOFIjp/+MBXd+5QkLwCfhgaUJOfC6Py28Jze9J3twyOL0K9EuQbjLEIDN1Xz19sNHHyi9vtl7DXNalwXeA2iEjDmsf9WOOh3MkQznBAU0dCPWeLrcurp7NiCNmgZyFhy5fgAYb/dHjwVHL2n0Zo7uEuEtmGlRv8MgvTKluT61s3JOXZ7S0JL++IacbXnSEPpR/tQNLjzR2KaOAaOHkopTKJWEiJhDer6jpOnqJ4s2oV2Hn8eAB5eqSgFuabz5x8PjmKY4jAEfQ88PFKiUwqVokEzVcuq169wpwYjyjIJ/mQSOOXOimiA/qlCg0Mwg/wIjaYpQHPr0VBlJGQAlxR6bEjX917qBCBkqGnA05eLlKx28uTdrOSsi49fkZB6C4HD4hjQmDnlJAPLAjUJlZebn6JgYm7tN0YKVUcnHbKxaHuSM6oX1NXbEOLT1zqvr2HxGKpVA49jHCIXYqMdeCt/1SBvx08mkZCT5fITHWN3bfl5JQ3hxw7ty44Nq68Nb5+OAQSbOYIPtTi4vwKjK1bJ6JrWk2cPaD7UXLJ3PXprpOnhZM3oP9KyEgaigvuLxZ/0dbWf76YWnhBKdGyYXCMKTBApVC8esUsLqbmFyEwIDwQX7FE9CgAFojTUIaqEEYgMkmrC1y/lHaA+YIfkBVcjG9gS0R5CfELL+ZwGw6ReFIoVN97Kr9UO3T/kQywRvcDlYC7VWCcAifyeWI+T7ZzxxFH9xCPiPjQA6fCmUP+zVNh7MkQFkQK3bHMjswTpRv1DCHsg34nQ/0HgvbA1cTlEIHTLH0/LcFDn/tmeYOW98F9IDjF7icUmm4x3OriHXf41Apzyz1l5WmXqpJr28Ka+oO5Ezgrum3Kr2kkmDkZwbqRVtVr6+JHLQqoL7/sKy4eq66jFnhQjUSBgwFQJ347n88bOHvucyaL4s+hEYD0kW4INEksfj452Vp6AZ2WDMVF+iC28DVnpBGERYQnPmabSCAkA+GvzyK+nxwHS4U1gPbwPczMxAtiSJ/gDAzHwcfJEVIc2QODB44CQYbIQITBIvYkgAg/VKoUUw/vfWVqZrXO1iWusTeAg7NKwNcyWobxSyNXalfobJ4XzSvUIux8NBNY2RI3r3+/j75Ne777OqheSr/5LxK4OTiZevhvL7nsGLNtrb1t8slTMSVXIln9+HSnFRLS4bDWqVDOZHjjdHZVv62tO/T9uzW1HcdPUnNg+nHgm0iI3EsmezrY33XsJPXkKcTZCpXmU4XY65Qyijc/Ul3dU3aNghBLjfkpeaCu4VMTF4FwIWSAFbBvMrmvpxcIlR5apccF4Aj0fYSHFNQFmZASLroZGVPkE78Q7sNpdG0qtRjiajq3lclFYsH87MOHspd0fgYsA07ghuQqiULBF1i6e8VXtfg1DoK1wE/PtU6ENnTmVnJWGpm3dDXL5Yt4d7rrLMOjWfxxeg/6B4klkOmlawnRG28W7LIkvoIeKBJERUR+qme562rj9pp6w21RU/Mvk86VQIoDVtifOxjYOhDEHfBt6gNXlFnX7eLk/ry/r+v0mfmRCYonBGygJ0M1KGaQy6vnPedOjldV49d0wZrBbnw/hohSAu5KwD11YryJSfEW8YkOseDIISxoppe5JRyq5TJPVxf0PSh1NG6oAOiS4VYqmRprwEE8sWCM01h9+pRK/HqGCRgi4sbFkAIBnKBJwI+SN1cLppUnwJAVbSA+VcJYA+rkL5wsLvY/WgKphQ8H5zL6NY9HN48kV3D0vPxik6MoFY9wRbilmSQ3goJEM//d9DV4oCzVQIjeoAuNDYgS2isUU3y+m5PzGnPXvKuszMrasMMHv1IIvDMzouu7IMQE1QlqGwzkDjGaB4KaB1OqWPZm5h3nTg2VV+AQjgwzTBLSoCJA9xaMDgwWn1Q9eYzv2YAAQUDkpugqJCL1vZnOU6cW790FWUM0geDRJwC7NExYl4ZPzDTlssefPyzI3ykTCTErBH9BYgTyABaBwOF2sVD58rmVzlrVPKSoOBqEA0fkMCExmG+cFgqbYsFke8sgdA4cfIIORZ74qWS8xVne7HNKOP/ls8d2mXkQvkIy7tuM8+UgQIitbnXPyLOzN6dEs6+7EV3IjWDHm3u+i76Zli5fAgUDKnonBh74YSn8+CawKJY8GhncsGpN1P6TeXWtWcUX6/t6F5QCXQ/nuBpuEBPn8PlCgNAyHtwCqUBvZlXdpWOHu86dkD79ErseVoEPDrC1YhE1/2rg3InpysugKWhjwPIvwYMkEn3BZA2dPUvxBeRJHREjfXTpnKXOSQpqJSSDsqqrl8+eOKqSitA8kkFVgJGM62AyJPzyS4atzVe3pyDKxqCbyAsET24JZlBKP3XEy589qT1+TPTkCc7IBa2WYu+BaHCwvU0694qS8URqmbaPf0IVO7y2K7BhKIg9Ecoejaxujzl6buP61RSfRJtfZxjuhfBoGMa176KlvGe5fH0LCnQiVBxUeXwXQiWRqHgChy16JiZmGVdqEq/UJRUcvHX/vlQlTirMz6hiRjP7PWp7gtpu4uxD9mg4pye7rulaSenz0SGImMUKEQiP+B3CHm9h4fpEx5kj1JOHSgX0T+gStDmiFBJwcypw0OPF50cAHqGQhGEgSQLPEhGlXsIGL4TUAt9wU8vEI/09TlYWd6cnpYvzSiFftsijQLhSafWly25m5tLnzykpH/CGy2l+SKeBSjS9G4NGmXi4qmK8rkbN52NnAluHoOH/A1RfWkotzIl5c0JKsd7RObu8IaW8Nbau37+2P7xtOqppIOr4BePNutTcC5Qg1EgT4RwW5Jfm+fvoPc059BVvXAy8QrxPVnAyAK3RkMoJHn/lbm5lvNkgMDbZZ+/R3BqWS1D4wty8RCp4LuRvZYRvu9bEYA+6sYdx3iV7NKhpILmm43hxxeUzF/GNJhXEXuiiccxSJgV30nX5/Ci3USWel0JWT/eGZe0BifD5/afOzLZ3QvxGejlhl3RHug/S8NBl6SgoCj7RlvAX5PzF0pPHoxgB3o4OnvZ2HvYOfh5ew139GJtIZSoZ+BjsDeBmiDSIbSSGDu4MSiZ+eJd54rD84T0IGlVSzf/RAIHMq0cPmy9fol69hEoA3o22TgVlNYfrOzPK2yJZ+HHA4Ib+9HK2/sYtqidPhIu8ZVZp5peIZvj76A3tIbS8RXaQJ28qOWSFcuiA/MUHU1Nmm7ZuWrvFLzTeIyHXace+rKs1hlb24sVF6GsLIoFXdFz6hfKwWm4AqyekqS+MOQRp0LaGgfyrXDMXxqJUIZDgnEnineEe6Fpvd7fJxXMk5KDbACxr4FFL5a9mZrogh713H9Km1z6GLBBLvOQP4IECNdMF7CHoHCmgQGCg1PgknNwJEQDSGAayDoSbgJhMAl1nfqjiykDFZYo/j+kPzRIogkhws7u97dJlTA+kYO1Um81tD1y4drKcuau8ObyuH9xPQMNAalWrkalNLzgtMgIPNoOE9KQeuJumFcv3/XZ6jxYKFLq1S23GXA8ftCCXPGp+obOyIszWzmD1OgNju8Dk3X4ZR5zSDq7yjdlZ3rBRz1guFEplAqFMsCCUaFs7pJZVxZTXx5ezYms6gVHUobLmpPPVzb3DwA/0VOCU2EyZWga5PeQYOAsA2SbRGjJNb8iUPY2NrFMn8GVaKYFnieD4MqukpcsE52AhSQzUA/cjTxYwhVkSMZEO8YBwHnF1iApdDcKDEblE8nxkoOnoAerVE3zvHKqBmwHLcJVgoa3s/ExHJyWVA4cAj7GF3ZlLFaVVTbvL6rcx8StlAeyRyPIWO/8wDxdXkZAPDQTLCAW7At1I6IHkxUhy0+8kDTx0U5cLuQhEqFDxeE5bt5qtWmW7erXnps1xPn6x8dkBifm+aUddU4+s9Y7Kv1ilu9UE/8MCPFsK9rBtYNAmODj91FlD/7C081WR5Zywuo6oxq7USlZYSraQLxHwpcAhEBmThgvJw39CRGJLLIMQxZL2utr+pjr6ZU+Q8/JRWNKcvz5/mXCbgIRGEk7RAAZIICTLBKdhfeQQmi2yD0BAncMRpu4L56YaqinhgkIsIBcQ0UAWJeK1Fp9SP32KibYc4TE0sTxz8crZsmu7r9ZE1/V4MYd9OWPhdR2Jx4rX6+nLpOCeJHAlXK9RF5qjP+T8D+j1kCj9u9xm5B3iHJHo1O7dTps3261b67JBy37dBhcT8wCv4ICw9ND0oo9NHA5fq9tiaArXKMGaY/egFoWivfuLGEEBbR3t5fVNJj4BuRevZVTUZJdd23WiuLtvWKJAA0MjgWxCWAW8wgYBDSyA5gjwAbn57EvywJFMGtV0uz+J3lQ1oCXlQBVCokdLSThK7viGt4PATyD6qr+36/xp2aMZjBvA1qGW4TR8iLOpe7c6Th2l5uahU8qkYvBbxuYWZy5fOVhasquyJqahG5yuG3MosLE3raL+U2Pj+roqChBSQp4rJToECoTtpFv5/fTtvocQMUPge2QSCJ9EXzxilZSk+vu7Gxnqr16nu9EwMDLZ3Dt054liLW1dnOJNOiuYaPwf25TSK+dO7tuerRYLF3iLF2tqtri52oWHxWbnBYVHP372UjMJBMSNjzXxWnTJS30Z7k0Og1TQw0OVwAe0Cva9hge51OD4rQRH3ixwKr0CRDJ/ciOiW3TNGjUDeMAJvnrFPHn8VgsLQjuw8EShMJ/FM2Tizxvr+s+cVC8ugNILeHy5XO7g4nrywvmSujrf/MKouk5f5pA3vh7bn9jAjT1yTEtX98XnD6AqlZQvV4gxc4D74+1IhPO99C0PFF4T7oc2AP/ko4YisZLPgwhKLRSZGZpGbUv2j8vwDIvT0dqMb4uRe0GBC8AXyqGX4bxcGdhx6H5zYhFPLhubmr5w8fLjr55iTAjno8TINeT3m6TZj3JcdqHfde5bELn+dT30Gilo+iDVk8lv9/Y3nCvBAXKwHyr0EJiQAQ/Qk4TCgdLioUvnKQkfn/qKlW2c9szM7NMXLh28WO6UsTu6tpPBGfHCT5H1RTZ05tW1eG9L2LRJh113jZIsAsoq6HPQGrqH4Lgtzce30zfT0m8ldGKg2EAyOUbDSqW9mXl0VJxvTIa2iSOEj/L5eWzGEkJkOASfoGC3A44gllbhnBjobvS0JqFQCHVq4PkrE7nn17SQFFApjAjQYCh6mtg3+gYpcKigt9ACFCZoGICnpERi7vFjz3o7wZpLpWL+K77Rxq2lJ05eunRp/9ky57SCRNYAgzME8Pgyu8KuNK33DD5UciE/L9t683rnrZuunDwGYTA+hYWbohUnK99N3wnPm7KjRQlEtlRSIc/V3MzTxSskdW9gUoHhRj3yJY0l70p6O96aOEPYoj3/sjOg61mq7a9OcFvSjb4Bj2ZLibMS0ahCCC4SQzMALziIUSZ0LIWKf/duT/EZ+cwNSiZSKiS9nR17srOO56Q1XSxJytzpkrZ7W2OPH3vIq3kknNkXsufohk0GumvXOGzUdl6zykNrrenaTz6/MQk1EvmocHD5e+lP1R6aYB1qlIn4OdGRzhYOAUn7fOMLrUytxc+fgK4ADEpQM7RadJNhldZhHDZ+E6Rv+O2/KsGdl7RcQzSvoOkABXQozI2kGIuTrg0HSaZEZv8IhHc7OzpLz+BDKRF/9vkTJztre0P9q7tz2WdPbYtP02PEJrTg/47izR4Nr25L3n3I3dr+q8mJCwX5O/39ey9eEDya4b38Em8BjhXy/uVY7jvoT4KHpiWIwATLRxrrt67dGJJ8wDdxr4mp1fyLJxAlyyAigzYSeOjWQ5iPVyzRm+s/Gi3zRraWCTrW0hGAkMCCIT+YM1AdFWgTvoYu4neVX+28Co5nkXxVQiLmL4DleMRhcU6djohJ2+wfG9XQG8gd82EPRVe2hMWlRrp74kC7RIRuDIpaqlJK6C6CTgDzincEDxDIVwYeBcqrV0ardNwDUxgJu61s3cbHRjDpgfAXM6/XnZPGA3wWvYLaRQiP/Vi0zBvZoonep5mDT46AfsMKvZ8UuUoOWY5ktIXz+MaEWjCHuREOwakokfBecwvzTGl0Uu46n+jE1jF/Zn8oszeprF5P37i+5DyOXEB0TsJFknqQOyAocLt3Cw+abKhdSfGFIS4+JkYOUfG5oeFJ5RU1AA+5GQlFSKF/aZtGEwDz5uaPRCCOb0qEZhVYhyWiQnemJXxwlBwNnYKCLEckUkpFRLJ4HoZhMvlwE7vs9Hn/+MyN4SmM6rbQxr7k6pbowsNbdQ3Fz58DNhBP0/elp6zQ/oyU78MG6O3gAYIaMbWWyO6PTW9erRMbkRgRkejm6Qd+culhDLkp3TDNRaTFpM00/Zi+h4hJs7pES8LSMPw1bjUHEB560AHjUjW6KdiFh5RU6fHilPQ826jEgGOl4ZXc5Lr25KNn1+jolRWfVwsFCiW+H6FxwyAbzEvJBlz9hky+ld4SHppRgr6CLzLfoO1j65Calr1Jb6tKKlKIIRVAvrEZBKE3B1GWWfmxFYiGhy5I2CZ67dsIeAWDQYRLNEazGwlHscSKhXmxs5t/RNbOX5jbpdWyEi5WZZy6uGGjbnpsnEoghNbCtW/CAwQVKnDzj9Pbw4OTVdAuUwp589WrpmvXbQuPtLOyfnTzOjhA5Bghwb6GAyfgb8lnG/FSkjxpqvljveYvR6j9fwCP5ucPi0aU0OcwcMCepzmTmBBYSJX8OUEwI9LQyjHpyJmC6sawHYXr9Y22p6bgQKqczBOGVAQ/BvFmnei4cO2P0Q8xbjTHkKMqFhYctuh5bjV23LTJSW8zxedDgANnwAlSfOcde9yyFICWUfkRjdsSPBpJvf6lZfdmWUIQVokOvQkPPpDFASceD5x/hJ1ztKt3TFD0ps0GWw2Nhwb7lZAIysg7ixD4QYD29QoBHpxqQm98L701PGh5cTK5Cp87Liw2nr/otkXX6rNP3HU3d1fVUCI4QklU5D+vxjmXGniW8fhRvQ4tpbeBh14hizdVB+GB7i8XSudeOOhudFm33vLDT0LtXe+NTmFEIRGpZWKFHJ8f0hXQngqr0NwZ4jeiPVjj99FbwwM1AneQWGOWI5W8+vwLZxPDx+ND+aGhlqvXUAIBsACnkHwYxxLRCMAuQnj1Gybur0+0sFAmmh8kzS+95439S5vYw97cTWSskCkhfpPKxa+e35u20Vmnev4MXywWyimJUsoXykT4sjx6Yjqdgj/ABmrSIAR/JEKA8ka9f0hvDw/eACJrsJ4yYn9xEBfyNcUXjyxXr7py4rBctKDET60hNhBTYhROaBmVHxEeII2g6R8iGrL45h78xT8ix2UTvXQCdFBMVCkJJZ8PcLEI93bG+V9SaO8SACQqwzwPV8m1bxzSFNiEQir8Lnp7eOgbYCgixwnQMgkZIccnQ/5WpqZrP1bOP1GAS4QTZZDA4kR1Mb6ZgNcsKxC9+aOQ5sbwQ5fl36U9sKDl9gYB27QxQC+CoSuIXKVQieef3xq10P7s9viABP+bezyK04QQFDgfH0CQMBUuxyvwLhrCCiG40iD33fT2oQFUiPfB25OQEYIXkuuIhJ+PDdlpf5IV7kv/RxFKsRSCb0qknP3imUwgwj3IN2EVf5FprBB3/SmkOf8bRDd7udC76LXlQ99Cr8+hC0oW6yesESjIjqUTNPtgjYYOGJFLKP6rMDtz5y3aSokATRVqjOZ84loQHtzAsxEeOvzDHbgConunY25AUDWwSXoW3pLOcvCBGoAGzmhhlmGmZ7n6d1+M9WNYCaeKKf7kF67rTaY7+ig5PmzEKsilaPrU+JANagAWcYW0BVZosdJE+isW7A1qzL1RBBox4IxOqQpMPlZCF7wS64dd2HgwN6R+UhWYWfqhG9mGBWyQl3LhIiJKBACFBVEwRDWkMhy7xNPhD5iHg7ACS5mcEswN1l5zWL9y7s512CmFuugaNATrWNWbhPW8Jqgci2brO+jPggc2ZSq1hJ4oKxRTCwLxxLTHp6v8NmycH5qiHvHaT9Sn6jJO+efl+sZQAgzqMJaBfoNSxxEguFaCj1mwTqgNYlCIKaCX0Zv4BycSLEhn1Ay5AoHRQKOK7Ej5gjk4QyZVLfAWMREWQ8gLpwBb+BAXVvEGcBUWZBvHAJfqXuoNCqVaBjkb7lDhY1HSkeBX85QWmwtWi+zFdbmUmn1qt3ZFdrA/JRSCgUe/g22DS/6IxN+K3hoe0lIVcSoYIeBO+JFKpA++jDKwY/xOL/4Tm4SPLbfreBVsibzitr/K+WhtwOlEfR9qVoaxjUwCekb+P3456fiIkpg8KoJECtpGDxLT8iSyID0MDCPCpsA5csT04/lwskIknXtGiRZnHz54cm9m/sVjmXAex5KVchwYRoVbMjfECtPw0LXiLUl4CTeAtBFdBtwJbgQSpi+BQ6ivCBKqHbkrPpAE5mX8RB83W+01slfP8T0vDbtA7xIboLeGh+5xpJfhNvYYmYxa5Hus2pyi49Tgf7TJ8wTb6yjb40iT45Fm53Nsp/NXbY4UGicf9MzMdI5pOHpFcneWmldQPJmaJ8U3OcRkKJXuqTKcXAEyRTkh0V4YbwThB+BBnlritCspfoVrQSWbLzt2yEprw5miotMHivbuyN64+pOvbt2khHx8bxTwe/1W/lIhC4xRcJNMRCH3EIsEctACHFfG3dhINJl09kbg0dSgkPFnOxoq7Ddrjbdy4HKoCqelKuF8rBhv8O7oreGBgp4GVpaaLXg+23CsxPO3m+sYB5iuxSz7ixzH81yXSy2Ol9pdrza7XKxzKqlwOlfhXlzhXVzmdeq0Q0GO7ra0rWGl2w583jhKfSmhZimKR1GLKjCAchGfJOS0WSIDQkQBZJRCDPkuhEfQveVySrw4/2DIz3ozp+wyfrVZIldL5XL+ouTVK08zi+4GpnSOJxNIlAIIUlBdpGrUFPQkUCkqDEoSVjSjgtDDeDzBkydKiVCmkIrIG1MakFBNYYGET+ghgJ596rBpfVpYACXho8clB0lQChf8qMaNJpQY/KnUUrFELYKQWhJp4pim5VHterDF5Wq7Y02rU1Wz/dU2h3KWzWWO0xW2SxnTsbzJoYJpd5XpdIXrUdHkcaHW6ywYvRKXXUWm8Skb/RO2+ITruzhoGyr5Ag080BtReGiEQMAELjGlgPh1TrEws32b3c5wvfxww+fTXEqI/2sV2DMSyqOgrTdtunLidF5y4rOZcUr2ipLOg2xB7pgkYnVY5OAuCPAYEINUX4oYW60vHTq29CYCwgKdQi7DK1AzkAmZ8MUT583aDjrrKOG8SsTHWQMaAiRlJN7RbL8Tekt44N5kohbpV9Bn+dTiLLW4GLBm616j2EbP02yXy82O11qdKtpdqtj2ZR3uNS1O5S1OlRz7qjanug7X2iabK22uVc3OVxEzh5J297JW90sN7sVVvidKQnblByYoePiNA2wtievApmFXgF2wmz9PCR9ebzvmYfJ/70te0V7iODeyvass6OQuV0o5C84JDaAS0kN+crCPavar+0Ocy/vCgy1+f5NTRs09wVAYIn7yOQOQNdhRkD++1gs6xVO37S0rCd2Z4xhKfcmn5pRofhcgdAY3Q1EiREsh4KlnX1quXWm65lPliyfEwwGTuCCE65ry7ujt4QFuwA7LwdhIThbs9DbSd/5kVcgnW2t9jrDdLzQ7l9HwoPa4VnEcrgI2rU417c71LQ5VHLtrgBDb/hrZWdFqd7XT9hqUFscypldp+Ad21N15NY/ECaigSpAh+dqbgFIsUKInA3WHI+1+0Xbea24qe2EqfmE87GjC3z3qDrjZkXThWIJSPidVC9FJyUT58VGix7fHm89cZ2Wxj3qOlGz3/vSjHJeA642d1PxLSvKKUi5Qaj6OS4KzEVATl1r3mcaWOuWddsraaRqZbxWXbRWVaOgXvdU73SlGeZ9H8aFjfOGso+1rqKd69Qx8G8k/yaA8iERj2Yhw3in9EOMGzIAEFSKRl5mp3+YtCQYW5YE7mJ5nmLYXW12qWXZX25yruY6gMZWtzrXNjhVc18pmUCAnQOVqs2NZi3MV17mKY3+506Wi0/5qhx0gWtbsf7WMcSjbPoKaE2EEoIAASQ7pHiWfo8T3b/aedtJ7j1NiKbmdJJ6OF4ykyKZThbf8Fm+4HU/7r89HYksL7YXP+sB94WsUYkWMp/etbvb5IsaXAyn1RboC9tEdOltSPnaKX+Ho9Otf+Or+uqEknRJcV/AfQxTeXngl5ROPE5sSzm/JOrYhqcrhMMuztMblXJNnWaVHyWXvo+EfOTXvKHV4f73LuvUUvnIlBC+EOo2yID2JBIakU71jeuvQAIwr2AQ0b9jvBBd37PJfsznsfePjmzJACQgkdeByQDnAmrXYV7c4VLS6IDwtLrAChu4qINdsX97pVsO2u9TudK3VoYzrWt7ofvGS6+FMg5DdATHUPB+8DJYXvK7K81Gun1Uet3k5Fc274SOd8bq64x8yLN/rPGCquJ4ouR4kvuV/IPa/vhrPS/L7jJJ9QQE8QqW7vtHdHmag1c+/HIz4nO2h5h7I+mjV7vf9cz/w3GOqM9+5b6wmJt7nl9mRBknOW7cb2+3T9T6jF3l0TVjppszi9Tlsm5IOp0quQ12Lc02Dy8Uaj+PFDlmBv9tyMDCi99pV8ct5tLlEFCgRXIBf1ORS75beVnugj2D+gfEMecsJ5xw/fRGuY1OkE8V0OMeyr+A61Xd5VDfbXux0rOXaVLbbV7c7QqRQyXWElYp2h/Iuh6oOhxqwdVyXasCM7XKV7Qjhw+UzWwoO6qflGPjFbLZ9xpzMMA8NWmXTvHcvf+rswq0E3h0v3m0bwYyD5FbQRLFb8sb/ma33M3HHbvnNyOcjzuezf11/3EX0clglfEUt8HwNt07UleyN0Wm9sFEwGkT17M9fv67gQ0beR+6sVBfxUBJ/NGxhIvzxUHRxllak9t9nbF6Vs0n/qKn/kY3RZ3WyL+kWQVeDAIfjWNHkdJXlcZntefKwfnjQx5sdPl0X7s4AiwuCoLMhUgAbOpZ4x9btB8AjhwSbftiOebtaoV5cSLT3Tv3MtcH5OMupgm1X2eJ4pdXhCgDTZV/faVcDKwAGtLbNobLdtrzbvqbLHqK7GlAppvM1pnMZhAlN9qUn1+Uc040vMHEM/2R1kSkjbaVb6grvlFVmJeFmsqkM+T0f/l2zxRlr3nXPhc5trFSblI8/zNu4gprO5U36D5zfNMMJO7rDjZI+6SgrvbonY5vdR4/7suqO/0Y8Hajq2Je3Zn3+h16pvzN+UZ8mmwwVjfiWpv43yY3ohZEY2Xjuy7asfT6fBX78D+lrdIq03c8ZpTBdTrc6X+E6loMphnAUErha96LzgameG3QbLlTKBJj2QeRC4rmlOF1T3iW9fWiASQ/aWSl+jxWzaLVQMFHHifrQtMnrUIt7eYtjNXS9NpfyZruqNvu6DtvadvsaaGebawWYNa4d6lObHaB4CWwdOCSW07UG+wsXDIpO6KYdMfJON/jZ89r8s3ZuOb+3L3w/suCDkPSP9O6eTROPBvBvmUseOc3esJPdYFCDO/PXbcz6ZOPVbYbi4UQ4ejLxHw+nGVC8KX/9Tyt2Bzccs7524Dcvpix5Y75Ud2nWp5szfmexb6sJwCm6EaCYTDgS9E+Nu3TEY8m8CYZsJlB8M1A6HTt1wTNh4z/mbtZr9NvDdS5pt73aYneZ7XCB63axxHq7/8e6DGNTSgCJF7Sc2BH0wwQUjZ17x/T28ABPGmdIowXJgVj91TOfX62/6pJT73a6yflyuxt4F/QxoCIdDgBPNRdcjvM1jkM5qFGXSy1G3u4VkBK1uVc3u5WB2p0xSjhp6R+79hfCgSRRX/xAbtiOD7bu/Fe/A79NKFrhX7Rls3woWnrPfv62Jf+evWzGST4Ye8LMfM9aq4TVv1b07pWMBNxhWd1qydwZYpDmtKoo6LOWc5ufjzvzbjmLxmLKIxxy1m9O+Oj9ZxU5/PEA4W1PsG+FTj9L0Pk7ad9O+R1f0V1T/i0T4W3b+XFX5c2M21eSDlvbtrgd6Xa61uZwqQ2U2/FSpedJnw/1qC+/ooQS/MgLbeOJNOhC/75belvjhixAjwFsNGO5kD8qBNT8C69P15/2iDvnnHfWfFetzTnAowX0w+EK+liMBa5CabG9ButtbuWNDudZrmWNLmVVVsV1jkeZ/jsy164JW/P/jF5yXrzuLZj2U/bnZa/9fcFHPvveT8z/VUDOp1qy4TjxjC3/vrXgrpXkjo1yPFpUc2r7GoOM1dr3zmVLxiJejvqc32nOMPxXzgGfA8E/nx/3BTMomYgZOOaUpv2byI//8QU7QTIVDBgIbjrKRlL223+YsfqTL8/tEA56y++ZSu+Yi+9aSx468G66Cyajq5PNOIydzfZnWmxLIH5hO1dfsD4SsdKyYncRfjZDhh8BBjsP0T/KYLmzEjV6h/RD4KFxwQLBG8RxsoVtvq6u69d5fabjv8LY79/MKxyPtrheaHEqBvvQ7HQJPD8kQ5DrcO2uchyK65wLzltknDPeWed+ts7jSI1vdvqGD1T9Bx6wPHm3/QQPHYV3HRXT4aKWvJQV6/M/9i76KCxnxRZxD8BjL7hjKXlgI5oxl08HKdpOZKxcv2OVxVkXO/Fo2vyNxIJ4A2pxojBE60lXKu96kPCG74suRqzeeyd8PpH35kumAiX3bET3TWR3XOVDWTuNPtyzzvKCowM1GSu7ZSa9Yym/Z7N4z4T3wEo44yYZzDhq6tzsdrLN6SKwzbavafS+mqXrvcsnmBJB6I9PR8gQNo4+0aEsSuRHhwfvDn/ADgYHYIMhs1tQCJ4vfn5H9ewFNSdLswrO3BBQ6bK3welgi/spluuZJqdSlktlIyiQ06VG18IK/yB2fGz+OjdW8L7akKQjLrp3KnxENxjz1x3AcPFB+vfthNft5FNhcy3bt+tvzPnQI/3DrfyOOOktB/ldR/FdK/EDU9lNX1XP0YxVa3I/sCzUtZ7rLNy97WNKcIMSP6UEMztiNn45GMa/6c+b9Hk16CKZDpBc9xbdsJfdtRbeMZNc91QP7crR/njnRzbbP90oGUiQ3rGX3bGVzlgL7pnz7pkv3LFRTKelrV3d6Laf43wBbDLXqabJvSRfPyDGyBo/YiTH9y+h0JGbBhF0ysQVvTv6M+BBtQb/iE/JlDI+Jhw4h18iffjK7X29407Je7eGBf8fo4Nb42q8jlc7n651Ot3iffyaa8S1WKPFtvx80w0nXCwSt/zTY04kJJjzd8yh5wo/t+DftxLctZTcsxTddhTfCOd37Yn/aGP6Ki3FSIrouq38jgOYIP4dY9ktP6r/cObqtXvXeO7a4DJwKmekoZCSv8DPgcoXKeGNAxlad9t958Z8xLc9hLetwbXIH9oANqIZS4gs1AMH8jZs2PEb56z39ST9GdJ7ntI7jgCP+KGF4IHlwh0r4VREpv6vL7lE1rocbHI+3+Bw9qr93j3mjHBDM/niPBp4Ag+I4HXYRo+h/rjwaLoKwqOBiSYF+YSIRCKRLfL2RCe6rtnot0GfvfeU70q96HXW5X67iq3jq73jC8zWiCeSbnHMTiX+/AHTjz8ZIr8fILprL75vKX9kLbxrzrtjLrpvDfBIZ6zA2YjHgpszvFN0/llxM1J011pw20J8z44/Yy27GUYNnctaq7X9M7ekjxwL3Dwp0XO1hIfP68DgSGcp0Z3ifLvmE6aS6XDpbTfRjJXonpnogTnoh+Q6Q9ZxOO1Drb0fhO340PYpM2Hxhpvwtj3oJf+ukeAhKJDjswG3FIv3mGnehfrODX4Ha733x31s57NSJ4PhK+bNSfC7bgQUlAb8/EWSHqAfpD1AwAnRalAfeogM13GEF9IiiWz+ZePFs5R4gRItPL8+7bR2Y/Bak8APtJI2rKOGihUz2wT3nOduOgruufLu2i3cMgVUoF8rHliL71qAa1m8ZSq/byWZMRXM6Etvu1CTe5JM3hPc9BY+RMUS37OR3LeXXQ9VtB9MX70mfYVdzG/tCx0jA/UtjhTsAXjE4BHB5IgWqNmZ8M3/XJ6+aX4wSHLXC/Ry8Z4RwCOaCP7q0p792p5Fv47d9YHrdGnowrSP4LaD8pEdmE3hfTPeXZuF667CyUDJUNbA3ti9ltaX/OLdfrlGeus2foSFUkjB6ZBWawq2Hvstrr5T+qHwwA95VIbw0J0IzRwlUuMX8cWCWYgXlNI5pXweP4QjkT+euDtYXpPlZMLZ5yueSFgYA/9vv3jXjD9jIfvcDnyyAoR+3Vx+FxECNRLcNAa0pA8tBbfs+KOMfP/3Xt6wnbtvJvvCFswUhAayaV9h6/aUNR8mfbi1yr/wWvBe30/NBI++lIoWkRnoKS9e7XLzOewYmKajdTx8LX86lnfPZW7GSPzQSjwaydwWmf+B//5fpBR+6Hs2ZJPwerh4xpF/2wj6hPy+BawIZ6wWpmwlNwKkk/FtBx2jN324zcQU39SR4YA6fl0Mnx0sgUQWxKDQW++M3g4ewgz2FPrpIWyCHDQDzMTMERYBLgwZZHL83IKC/J8F+Fq9XCp8MOaw6u+OhHwiH8sQTwZJbrpL7jvywZrdMpfNWMlvW8pmLIR3TcX3zaV3LUS3TSUYRFmBaVqYsl+8ZwMxFWAjuWOpmHFU3gj6qjYm5OP/nrDq06qw9Mt+edlmQdSiSMFbkPKFwuezNmu1E01cSr3ziozcUgx/G23+3rMhT9GMN/+6GzW9O/szg6x/Djj8q+xdv/M+7q29OB4pvesinDFR3LOCCFvxwBzUSHQP7KGDaMbp5XBQnPm/UZ9D3IHvYSMA2GRoOjQTDRoRwN8MPPj0ikyXIMoDPQjnHZBsSEH+P1OEj+g6/SgNuAY4weBIKNHs3oSooPVr49d/PHkomhrbJZj0kjy0Q224Z6qAkPe+Me++Mf8+mjjJPWvBjInkgYXkDiY6vFvm0oe2yhlL1W0n8bjPkxafgHXvte515HUdzrRYedDFw/+TzelegS9v36MksoxtcV31TdSXL/PMvfaY2STp/rI+xzR883sL3fGS/tS56j0571sV/Srx4L9l7XnfuyTYgD8RJbztKn8IEaOF/J6t4I7x4m0DiBF49yznwfDeC0lz/WXJjhhKiW9jQ7vweSvphTjEhULQWDZs8zulH2DcCDzIHGKjgQqlT0CieYQmAF50X4ITMZ6RqRVCSiWFnM7pg01Rn2yFjPKM/Rb5ULZw0k90x0Fy31xwxxBN/yPLBfDhEF9B8HbXWHIfijngJ7xvMTdtLL1hJRpxGi3Rj9z0XmuB/dTZ2AX2sXvnD6Trb403tKXmpTd7hw/s3C589ZQ8NhUE6ugf8XapSXXo3efdtzsodtU/vLi6a/uGVfm/dyv6ZdyhX6Xk/95h+lQ4hIjiO05wU8BGfBvsLcYI/Admi/dN+Z8bv7zuXJK32Xnzv6kVsxAUYIuwUSAMHDZQEHho4bxzemt4CNHhI4b8xJSRQseUy+W1ppN3LfAcgFBKCXm5PgFBH2/J+8h1x+/M83VWyroKhONB0oeui3cthY9socOC90YLc99MdMdA+sBE8tCMd9+U98hqfsZKctOzMu9fkgzfKwn8zP/n/yPlw/W5vzXL/L1txEdG2U5BlFCJ0xDkEOXzFQoBJeG3lpw/Ge0tGTw035CX9vGn8T9bG/uzD3d9ZlTwe+89vwgs+CVj+8dbFprj5bfB7lnJHlqCfZM+MBPeM+bf2wp6LHhoLHxgsHjLdrLBx2nL/1JIn+C8OGgYgQdaBw2DQpr5uuHvkN4eHpoJwsf3WFvYSR+lwcMJixhCQJYtoeZeuK/YkPgbq90fOWZ/ppWu/bO75T68MX8++Jg7Nou3zRVf2ElnjCV3tsofmIBKLdw0wmj7oQMk83fqDFi7Puzdrzu037Etw/egocGuFUY7V1qFfaoTaWGp5gtx/rCCD0VF4f8V2HDmxC6G9WxHPjPdPOn3KxL+dV3sz343np6X84Hu7hUm+Z8a1IfaU5PbeNNmEDqCLZU+sODPGIrum0g+hxDcGLRZfM+If8uOdzOeWqiVih9AXIotoofa3pQA/NHlndIPgof0HXr1WwtN31iHZkjVcqlCqBDOJ3m4Bn7w2QFj8+R1v0vf+PP0jf/7eW2kYNhPfMdFcMcW4mzJfVPwQ4ANSI1/01pyw+llt8UTtkXvvk+HDqwbO6nTfWj1izY/2ViKrC9r+JRv64mICId1krkvMLAn8+Xgdiq5qPbUoRSnzYqxc1km/5S45p8TPvsnbqZt327Hru2O18I31iVupiaz+BP2oDQkKwJzCg7PAtYBKozyIZ68bSee8Zy9GTT/5QGKui9XL5AHhcSeL7kcIhHaQkB5l/RnaQ+9RS+/vvtrRLskmQq/4itRiiVS/sOJQdcVv5o4macePCPtKJg86pNn9V9makwlt1wXbkBaaiOesRffdJLd9h6vWNdzekXX8U96D60cP647tFd74tjmkZMbblZsEt50E991Xpx2kN4NX7i93dv6H/jPx0BvIIiEwBe9toTfdvV0lMXHC32FRV7/SI0WUaM7R05vHTihwyn6rPfExhtlFpLRYMl1b4ghpbe8JTd8ZLcCpTcZshv+ytuBkklv6XU/0U0f3m2/+QdRd6+nq6nbSoqnUC1qEHoNBg0PjdC7pB/me94kjR+iN5CWgSJFpdK8vEgTxNjoSMULbhs+8Vr1d/LJHOlEkHg6UHqHca9ZD6LYudtmC7ftx6v0JSMJ4u70gQPWQ4fNRw6bjx6yGjtsOXjQqO+ALnffGt6gj/CWi/COpeiWheyBx9ObQewqr/kXXRQlIIKjB9Rlz2525YdrL4xEya/7CCc9ZDe9+SNO3GP/1nt2RffJVYNnt56N/oWwO102kCcf3E4N71b176IGC9Q9ewScHHVPITWxU3Aj8ssp38d3Yp99dZKiUDvxvRH8z27xPefXLUUJ0DHru6Q/Ex7k6evlDdLwDQQYKXA6CxyHxuFXeaSDdWXuWv8wWm4vvePLu20zd9tU+sBp8bbl4l2LeUhFx0JOhv88YdN/ydD9x+POay77by0PsqyOsq7eZlqVZNi+1+VFR+rCeMzizWD+HcbTyYCv7qY9mDnImxuk1AsquYAe55dK+JTki+c3i+dvRQsg65yxnr1uKrnrILzlILrhKL3pKxgNecxiZFv9t/jN/1em0f/Zbvr7HYarUzZ8nK69ctuq38Wvfz9w3f/OC/23L25lzz8/R6mHKPWcVEK/NQ/28w3jhn9fb/s7oreGBzoIKZqN12Xpl/aWtMOEQl5LwPMBHWwCOaCWiVXzzxw2/iLd4//wxkMFt+2ljyz4d00gpeffAa/jILnuqZzeduuCd8aWf0la9VnKCr28z+zSPzCP+2Bz3Geb4jZsidqsFaT/24GqbMmzKkrSTqkmKeUDipqj1CKlAl9fwdQE3IPylXih64vbOc9nQp/fdJ2/4/jqps3cLRvxfWfBjMPiDXvBdS/lzbixUqdUk38JWfmbFG27+LVucWsdotdZx2y23h8WKn4ypJJOU9RjSvmCJA/4CB+1hDSPbqnGstENfqf0juB5YwvYhQiaDHvhmeTRHQnb4BiBBwNThVwt4cUG2Jqteu/FRP787ZhXM76v7jFe3mXM32Es3AyenQrn38hYHN4r6L8yffZCccD27fqRO/RjmKklHQXXJi92UHfmqEUhxX9OKZ9R1HO1chEiac2MdTKiQXozaCxPKpuhVN3ihVLBk33P76Q8uRP75Y2wF3eiX92LfnE37MXtqOcTiS9HChbGrglGhp6ybyvHZNR1OfU5Rb2gqAUlfm9FJcQv5Snl+F874dxF4kxJYP03B88fJZrJbxQNwRrRIbVSpZAIBbNfMqtPUcoZSjog43PlIq5C1KwSYlGL2inRACWepET3KeEcJRBTQjW6FTAtAAFt/GUAvYxSw4aEjGLQ6omwLBPEB+SaWYr6ingO0LBblHqKUk5QinFSYP0OpXhEyV9SciFWC/WB6aKtF8iezgfoar/WGKSlHd+877uidw/PN+gPWkS3BfIgHG5QK4QqxQI4DEr9kgjxOUU9xaJ+Rqlf4E7VPKXmYf9Vi6EL0/NvCeGIESlk47uJPgEIVAldoBq/8K5UCxSQuqr4SpUI96ildCHjuliWJP4XEfqfTn9peOgW0r3v600Fy0fMHHRXjIYpwIkgQUHYCptQBOBIloEhQ0fEMn4fFt9JGohwYjBgIFmOvsDJQyH/GxAxUBo+v87qj0d/BXigzdAZlxu/RAgPWA6yH1wuCghOA98rxQKb9DTH16gQYL5FGd+KIMwnCRh5MgW3BkUhe2DzbwsYmn40eGjTBLJWQQ4JfVpJHh8RzL5ZiDXTXKahZVG+rvBPIVqBlswX8oObpGjO+Bujv7jvIRKkgfkWaWr+0x1SUERL668LHEcgYe1NWq7tmxUuE0HiW2j5QoLKN6r9m6O/AjzfTvSXzWj6upi+VejfCcO/b/rLwwOSXy5fJ/LyJhINDwEMrBv4gze17RvlPxb9mPAsC30p1aULwvP1gvv/E56/DH0nPMsSfxMbKN/ABgruXzr5PxJR1P8P1WN9Iup+DE8AAAAASUVORK5CYII="

/***/ }),

/***/ 126:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/xyj.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 127:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/zhy.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 128:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/zbl.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 129:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/wsh.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 130:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/sjj.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 131:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/cyh.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 132:
/*!************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/cn.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 133:
/*!*************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/xjl.png ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 142:
/*!**************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/logo.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 143:
/*!******************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/question.png ***!
  \******************************************************************************************/
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

/***/ 152:
/*!****************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/bwlogo.png ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/personcenter_icon/bwlogo.png";

/***/ }),

/***/ 16:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/begin.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 161:
/*!****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/xiangxian/up.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADw0lEQVR4nO3Yu20bQRSGUSpzogqcMGNkEDu3BRXjUKW4EFfgLlSDKnBqwJATC5ANPTjD3Z3XOcCfD0RdkPgOBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYWErpPqV0X/sd0JxlWe5SSr9TSr+XZbmr/R5oRkR8iYifEfH0dz8j4kvtd0F15/P5c0Q8vjiO5z2ez+fPtd8H1ZxOp9uU0sMrx/EUEU8ppYfT6XRb+51Qw01E/HjrOF7sx+FwuKn9WNhVSunbBcfx/E3yrfZ7YTcppftLj+PFkci/jO855xYciPzL2F7JubmTfxnTOzk3d/IvY/ko5xb83JJ/GcalOTd38i/9y8m5Bd8k8i/9Ksm5BUci/9Kf0pxbcCDyL32J63Nu7uRf+rBizs2d/Evb1s65BT+35F+atVXOzZ38S3u2zLkF3yTyL+3YI+cWHIn8S3175dyCA5F/qSv2z7m5k3+po2LOzZ38y76Ox+Onmjm34OfWw/F4/FT778YcblJK32v/0xccyfeD/MvWWsq5BUci/7KdFnNuwZHIv6yv1ZxbcCDyL+uK9nNu7uRf1tFRzs2d/Mt1esu5uZN/uUaXObfgSORf8vWccwuORP7lciPk3IIjkX/52Cg5t+BA5F/eF+Pl3NzJv7xu4JybO/mXf42ec3Mn//LSFDm34EjkX+bKuQVHIv/ObMacW3Ak8u+MZs25BQci/84m5Nzcyb+zkHOLJ/+OTs69bvLv2OTcdY5E/h2RnLvqkci/I5FzNzkS+XcEcu5mByL/9i7k3K0n//ZKzt1t8m9v5Nx9J//2Rc6tcyTybw/k3KpHIv+2TM6tP/m3UXJuG5N/GxRybmuTf1sh5zY7+bc2Obftyb91ybkdTP6tRM7tZ/LvzpZl+Vr7Q7fsI5F/97Asy11E/Kr9gVv2gci/Wws5t/fJv1uRc4eZ/Ls2OXesyb/rknMHnPy7Ejl33Mm/V5Jzx9+yLF9r/591Sc6dZr/k30wh5842+fdScu60k38/IufOPfn3fXKuyb9vkXPtefLvf+Rc+3/y719yrr0x+TfkXHt/8+ZfOdcu3Hz5V861nM2Wf+Vcy940+VfOtdINn3/lXLt2w+ZfOddW2nj5N+RcW3fj5F851zZa//lXzrUt13v+lXNt83Wbf+Vc22vd5V851/ZeN/lXzrVKaz//hpxrdddu/pVzrZG1l3/lXGtpvedfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgNn9ARXrd83e3rJlAAAAAElFTkSuQmCC"

/***/ }),

/***/ 162:
/*!*******************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/xiangxian/right.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAERUlEQVR4nO3Yu7EjNxRFUVjKQZkoIGWlgJSJcpBFGXrGmxkSbPbvXABrVR2/jYsqbrYGAAAAAAAAAAAAAAAAAAAA8/urtfZb+iOgqkdr7e/W2u/pD4GKHl/7p7X2R/hboJzHt/3bWvsz+zlQy+PJdAl8efZAdAl8efVAdAm0/gPRJSzv3QPRJSxt6wPRJSzpkweiS1jOpw9El7CUPQ9El7CMIw9ElzC9ow9ElzC1Mx6ILmFaZz0QXcKUzn4guoSpXPFAdAnTuOqB6BKmcOUD0SUM744HoksY1l0PRJcwpDsfiC5hOHc/EF3CUFIPRJcwhOQD0SWUl34guoTS0o/j+3QJ5aQfxc/TJZSSfhDPpksoI/0YXk2XUEL6IbybLiEq/QC2TJcQkz7+rdMlRKQP/5PpEm6XPvo90yXcJn3se6dLuEX60I9Ml3C59JEfnS7hUukDP2u6hEukD/vM6RJOlz7qs6dLOFX6oK+YLuE06WO+crqEw9JHfPV0CYekD/iO6RJ2Sx/vXdMl7JI+3LunS/hI+mAT0yVslj7W1HQJm6QPNTldwlvpI60wXcJL6eOsMl3CU+nDrDRdwi/SR1ltuoQfpA+y6nQJrbX8IVaeLiF+hNWnSxaXPsARpksWlj6+kaZLFpQ+utGmSxaTPrgRp0sWkj62UadLFpE+tNGnSyaXPrAZpksmlj6uWaZLJpU+rJmmSyaUPqoZp0smkj6mWadLJpE+pJmnSyaQPqLZp0sGlz6gVaZLBpU+nJWmSwaUPprVpksGkz6YFadLBpI+lpWnSwaQPpLVp0uKSx+I6ZLS0sdh/0+XFJU+DPNASksfhvmJVVr6OFafSC8ufSArz9+8A0gfyYrTGwNJH8tq0xuDSR/MStMbA0ofzSrTG4NKH87s0xuDSx/QzNMbE0gf0azTG5NIH9KM0xsTSR/TTNMbE0of1SzTG5NKH9YM0xsTSx/X6NMbk0sf2KjTG4tIH9qI0xsLSR/baNMbi0kf3EjTGwtKH90I0xsLSx9f9emNxaUPsPL0BvEjrDq9QWstf4jVpjf4QfogK01v8Iv0UVaZ3uCp9GFWmN7gpfRxJqc3eCt9pKnpDTZJH2pieoPN0sd69/QGH0kf7F3TG+ySPtw7pjfYLX28V09vcEj6gK+c3uCw9BFfMb3BadLHfPb0BqdKH/SZ0xucLn3UZ01vcIn0YR+d3uBS6QM/Mr3B5dJHvnd6g1ukD33P9Aa3SR/7J9Mb3C599FunN4hIH/6W6Q1i0sf/bnqDqPQDeDW9QQnph/BseoMy0o/h5+kNSkk/iO/TG5STfhSPpjcoLP049AalJR+H3qA8vQEdegM69AZ06A3o0BvQoTegQ29Ah96ADr0BHXoDOvQGdOgN6NAb0KE3oENvQIfegA69AR16Azr0BnToDejQG9ChN6BDb0CH3oAOvQEAAAAAAAAAAAAAAAAAAADc5j81yyKSgrh+AAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 163:
/*!********************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/xiangxian/circle.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 164:
/*!*****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/xiangxian/add.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAALD0lEQVR4nO2d0XHbyhJEOwSGgBCUgTuDpwwuM5AyEDKwMhAzsDMwM5AyIDOQMvD7IGlTMglggAV3ZtCn6nzdkmungbnYBRcAIObk29Gnoy8Afp35e6Dnf/Ny9u+d/n0h3LLC3yY4NcDQE7+05w307Tg2IW7KHYAHAD8A7FCvGYa6O4714Th2IYrS4G9D1D7ZS3lqmKZYSmJREMB3xLhClLjCfD/WLMRV7rCcpuhrFk3FBIDDFOMJy26KrmZ5gqZhi+R/yLWmmNsfx8xEYlY4LEx3qH/CRXUH4D/o9nEqGhymCu+of4Jl8R2afoVnhcNBrH0yZfbUKLqiBOLUGLpiqFHEF9QYPhpFOOMeWnx7cgf98OiCBnU3B8puf0EL+Wo8QdOpCGradWPuALyi/oGXNl+hLSyz84T6B1pO8+mfoyom00BXjUy+QmuTYqyhtUZG34/HVkzgBfUPpJzXFwgzDTSlWpKachkgNKVaou/Qj4u9rFH/QMm6riEu8h31D4704XeIP6ygxbj81xcIrKDFuLzuKxa8hV7NIYe4yCZRc0iLi2oSNYcc4yKaRM0hp5i6SdQcsoRpm0TNIUv5imS8oH6oMpcvSMIz6ocpc/qM4KxRP0SZ2zWCQtQPTy5DIhgNtGVd3s53BHueRHes5K0Nc2frBfXDiugbgO3RNwfjiegLnLNG/ZAiuT9mdumHr9Xxv+0djDOS6wtZuqCB1h0WHw3ZPjoYbxTdrke07hjmB8a9YfDu+Le1xx9Bd+uRFvVDieL9uIiB49/WHn8U23ERl+cO9cOI4mZcxJ/YOKgjii7eBayp1XCbcRF/onFQRxSrT7Va1A8hij/HRXyRnw7qiWI7LuLpNNBdK4uWu1Z96K7WcKvd1fplHOjS5aiUL0MH9UTy16iUJ6C7KXY5Jugr0EE90eSInEezm6GA7HJM0Fegg3qiuRsT9BjaGxSTUdqjvgod1BPR1h61jRW0MB8r7XFfhQ7qieg7Zn7hQ+ugyKjSnPZ16KCeqLbmtAeiq8c0aU78OnRQT1Rnu4q0DoqLLK2Bd0AH9US2tQbeR+OgqOjSmHkXdFBPZItfRVoHRUWXxsy7oIN6otsaM7+K1h5lpDH3LuignugWu4po308Zacy9CzqoJ4NrW+yX2TkoJIM05t4FHdSTwZ0x93/Qnqty0hZ9J3RQTxanPOGp5w4KSlv0ndBBPVkc/ZxO42DwmaQl/B7ooJ5MNpbwT7QOBp5JWsLvgQ7qyWRrCf/EzsHAM0lT+t3QQT2Z3JnSh95UMoe0HIAe6KCebJregKKP3pSXlgPQAx3Uk03Tx3h2DgacTVoOQA90UE82d0PD128f88ihB2AAdFBPRgdNszS9mkcOCX8gdFBPRgdNs3YOBppRDgl/IHRQT0Z3fcE3DgaZVfaFb4AO6slq0xW8du7OJ7uCN0IH9WS18w2Y2ns1n+wK3ggd1JPVzr1ZtQeXWXYFb4QO6snsRfTr+bzyWvAjoIN6Mnvxdq/WH/PKS6GPhA7qyezFdYjWH/PKS6GPhA7qyezFdcjOwcAyy0uhj4QO6sns7mvgKweDyi6/hj4BOqgnu5/eeKLA55coBx3Uk12eB946GFB2PwU+ETqoJ7ufFuobBwPKLlEOOqgnu5vzwLcOBpRdohx0UE92t+eB1x7MEiTKQQf1LME/1B7IEiTKQQf1LEGFfUOJctBBPUuQCvvGYReCDupZggR0i/emYReCDupZgi0Qt0F+4nCvmkEs+UWj1Y3HPsVHxN3n1wLxfgPZYOS7VEVVGsQ7156BOL+BfGDiq+qFC+5xOJa1z6chboE4DWJ6NaRwTZSH87ZAjAbpfJBehCTCA3pbOBhEn3tT7CISe9Q/v7p8h4NB9Lm2ZS4CsUb986vP6gPos+gH34UrIjyoV30AXb6ZIxfReEP98yxsg2zNcYtobFH/PFODCLdsUf88C9sgr+a4RTReUf88C9sgv6FFema0SC/g2hi6iMMa9c+v8A2yM4Yu4rBD/fOryw/A/yLpN7TVJCNhtppsHQxkiNqsmAdtVpzBd2i7ewbucTiWtc+nwQ2ycTAQiy/QA1MRaXA4drXPH4vPQNxHbn8AeADwLYilH7mtXc9QH3A4VrXPlzG2QNwGiSZRDjqoZwm2Cvt2EuWgg3qWIBX2jcMuBB3UswR5Crz2QJbgn7ALQAf1LME/1B7IEiTKQQf1LME/bB0MJrtEOeignuxuzwPfOBhQdoly0EE92d2cB946GFB2iXLQQT3Z/bT/T4HPL1EOOqgnuzwPPMKDK9H9FPhE6KCe7P6z82HvYFCZ5dfAJ0AH9WR2fyn0qK+ojyIvhT4SOqgns5tLoUd4gCWyvBT6SOignsxefEAvykMsUeWl0EdCB/Vk9urDebUHllleC30EdFBPZq+idch8sit4I3RQT1Z/dgWvdch8sit4I3RQT1Y7XxDSOBhgVtkVvBE6qCerTV/4eweDzCj7gjdAB/VkdD8k/GcHA80oh4Q/EDqoJ6PPCr+eHBL+QOignowOfvfa3sFgs8mh4Q+ADurJ5t6Qv6ZZM0jLAeiBDurJ5qDp1Qn9ql5eWg5AD3RQTzbNr7bdOxh0JmkJvwc6qCeTe0v4J1oHA88kLeH3QAf1ZLK1hH+icTDwTNISfg90UE8mG0v452hvVjlpi74TOqgni517r/q4d1BAFmmLvhM6qCeLkz+psXdQRAZpi70TOqgng3tb7JfRDt8y0ph7F3RQTwbXttgvs8LhY4a1i4kujbl3QQf1RPcDBb/Z0jooKLo0Zt4FHdQT3daYeScNdBWZKo2Zd0EH9US26NXjROugsMjSGngHdFBPZFtr4EPQWmSaNCd+HTqoJ6qzXD1OtA4KjCrNaV+HDuqJamtO24CuIuOlPe6r0EE9EZ316nGirVxkVGmP+ip0UE9EO99YUpL9DYrJJkfkfA06qCea+xE5j4aFB78EOSLna9BBPdHkiJwnsZ044KXJMSFfgQ7qieR2TMhTaaAFu8WS81/tjxvuByY87zGVtmNg8rOTnjv4gp7TGW47LuJyvKF+CFFsxkX8icZBHVF8GxdxWfQGlOFuxkX8iY2DOqJoflPJXLSoH0YUpzzBpic8h9uOi3g+NNUa5jvG/Z/t7vi3tccfQRdTq6800F0tiw+GbB8cjDeKVe9a9bFG/YAiuQPwHy7vD1od/9vOwTgjub6QpSs2qB9SRF8B/Dr66mA8Ed0gCFqPyFvrct1xjQZaj8jb6XrdcQ2ifnByGRJBWaN+eDK3awRHH+ORc2n66I1nNqgfpszlBsnQnS1ZylB3rIaygppETvcNN3jxQi3UJHKKqZvjhJpEjnERzXFCTSItLqo5TqhJ5BAX2Rwn1CSyy0U3xzkb1D8Y0pcbiE/oF3d5Ms0v5KVZo/7BkXVdQ3RCaKv8Ev1A4F25t6aBFu9L8g0Bn+fwwAb1D56c1w3EJNbQlCujH9B6oxgNNOXKpKZUM9Gi/sGV02whZuUOuppE9A2O3pW7BFpobRLBD+iqUY0G+tKVZ7fQWsMFhD4s6sk99KOfS1po2lVTTacCsIIapVZjaGt6INQoagwxgAZqFDWG6GWFw9aGPeqfYFHdHzNUYyTnHvqUssWfmPZtRRGUBoepwh71T0Jv7o/ZNCNyFQm5w+FRzz3qn5w1m+IZ2hIielhSs+yhphATaAA8Is+a5eNYyyM0fRIzcIe/DbNH/RN+yBVicxyzrhLi5qxw2Hf0iMOJuEW9ZtjibzMQuh0rnMOj7dFnHE7ik0N+vPz48jfPZ//e6d8XM/F/JO8SG0i/Q+sAAAAASUVORK5CYII="

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/stop.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAE20lEQVR4nO3WsevnAxzH8cNC3Wa5MBgNVmUR22U13KbULf4DZmVgMyirPwApWQxiOONdytlMQlmUkkGe/oLfdb/f/b6f5+v0fPwJr3fPel+5kiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJ/k+AV4BPePj9DLwNXLU3PS/gBnDLne9S3AVu2nteGuBde9ET+Am4Zm97P4BHgc/kvU7hO+AJe98HArxhr3hCP/IQHAj4wB7qhL6w970w4Brwt73gib1n73wvwEv2QAd43d75QoB37OUO8CfwiL31WYBP7YEOcMve+UKAr+zlDvK8vfVZgF/tcY5g73whwG17uINct7c+iz3MgZ6ytz434I692kFetbc+C/CPPc5BnrG3PjcKREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILgpER4HsokB0FMguCkRHgeyiQHQUyC4KREeB7KJAdBTILuC2vdpBrttbn8Ue5kBP21ufG/C1vdpBXrC3Pgvwuz3OQR6ztz434H17tQP8BTxub30W4Et7oAPcsXe+EOA54F97vRP70N75XoDX7IEO8Ka984UBH9nrndAfPAS/L/CtPdQJ/WDv+8CAj+0VT+A34EV72/sBPAl8I+91Ct8Dz9r7XgrgZeBzd89L8QvwFnDV3vS8gBvALXe+S3EXuGnvmSRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiQX8x/eB7ZqXP1b/wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 179:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/叉号.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 18:
/*!***************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/juxing.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAFUUlEQVR4nO3dz4vUdRjA8e/mQVpEEAo8KAhKkl1iu2TtwUuQ/gUd65R0coVgj3M0wfKyhyBhwUgRgqKIVQy2umx0WYiFPWySePEou4Gwg707fMeDm/s489X5PPOdeb/+g+f5Pm/mB7NsVUmSJEmSJEmSJEmSJEmSxhpwEDgDzAELwBKwCtwFtlBbbFE/s1XqZ7gAnKN+tgez76w1gH3AR8D13kI1Gf4GrlE/+33ZdzhygHeAK/iqoPoGvgLezr7LdMAscCv3eWiE3QRms++0OOA94Jfk5as9fgPezb7boQOmgUtAN3ffaqEucBGYzr7joQBmgI3cHWsMbAAz2ff8wgBTwHlgO3evGiPbwFz2bT834CXgRvIyNb6uAXuy77wR4GXgp+QFavz9QNs+lwCvAH8kL06T43fg1ey77wuwh7pqqaTvGfW3W9QfyL9JXpQm19XsBkLUP0CTMp3N7uCpgNfxq1zl+wd4I7uHJ1B/Y7WWvBjpsT8ZpW+2gPnsjUg7zGd3UVVVVQGHgM3sbUg7bAKHs/uoqP+4SRpF17PjOIq/zNXo6gLHMgNZzN6A9AyLWXH46qE2yHkVATrZk0t96mQEcid7aqlP66XjOJU9sTSgN0sG4tsrtU2nZCAr2dNKA1ouFcd+4N/saaUBPQQOlAjEzx9qq1MlAjmbPaXU0PD/VgS4nD2l1NDlEoH8mD2l1NB3JQLxGyy11XKJQFazp5QaWikRyHr2lFJDw//JCXA/e0qpofslArmXPaXU0D0DkXZnIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUMBApYCBSwECkgIFIAQORAgYiBQxEChiIFDAQKWAgUsBApICBSAEDkQIGIgUMRAoYiBQwEClgIFLAQKSAgUgBA5ECBiIFDEQKGIgUKBLIevaUUkPrJQJZyZ5SamilRCDL2VNKDS2VCOTb7Cmlhq6WCORC9pRSQ50SgXyYPaXU0AclAjmZPaXU0FslAtkLPMyeVBrQQ2Dv0APpReI3WWqb5SJx9ALpZE8rDahTMhA/h6htThYLpBfJX9kTS326UzSOXiC+zVJbdDICOZI9tdSnI8UD6UWymD259AyLKXH0AjkGdLM3IO2iCxxNC6QXydfZW5B2sZgaRy+Qw8Bm9iakHTaBQ9l9VFVVVcB89jakHeazu3gCsJa9EalnLbuH/wGOAw+yN6OJ9wB4LbuHpwLOAI+SF6TJ9Qh4P7uDEPBJ9pY0sT7Ovv++4M9QVF4n++4HAnyZvTFNjM+z731gwBRwJXtzGntfZN96YxiJhqu9cTxGHckcsJ28TI2PbeA8MJV93y8MMANs5O5VY2ADmMm+56EApoGL+AtgDa4LXAKms+946IATwO3cfatFbgMnsu+2OGAWuJm8fI2uW8Bs9p2mo/58cgH/94jqG/iMcf2c8byof/T4KfBr6mNSST9Tf9N5PPv+WgU4AJwGzgELwBKwCtwFtrKepga2Rf3MVqmf4QJ1EKeB/dl3JkmSJEmSJEmSJEmSJEkarv8Aj5aUm7GdO8EAAAAASUVORK5CYII="

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
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
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
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
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
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"jihua-client","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
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

/***/ 227:
/*!************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/components/uni-calendar/util.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 228));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

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

/***/ 228:
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

/***/ 256:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 257);

/***/ }),

/***/ 257:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 258);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 258:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 27:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/退出.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 28:
/*!*************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/对.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAcXElEQVR4Xu1dC5BmRXU+5zoyU+4CRsXyUVaBjsW699yfTZan67LyTkQDwoJvQSCJwUcqIKBsMCLhJSypiBKTAIJBRVlecYkR5aWCPNzU7n9Pj0s5AlUWaIkaxV1rBqfuSZ3hjszO7ux093389/9vd9WtOzVzuvv01/1N33v7PBBCCQgEBOZFAAM2AYGAwPwIBIKE1REQ2AkCgSBheQQEAkHCGggI+CEQdhA/3EKtliAQCNKSiQ7D9EMgEMQPt1CrJQgEgrRkosMw/RAIBPHDLdRqCQKBIC2Z6DBMPwQCQfxws64Vx/FLoiiiLMsIAF6DiLsBwG56F5HpnwFg9/yuP2t5Jr9+q3dEfEZEpn+X338aRRFnWcbGmF9bKxMEnREIBHGGbMcVOp3OoqmpKYqiKEZEEhFCxFhEXlVSFztsBhGfEhGDiCwiShozNDTE3W53a5X9tqXtQBDPme50OnuJyL5Zlh2MiAcDQMezqaqqdUXku1EUfRcRf9jtdh+vqqNBbjcQxHJ2iWhfANgPAPS+AgD2tqzaFLFHAeB+APghADzCzHoPZQEEAkF2AlCSJEmWZasRcTUALB2w1TQmIuuiKFqXpmk6YGMrbTiBIHOgjON4lyiKVouIkuLtpSHd7IZuRcR1WZatM8Y822xV69UuECTHWx+hlBSIeDwAjNY7DY3pbVxEblayhEew5+ak9QRJkuQYETkNAN7amGXaDEXWI+LVaZre3gx1eqNFawlCRCcCwKkAcGRvoO+bXu8EgGuY+et9o3GJiraOIET0vpwYq0rEsQ1N3ZcT5T/bMNiZMbaGIESku4U+Sh3YpgmuYKwPAsDVzHxNBW03rsmBJwgRHQcAZwLAG3uI/s8Q8UcA8KMsy36OiBN6ZVk2fReR6bteqqOIjOiFiNP3KIqm7/nPrwCAN4jIGwDglT0c0wMAsJaZb+mhDpV3PbAEieN4GSIqMd5bOYrPd6D2Ut9XIsxcQ0NDYxs3bvxNFTosW7bsxVNTU3o+o2SZud6U23VV0eWO2rxBRNYaYzbW1WGd/QwcQUZHR3cbHh4+ExE/BgAvqhjMZxHxbhG5GwDuacqn0fzU/xBEPFREDgWAXSrG4fcicvnk5OTa8fFx/ScxMGWgCBLH8Uk5MdRytqryMCLeq3ZOExMT32v6gtB/GCMjIyvVXkxE3gwA+1cFDACoweTlxpjrK+yj1qYHgiBE9DoAuKzCk+9NAHCHXsysz959W4hI38WOzq99KhrIrQBwFjP/pKL2a2u27wlCRGoOouRQkpRZHhWRaVIYY/QRauBKHMf6+HU0Iiphyja+VHIoSZQsfVv6miBE9CkA+MeS0b8t/96/vuR2G90cEaklgX4KP7ZkRc9nZp2nvix9SZCKHqluBIBrmfnbfTmTJSlNREcAwCkA8M6SmtRm+vaRq+8IUvYjFSJej4jXdLvd75W4IPq+qU6ns1JEThWRk0oaTF8+cvUVQUp+pLpWRL5gjHmkpAUwkM3EcbwfIn4w31XKGGNfPXL1DUGI6PMAcHoJM6SEuGTQT4BLwGmbJnKLhI/nXpVFm7+KmT9UtJE66vcFQYhILUlPKAiImnFcOjExcfH4+PhkwbZaWX10dHR4ZGTkEwBwDgCMFAThJmZWi+pGl8YThIjuAQA94CpSbs53jeCHXQTFvG5+Uq+7iTqXFSn3MvMhRRqoum6jCZIkiZ7MxgVAeBIRz0vT9IsF2ghV50EgSZIPiMgFAPBqX5AQ0aRpWqXlg69q0/UaSxAi+gUA7FFgdLdEUXRut9vVaB6hVIRAp9PZO8uyiwBAraZ9y9PM/HLfylXWayRBiEgKDHpKRNYYYz5ToI1Q1RGBOI7PRsQLAWDIseofxZm5ceuxcQoR0WMAsJcnyPcj4po0TdX7LZSaEUiSZJWIKEk0bphPeZyZX+tTsao6jSIIEanNk9dLm4hcsXXr1jVPPPHEtNNRKL1BYM899xxZtGjRhYh4hqcG6jagNmKNKI0hCBGpC6eaOPiUNcysz8GhNAQBIjoXAHQ38Slq8qN2YT0vjSBIHMdrff/jqNdgmqZX9BzJoMB2CCRJcoZ6G/pAo08Exhj1CO1p6TlBiEj/8+vhk095PzO3KsqGD0i9rJNHkfmSpw4XM7PuRD0rPSVIEduqKIoO6na7GmEjlIYj0Ol0Dsyy7AeeavbUdqtnBMmtcr0iYkxNTb1s8+bNv/IEPFTrAQJLlix56dDQ0C89uz6uV45XPSFI7s/xLR8vQBHZ1RizxRPoUK2HCMRxvBgRf+ehgprKH9ULF95eEUR3DufI6SLyemPMuAfAoUpDEIjjeBQRf+yhzq3MXOS03qPLHpiaEJG6yDq7YGomp7GxseDU5DXNzaq0dOnSlZr5ykOrTzHz+R71vKvUuoP4vncg4olpmt7kPcpQsXEIJElygoj4BMSu9X2kNoIUeO/4KDNf2bgZDgoVRoCIPgIAn3VsqNb3kToJ4vze0ZTDIscJDOIOCHgeEtf2PlILQfKIh9c54Kai92/ZsuXwYFvliFqfiavt1uLFi7/jauAoIifXEcGxcoLkoS81u6qLU8wUIh4erHL7bLV7qptbAStJXEzleWJiYkXVoV8rJ0gcx+cj4iddsBORc4I/hwti/S+b+5Nc6jISEfm0MabswIHbqFApQfIUBLp7uERZv4WZi/o6u+AcZBuCABFp7ACXsw6NKr+iytQLlRKEiNSQ0CU/x5NRFB0W3GQbsmJrViN3373L0cf9BmbWtHqVlMoIksdR0v8I1gURTwkBFqzhGkjBPBDEtY6DO76qOGdVEkQfrVzSnt3MzKsdgQniA4gAEa1zDCn0ADP7uvnuFMFKCJInzLzaYe7UTXZlUzI0OegdRCtAII+7pWZFLsHpTqsisWhVBFHbf5dssj21+a9gjkOTBRHw8BV6kJkPKtjtdtVLJ4iHB9kjExMTK0M40LKntr/by8Oc6i6yn8NISvcwrYIg9wLAKodBVfaC5aBDEG0gAh4feu5j5qJhardBolSCEJEGI/6aA9aNiV7hoHMQrREBj2g372BmHyvhHY6qbIKol+CRtviJyP4hP4ctWu2Uy/OTPOww+juZ+SgH+Xq+YiVJcoyIaH4/q6KZndI0PdlKOAi1GoEkSa5zyXSFiMemaXp7GaCVtoMQ0TcAQBNBWpUoig4Oac+soGq9kKaDy7LMxQNxPTO/rQzgSiFI/t3aJZXZjcz8rjIGENpoBwJE9FXHxKL7lXGuVgpB4ji+BBE165BtObLt2WRtgQpyzyGQZ9+90xYPEbnUGKNJfgqVwgSJ43gXTYICAKOWmtzGzM4RTSzbDmIDjAARaTpp2zzu45p8yRjzbBFIChMkSZJ3i8iXHZR4GzOvd5APogGBmV1E33H1XdeqIOJ70jT9ipXwPEKFCUJELr7mjzLzkiIKh7rtRoCINgPA3pYoFPZdL0SQJEkSEelaKgshCIMtUkFuPgRcgzwgYidN09QX0UIEcXWnFZHDjDGaJCeUgIAXAnEcH4qI6lRlVYq65RYiCBHpy/lSK00BNjHzMkvZIBYQmBcBItoIAPtYQjTGzN6Zkr0J0ul0DsiyzCX9wEXMvMZyUEGswQjoZ/2hoaErN23a9GQv1CQizVxlnTckiqIDu93uQz66ehOEiD4KAP/i0OkKZn7AQT6INhCBWWdem17wghcc3QuSEJF6qqrHqm35O2Z2jeA43bY3QZIk+bKIvNtSw4eZ+QBL2SDWUAR2cCDcS5LojrC/DVSI+JU0Td9jIztXxpsgRKQxUm1T9q5l5o/5KBjqNAOBnVhL9IQkRHQ5ANjmMHyMmV/ng6QXQTxyPASnKJ/ZaUgdC1Oi2kni6kzlm1vGlyAnIaJtrN0/DA8P77Fhw4bfNmS+gxoOCFiQY6a1WkmyfPny3ScnJ58GgBfaDMc3lq8vQf4NEf/aRjEAuJeZD7GUDWINQsCBHD0hCRHdAwBWLrYi8u/GmL9xhdeLIESkJ5NWwahF5AJjjFNsXtdBBPnyEfAgR+0kieP404h4nuXomZkTS9k/ijkTpNPpLMqyzDqJpoi8yRjj8knOdQxBvmQECpBjWpMoig7vdrvWp92+6sdxvAIRv29bP4qixd1ud6utvMo5E2Tp0qUHRFFke0D4O2bezUWhINtbBPqFHDMoEdEzALCrDWpZlh04NjbmdGDoTBAiOgUArrFRCAD+m5mPtpQNYj1GoCA5JqIoemsdO8dsmIjoDgB4iyV0pzKzU9xfZ4IkSXKFiPy9pULh/MMSqF6L9SM5FDOX8xBE/Oc0Tc9wwdqZIESkbo9HWHZSSbxUy76DmCUC/UqOnCCnAoBtHOhvM7N1WCqvd5AkSZ4UkVdZYh/sryyB6pVYP5MjJ4i1XRYiPpWm6atdsHbaQeI4fgki/sq2g6GhoT/ZuHHjb2zlg1y9CPQ7ORStZcuWvXhqaur/bJETkZcaY35tK+9EkCRJDhaR+ywb/xkz2+40lk0GsbIQGARyzGBBRE8BwCttsEHEVWmaWsfYciJIHMenI+LnLRW5O03Tw2xkg0y9CAwSORS5JEnuEpFDbVAUkQ8ZY66ykXV+B4nj+GJEtIo1pERK0/TDtorUKbd8+fIXTU5OrkfEy9I0/Wadffe6r0EjR06Qz+nCt8FWRC4xxnzCRtaZIESku8fpNo2LyHnGmH+yka1TZoYcADBtH4aIb2kLSQaRHDqHcRz/AyJeYLmOrmJmKzL5EMQla+1ZzKw2+40pc8mRKyaIePSgk2RQyaFzSETqa3SZ5UJzyorr9A6SJMntIvKXNoog4kfSNP2cjWwdMvOQY6brgSbJIJMjf8T6sIhcabOOEPG/0jQ9xkbWZwdxMS/+K2OM7QGOrb5ecguQY6BJMujkyB+xTkPE/7BcHE7uF047CBFtAIA/s1Tkfcx8g6VsZWKW5BhIkrSBHPkj1nsBQB//bcr/MvNyG0GfHWQcAKx8e0XkBGOM5rvuWXEkx0CRpC3kyHeQ1Yh4k+VC+wkz2wZadzN3J6JfAMAelor0NEi1JzkGgiRtIke+g7gEtX6amV9uuYadCTIBAMM2jSPiEWmafsdGtioZR4+zuWr05Yt728ihk5YkyeEi8m3LdTTJzCOWsoNNkHz7dXHL7GuStJEcTSNI3zxizV7pbdhJ2kqOpj1i9dVLeltI0mZyNO0lve8+8w46SdpOjnwHacxn3r48KBxUkgRyPDezcRw346Cwn01NBo0kgRzPz2iSJI0xNelrY8VBIUkgx7YfGxtjrDgI5u79TpJAju1PMBpj7j4oDlP9SpJAjh0f7yVJ0gyHqUF1ue2Hc5JAjvnPvhvjcjvIQRuaTJJAjp0bhjQpaMNAh/1pIkkCOXZOjkaF/cntXgY6cFyTSBLIsbBJoUtCz8oDx+WnlgMferQJJAnkWJgc+XpsXOjRVgSv7iVJAjnsyJETxDqZZ13Bq1uT/qAXJAnksCdHTpBmpT9wTKDzDDPv7jbkZknXSZJADve5JyJNDmuVpKmWBDquKdgAYD9m/qH70JtTow6SBHK4zzcR7QsAj9jWrCUFW76tbQKAjqViZzOzbVAvyybrF6uSJIEcfvNJRGcBwGcsa3eZeR9L2T+KOYX9makVx/GViGgVdxcR/ydN079wVayJ8lWQJJDDf6aTJPmmiPy5TQsi8jljzEdsZGfLeBEkSZITROTrlp09OzExscf4+LgmW+z7UiZJAjn8l8Po6OhuIyMjTwPALjatIOKJaZrahgYqtoN0Op29six7zEaxXOatzKxfGwailEGSLMtWIeI5noD0JGGmp66VVCMiTQ673rbxKIpe2+12H7eVn5Hz2kG0MhFtBoC9bTpExM+kaeq7GGy6qF2mIEmK6Nt6cih4SZJcKiJnWwL5KDMvsZTdRqwIQTQVtJ6J2JSHmfkAG8F+kukBSQI58gVCRJrvfH/L9XItM+uJu3MpQpC/BQDrTD0AMJAJPWskSSDH8+SwTtyZVzmdmf/VmR2aP8anUv6I5fQNGgAuYuY1vv01uV4NJAnkmLUAiOhCADjXYU14n8V5EyQniQGApZaKbmLmZZayfSdWIUkCOeasBiLaCAC2ZxpjzBz7LqhCBInj+HxE/KRt5yJymDHmblv5fpOrgCSBHHMWQRzHhyLiXbZrQ0Q+bYz5R1v5uXKFCJIkSSIiXdvOReQKY8yZtvL9KFciSQI5drAA4jhei4hn2K4NROykaZraypdKkPwx6xYAeLulAt6f2yzbb4RYCSR5Noqit3S7Xev/lI0YeA1KuBwvAMCtzHxcEbUK7SDacZIk7xaRLzso0dO8IQ56FhItSJL7mPnNhRQYwMpE5JIHRDMYvydN068UgaIwQeI43gUR9WXdNmvPbcxsu+MUGVvP63qSJJBjnpkjolsB4FjLiR0XkdgY86yl/A7FChNEW/WwKTqSmW0TnhQZX8/rOpIkkGN+chwBAOrubVVE5FJjzMethHciVApBXO3yAeBGZn5XUeX7pb4lSQI5djKhRPRVAHinw5x7n33M7qMUgmiDRPQNANBnRKsSRdHB3W73e1bCAyC0AEkCOXYyx51OZ2WWZd91WAbrmfltDvLzipZGkCRJjhGR22yVQsTr0zQ92VZ+EOTmIUkgxwKTmyTJdSJyku0aQMRj0zS93VZ+Z3KlESTfRb4FAEfaKiYi+xtjrF0mbdttstwckgRyLDBZcRzvh4gPO8zpncx8lIP8TkXLJsiJAPA1B+W8rSwd+micaE6SPy3rMaBxAyxRISJysRrXnt/BzLbOfAtqWipB8l3kXgBYtWDPzwscz8x62BhKQGAbBIhID/ludoCl9B25CoK8DwC+5DCoRyYmJlaOj49POtQJogOOwOjo6PDIyIh+xNnPYajvZ2ZN8lRaKZ0g+S7yAwA40EHL85n5Uw7yQXTAESAiXQ8uRoYPMvNBZcNSFUFc4qXqmCYAYGW/x88qe3La2l5+rqa7x4gDBqcxs76vlFoqIUi+i9wPAOr5ZVtuZubVtsJBbnARIKJ1AHC8wwgfYOYVDvLWolUSxPUFS43LTknT9IvW2gfBgUMgSZIPiMi1jgOr7ENPZQTJdxGXrLha5ckoig7rdruPOgIUxAcAgU6ns3eWZWri/2qH4dzAzPphqJJSKUHiOF6GiPqo9SIH7W9hZpft1aHpINpkBIhIP+m6+G/8XkRWGGPUBbeSUilBVGNXt1ytIyLnGGNsY65WAkxotF4E4jg+GxEvdem1qDutTV+VEyQPEam7CNkolMtMIeLhaZre51AniPYpAkmSrBKR7wDAkMMQeGJiYkXVIW0rJ0i+i5yEiNc5DF5F79+yZcvhTzzxhH4CDmVAEdhzzz1HFi9erORw+golIicbY66vGpZaCKKDICIX3/XpcbchyEPVE9z09l2DMOTjKexrbotLnQR5HQCota/eXcoaZr7IpUKQ7Q8EiEiDv2kQOJfyEwA4ipn1XnmpjSD5LqK+6M6GiYh4ZpqmV1SORuigNgSSJDlDRNZ6dHgcM6tvei2lVoLkJHG1sZkBonRDtFoQDp1shwARuRq0zrRRu81e7QTJSeL8PqL1oig6qNvtPhjWXP8i0Ol0DsyyTI1ZXUtt7x2zFesVQXzfR2Bqauplmzdv/pUrukG+9wgsWbLkpUNDQ7/00KTW946eE6TI+4jWFZFdjTFbPIAOVXqEQBzHixHxd57d1/re0QiCFHwfUZK83hgz7gl4qFYjAnEcjyLijz27rP29ozEEyUnyeQA43Qe8LMsOHhsba03oIB+Mel1n6dKlK6MocgnZM1vlq5j5Q70cQ0/eQeYOmIjUyf4EHyB8s5f69BXquCHgmA15buM3MbMGAelpaQRB8p3kHgDwDdj8UWa+sqdIhs63QYCINCf5Zz1huZeZD/GsW2q1xhBER5UkCWvAYZ8RqlnK1q1b1wTbLR/0yqujtlWLFi260CWHxzbP/IgmTVMXw9bylN9BS40iSL6T/AIA9vAc9f2IuCZYAXuiV7BabpWrpiNOhoezun2amV9eUI1SqzeOIDlJpMAop0RkTfAnKYCgR9Xcn0PJ4WKyvk1PzNy49dg4hWYQI6LHAGAvj7maqXJLFEXnBvfdAghaVM3dZNWY1MUTcG7LjzPzay26q12ksQTJdxJN+FnkZe1JRDwvBIKoZl3lARYucPQhn6vMPcx8aDUaFm+10QTJSeIam3VHqKiv8yUh7lbxBZPPyb4AoMlpisYOaHxs5sYTRCfE06lm7mpQz8RLJyYmLg5hTv2IkocD/QQAnOMY1G27DvvFGa4vCJL/19LnXJ2cokXTLehu4uyXUrTjfq6fB5LWXcMlVu58Q76YmdVZqvGlbwiSk8TXl2RHE3GtiHyhbflJXFdknp/jgwBwimvdeeR7alvlOoa+IkhOEvVKvMzDdXeH2GimK0S8pk3p4GwWiaY9E5FTXTI7LdCumqyfVac3oM04F5LpO4LkJFF/EiVJmemkbwQAfWlsRfbd+RYGEWk2Wd0tXBJmLrTO1EVWyVGLH/lCyrj8vS8JMjNAjxD5NthonsVrmHm9jfCgyBCRJmDVqPy2echth95Xj1RzB9XXBKnikWsWQI+KyB0AcIcxRs9jBq7EcaznD0cj4tEAsHfJA+zLR6qBI0iFj1yzsdqkRNGLmR8oeSHV2hwRaUoKJYRe+1TUed8+Ug0kQWYGFcexRnD8mGOYU9c1ohlX1UnrgeHh4bs2bNjwW9cG6pRfvnz57pOTk4fluVpWAsD+Ffav1tiX1xHxsMIxbNN03z9izQVKYwEPDw+fmRPFJaq8D+Z/0BCpIqKE+ZYxRmMQ97zEcazWtEchohJCf35hxUpplPXLJycn11YdK7ficWzX/MARZNZuoqkXzgSA99YIqgYlULL8aOYaGhoa27hx42+q0GHZsmUvnpqaWgoAb5h1KSl2raK/edq8QQPAVZmCoMaxtIcgMyPNT4CVKC7p4Mqek58h4jRpsiz7OSJO6JVl2fRdRKbvemnHIjKiFyJO36Momr7nP79CySAiSopXlq2oQ3v6LrZ20C0SBnYHmTvRRKSfME9zzL7rsF5aI6qB+66uImFmExFsDUFm7Sga9lLJsqqJE9JgnTRXi54PlZqHvMHjnVatdQSZRRSNmKFEObLpk9Rj/e7MiaGRZ1pXWkuQmZlOkuQYEdFHLz1JDuV5BNYj4tVpmt7eZlBaT5BZO8q+IrIaEdUJaLSli2JcRG5GxHXBuey5FRAIMocJcRzvEkXRaiVLycaQTebcrUqKLMvWGWOebbKidesWCLITxJMkSbIs011FyaLnDYNUxkRkXRRF69I0TQdpYGWOJRDEEs1Op3NAlmUHIOIBInIgADQyCsdOhvMYIj4oIg9FUfRQt9t9yHLorRYLBPGcfo1YnptxvBER9RCyMdEA8yGpXZQe5ul1f4iE7zfRgSB+uG1Xq9PpLJqamqIoimJEJBEhRIxF5FUldbHDZhDxKRExiKiE4CzLzNDQEHe73a1V9tuWtgNBKp7pOI5fEkURZVmmO8xrEHE3ANhN7yIy/TMA7J7f9Wctz+SXWgo/g4jPiMj07/L7T6MoUjKwMebXFQ+h1c0HgrR6+sPgF0IgEGQhhMLfW41AIEirpz8MfiEEAkEWQij8vdUIBIK0evrD4BdCIBBkIYTC31uNQCBIq6c/DH4hBAJBFkIo/L3VCASCtHr6w+AXQiAQZCGEwt9bjUAgSKunPwx+IQT+HyJ76G4rKcghAAAAAElFTkSuQmCC"

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

/***/ 37:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/日历.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 38:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/beiwang/添加.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAALD0lEQVR4nO2d0XHbyhJEOwSGgBCUgTuDpwwuM5AyEDKwMhAzsDMwM5AyIDOQMvD7IGlTMglggAV3ZtCn6nzdkmungbnYBRcAIObk29Gnoy8Afp35e6Dnf/Ny9u+d/n0h3LLC3yY4NcDQE7+05w307Tg2IW7KHYAHAD8A7FCvGYa6O4714Th2IYrS4G9D1D7ZS3lqmKZYSmJREMB3xLhClLjCfD/WLMRV7rCcpuhrFk3FBIDDFOMJy26KrmZ5gqZhi+R/yLWmmNsfx8xEYlY4LEx3qH/CRXUH4D/o9nEqGhymCu+of4Jl8R2afoVnhcNBrH0yZfbUKLqiBOLUGLpiqFHEF9QYPhpFOOMeWnx7cgf98OiCBnU3B8puf0EL+Wo8QdOpCGradWPuALyi/oGXNl+hLSyz84T6B1pO8+mfoyom00BXjUy+QmuTYqyhtUZG34/HVkzgBfUPpJzXFwgzDTSlWpKachkgNKVaou/Qj4u9rFH/QMm6riEu8h31D4704XeIP6ygxbj81xcIrKDFuLzuKxa8hV7NIYe4yCZRc0iLi2oSNYcc4yKaRM0hp5i6SdQcsoRpm0TNIUv5imS8oH6oMpcvSMIz6ocpc/qM4KxRP0SZ2zWCQtQPTy5DIhgNtGVd3s53BHueRHes5K0Nc2frBfXDiugbgO3RNwfjiegLnLNG/ZAiuT9mdumHr9Xxv+0djDOS6wtZuqCB1h0WHw3ZPjoYbxTdrke07hjmB8a9YfDu+Le1xx9Bd+uRFvVDieL9uIiB49/WHn8U23ERl+cO9cOI4mZcxJ/YOKgjii7eBayp1XCbcRF/onFQRxSrT7Va1A8hij/HRXyRnw7qiWI7LuLpNNBdK4uWu1Z96K7WcKvd1fplHOjS5aiUL0MH9UTy16iUJ6C7KXY5Jugr0EE90eSInEezm6GA7HJM0Fegg3qiuRsT9BjaGxSTUdqjvgod1BPR1h61jRW0MB8r7XFfhQ7qieg7Zn7hQ+ugyKjSnPZ16KCeqLbmtAeiq8c0aU78OnRQT1Rnu4q0DoqLLK2Bd0AH9US2tQbeR+OgqOjSmHkXdFBPZItfRVoHRUWXxsy7oIN6otsaM7+K1h5lpDH3LuignugWu4po308Zacy9CzqoJ4NrW+yX2TkoJIM05t4FHdSTwZ0x93/Qnqty0hZ9J3RQTxanPOGp5w4KSlv0ndBBPVkc/ZxO42DwmaQl/B7ooJ5MNpbwT7QOBp5JWsLvgQ7qyWRrCf/EzsHAM0lT+t3QQT2Z3JnSh95UMoe0HIAe6KCebJregKKP3pSXlgPQAx3Uk03Tx3h2DgacTVoOQA90UE82d0PD128f88ihB2AAdFBPRgdNszS9mkcOCX8gdFBPRgdNs3YOBppRDgl/IHRQT0Z3fcE3DgaZVfaFb4AO6slq0xW8du7OJ7uCN0IH9WS18w2Y2ns1n+wK3ggd1JPVzr1ZtQeXWXYFb4QO6snsRfTr+bzyWvAjoIN6Mnvxdq/WH/PKS6GPhA7qyezFdYjWH/PKS6GPhA7qyezFdcjOwcAyy0uhj4QO6sns7mvgKweDyi6/hj4BOqgnu5/eeKLA55coBx3Uk12eB946GFB2PwU+ETqoJ7ufFuobBwPKLlEOOqgnu5vzwLcOBpRdohx0UE92t+eB1x7MEiTKQQf1LME/1B7IEiTKQQf1LEGFfUOJctBBPUuQCvvGYReCDupZggR0i/emYReCDupZgi0Qt0F+4nCvmkEs+UWj1Y3HPsVHxN3n1wLxfgPZYOS7VEVVGsQ7156BOL+BfGDiq+qFC+5xOJa1z6chboE4DWJ6NaRwTZSH87ZAjAbpfJBehCTCA3pbOBhEn3tT7CISe9Q/v7p8h4NB9Lm2ZS4CsUb986vP6gPos+gH34UrIjyoV30AXb6ZIxfReEP98yxsg2zNcYtobFH/PFODCLdsUf88C9sgr+a4RTReUf88C9sgv6FFema0SC/g2hi6iMMa9c+v8A2yM4Yu4rBD/fOryw/A/yLpN7TVJCNhtppsHQxkiNqsmAdtVpzBd2i7ewbucTiWtc+nwQ2ycTAQiy/QA1MRaXA4drXPH4vPQNxHbn8AeADwLYilH7mtXc9QH3A4VrXPlzG2QNwGiSZRDjqoZwm2Cvt2EuWgg3qWIBX2jcMuBB3UswR5Crz2QJbgn7ALQAf1LME/1B7IEiTKQQf1LME/bB0MJrtEOeignuxuzwPfOBhQdoly0EE92d2cB946GFB2iXLQQT3Z/bT/T4HPL1EOOqgnuzwPPMKDK9H9FPhE6KCe7P6z82HvYFCZ5dfAJ0AH9WR2fyn0qK+ojyIvhT4SOqgns5tLoUd4gCWyvBT6SOignsxefEAvykMsUeWl0EdCB/Vk9urDebUHllleC30EdFBPZq+idch8sit4I3RQT1Z/dgWvdch8sit4I3RQT1Y7XxDSOBhgVtkVvBE6qCerTV/4eweDzCj7gjdAB/VkdD8k/GcHA80oh4Q/EDqoJ6PPCr+eHBL+QOignowOfvfa3sFgs8mh4Q+ADurJ5t6Qv6ZZM0jLAeiBDurJ5qDp1Qn9ql5eWg5AD3RQTzbNr7bdOxh0JmkJvwc6qCeTe0v4J1oHA88kLeH3QAf1ZLK1hH+icTDwTNISfg90UE8mG0v452hvVjlpi74TOqgni517r/q4d1BAFmmLvhM6qCeLkz+psXdQRAZpi70TOqgng3tb7JfRDt8y0ph7F3RQTwbXttgvs8LhY4a1i4kujbl3QQf1RPcDBb/Z0jooKLo0Zt4FHdQT3daYeScNdBWZKo2Zd0EH9US26NXjROugsMjSGngHdFBPZFtr4EPQWmSaNCd+HTqoJ6qzXD1OtA4KjCrNaV+HDuqJamtO24CuIuOlPe6r0EE9EZ316nGirVxkVGmP+ip0UE9EO99YUpL9DYrJJkfkfA06qCea+xE5j4aFB78EOSLna9BBPdHkiJwnsZ044KXJMSFfgQ7qieR2TMhTaaAFu8WS81/tjxvuByY87zGVtmNg8rOTnjv4gp7TGW47LuJyvKF+CFFsxkX8icZBHVF8GxdxWfQGlOFuxkX8iY2DOqJoflPJXLSoH0YUpzzBpic8h9uOi3g+NNUa5jvG/Z/t7vi3tccfQRdTq6800F0tiw+GbB8cjDeKVe9a9bFG/YAiuQPwHy7vD1od/9vOwTgjub6QpSs2qB9SRF8B/Dr66mA8Ed0gCFqPyFvrct1xjQZaj8jb6XrdcQ2ifnByGRJBWaN+eDK3awRHH+ORc2n66I1nNqgfpszlBsnQnS1ZylB3rIaygppETvcNN3jxQi3UJHKKqZvjhJpEjnERzXFCTSItLqo5TqhJ5BAX2Rwn1CSyy0U3xzkb1D8Y0pcbiE/oF3d5Ms0v5KVZo/7BkXVdQ3RCaKv8Ev1A4F25t6aBFu9L8g0Bn+fwwAb1D56c1w3EJNbQlCujH9B6oxgNNOXKpKZUM9Gi/sGV02whZuUOuppE9A2O3pW7BFpobRLBD+iqUY0G+tKVZ7fQWsMFhD4s6sk99KOfS1po2lVTTacCsIIapVZjaGt6INQoagwxgAZqFDWG6GWFw9aGPeqfYFHdHzNUYyTnHvqUssWfmPZtRRGUBoepwh71T0Jv7o/ZNCNyFQm5w+FRzz3qn5w1m+IZ2hIielhSs+yhphATaAA8Is+a5eNYyyM0fRIzcIe/DbNH/RN+yBVicxyzrhLi5qxw2Hf0iMOJuEW9ZtjibzMQuh0rnMOj7dFnHE7ik0N+vPz48jfPZ//e6d8XM/F/JO8SG0i/Q+sAAAAASUVORK5CYII="

/***/ }),

/***/ 4:
/*!***************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 47:
/*!*****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/calender.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 48:
/*!**************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/table.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/*!****************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/icon/presell.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 60:
/*!***************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/right.png ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAACvElEQVR4nO3avWoUURzG4be1ERsRLLSxsFALP/ACrIWAFoJgIShE8BqijVbehlcgdn4giDcQEMHOThE0BhFR1172eJLM7H/C7vPA6d/mx3BmJgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjCwSR3k7xI8jLJ0yRXphwE+8V6ku0ksznnbZLL002Daa1nfhj/nvWpBsJUjiX5kZ0FIhJWzsPsPA6RsHJeZ/eBiISV8T57C0QkrIQ32XsgsyS36idDnY0MC0QkLLWjGR7ILMnt6uFQ5UbGicSThKW104+F/zt/ktysHg5VRAIdIoEOkUCHSKBDJNAhEugQCXSIBDrGiuR69XCoMkYkvyMSlphIoEMk0CES6BAJdIgEOkQCHSKBDpFAh0igQyTQIRLoEAl0jBXJ1erhUGWMSH5FJCwxkUCHSKBDJNAhEugQCXSIBDpEAh13MjySWZK16uFQZYxIvic5UT0cqowRyePy1VBoaCRb9ZOh1tCL++H6yVBnaCCH6idDjaFxfKifDDXGuKTfqx4NFcaI412SA9XDYdHGiONTkpPVw2HRxvjV5GPEwRISBzSIAxrEAQ3igIYx4vgccbCExorjdPVwWDRxQIM4oEEc0CAOaBAHNIgDGsQBDeKABnFAgzigQRzQIA5oEAc0iAMaxAENY8TxJeJgCY0Vx9nq4bBo4oAGcUCDOKBBHNAgDmgQBzSIAxrEAQ3XMjyOr0nOVw+HRTuSZDvigLk2Ig5oepZhcVyonwx1NiMOaHqevb2tOjfFWKj2ILuL41u8ymWFHE/yMzuP4+I0M2E6a+nHsRVxsMLOJHmV+XFsJjk13TTYP84meZTkSZL7SS5NOwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBV/QXuHiQw0QrFNwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 61:
/*!*****************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/aboutus.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 62:
/*!**************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/help.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 63:
/*!***********************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/privacypolicy.png ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 64:
/*!********************************************************************************************!*\
  !*** C:/Users/fighting/Desktop/jihua/jihua-client/static/personcenter_icon/clearcache.png ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 75:
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

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map