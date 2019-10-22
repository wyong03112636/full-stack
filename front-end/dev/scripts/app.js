/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/art-template/lib/compile/runtime.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/·王勇/Desktop/full-stack/front-end/node_modules/art-template/lib/compile/runtime.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/*! art-template@runtime | https://github.com/aui/art-template */\n\nvar globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};\n\nvar runtime = Object.create(globalThis);\nvar ESCAPE_REG = /[\"&'<>]/;\n\n/**\n * 编码模板输出的内容\n * @param  {any}        content\n * @return {string}\n */\nruntime.$escape = function (content) {\n    return xmlEscape(toString(content));\n};\n\n/**\n * 迭代器，支持数组与对象\n * @param {array|Object} data\n * @param {function}     callback\n */\nruntime.$each = function (data, callback) {\n    if (Array.isArray(data)) {\n        for (var i = 0, len = data.length; i < len; i++) {\n            callback(data[i], i);\n        }\n    } else {\n        for (var _i in data) {\n            callback(data[_i], _i);\n        }\n    }\n};\n\n// 将目标转成字符\nfunction toString(value) {\n    if (typeof value !== 'string') {\n        if (value === undefined || value === null) {\n            value = '';\n        } else if (typeof value === 'function') {\n            value = toString(value.call(value));\n        } else {\n            value = JSON.stringify(value);\n        }\n    }\n\n    return value;\n}\n\n// 编码 HTML 内容\nfunction xmlEscape(content) {\n    var html = '' + content;\n    var regexResult = ESCAPE_REG.exec(html);\n    if (!regexResult) {\n        return content;\n    }\n\n    var result = '';\n    var i = void 0,\n        lastIndex = void 0,\n        char = void 0;\n    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n        switch (html.charCodeAt(i)) {\n            case 34:\n                char = '&#34;';\n                break;\n            case 38:\n                char = '&#38;';\n                break;\n            case 39:\n                char = '&#39;';\n                break;\n            case 60:\n                char = '&#60;';\n                break;\n            case 62:\n                char = '&#62;';\n                break;\n            default:\n                continue;\n        }\n\n        if (lastIndex !== i) {\n            result += html.substring(lastIndex, i);\n        }\n\n        lastIndex = i + 1;\n        result += char;\n    }\n\n    if (lastIndex !== i) {\n        return result + html.substring(lastIndex, i);\n    } else {\n        return result;\n    }\n}\n\nmodule.exports = runtime;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///C:/Users/%C2%B7%E7%8E%8B%E5%8B%87/Desktop/full-stack/front-end/node_modules/art-template/lib/compile/runtime.js?");

/***/ }),

/***/ "../../node_modules/art-template/lib/runtime.js":
/*!******************************************************************************************!*\
  !*** C:/Users/·王勇/Desktop/full-stack/front-end/node_modules/art-template/lib/runtime.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./compile/runtime */ \"../../node_modules/art-template/lib/compile/runtime.js\");\n\n//# sourceURL=webpack:///C:/Users/%C2%B7%E7%8E%8B%E5%8B%87/Desktop/full-stack/front-end/node_modules/art-template/lib/runtime.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "../scripts/app.js":
/*!*************************!*\
  !*** ../scripts/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/layout */ \"../scripts/controllers/layout.js\");\n/* harmony import */ var _controllers_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/users */ \"../scripts/controllers/users.js\");\n\r\n\n\n//# sourceURL=webpack:///../scripts/app.js?");

/***/ }),

/***/ "../scripts/controllers/layout.js":
/*!****************************************!*\
  !*** ../scripts/controllers/layout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_layout_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/layout.art */ \"../scripts/views/layout.art\");\n/* harmony import */ var _views_layout_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_layout_art__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Layout {\r\n  constructor() {\r\n    this.render()\r\n  }\r\n\r\n  render() {\r\n    let html = _views_layout_art__WEBPACK_IMPORTED_MODULE_0___default()()\r\n    $('#root').html(html)\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Layout());\r\n\n\n//# sourceURL=webpack:///../scripts/controllers/layout.js?");

/***/ }),

/***/ "../scripts/controllers/users.js":
/*!***************************************!*\
  !*** ../scripts/controllers/users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_nav_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nav.art */ \"../scripts/views/nav.art\");\n/* harmony import */ var _views_nav_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_nav_art__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/http */ \"../scripts/models/http.js\");\n\r\n\r\nclass Users {\r\n  constructor() {\r\n    this.render()\r\n  }\r\n\r\n  render() {\r\n    let html = _views_nav_art__WEBPACK_IMPORTED_MODULE_0___default()()\r\n    $('#nav').html(html)\r\n\r\n    // 提交\r\n    $('#btn-submit').on('click', this.handleSubmit.bind(this))\r\n  }\r\n\r\n  async handleSubmit() {\r\n      let data = $('.form-horizontal').serialize();\r\n      let result = await _models_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get({\r\n        url:'/api/users/signup',\r\n        type:'POST',\r\n        data,\r\n      })\r\n      this.handleSubmitSucc(result);\r\n   \r\n  }\r\n\r\n  handleSubmitSucc(result) {\r\n    console.log(result)\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Users());\n\n//# sourceURL=webpack:///../scripts/controllers/users.js?");

/***/ }),

/***/ "../scripts/models/http.js":
/*!*********************************!*\
  !*** ../scripts/models/http.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    get({url, type=\"GET\", data=''}){\r\n       return $.ajax({\r\n            url: '/api/users/signup',\r\n            type: type,\r\n            data:data,\r\n            dataType:'json',\r\n            success: (result)=>{\r\n               return result\r\n            } \r\n        })\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///../scripts/models/http.js?");

/***/ }),

/***/ "../scripts/views/layout.art":
/*!***********************************!*\
  !*** ../scripts/views/layout.art ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ \"../../node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<!-- Main Header -->\\r\\n<header class=\"main-header\">\\r\\n\\r\\n  <!-- Logo -->\\r\\n  <a href=\"index2.html\" class=\"logo\">\\r\\n    <!-- mini logo for sidebar mini 50x50 pixels -->\\r\\n    <span class=\"logo-mini\"><b>识货</b></span>\\r\\n    <!-- logo for regular state and mobile devices -->\\r\\n    <span class=\"logo-lg\"><b>识货</b>管理系统</span>\\r\\n  </a>\\r\\n\\r\\n  <!-- Header Navbar -->\\r\\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" id=\"nav\"></nav>\\r\\n</header>\\r\\n<!-- Left side column. contains the logo and sidebar -->\\r\\n<aside class=\"main-sidebar\">\\r\\n\\r\\n  <!-- sidebar: style can be found in sidebar.less -->\\r\\n  <section class=\"sidebar\">\\r\\n\\r\\n    <!-- Sidebar user panel (optional) -->\\r\\n    <div class=\"user-panel\">\\r\\n      <div class=\"pull-left image\">\\r\\n        <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\r\\n      </div>\\r\\n      <div class=\"pull-left info\">\\r\\n        <p>Alexander Pierce</p>\\r\\n        <!-- Status -->\\r\\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> 在线</a>\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <!-- search form (Optional) -->\\r\\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\\r\\n      <div class=\"input-group\">\\r\\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\\r\\n            <span class=\"input-group-btn\">\\r\\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\\r\\n              </button>\\r\\n            </span>\\r\\n      </div>\\r\\n    </form>\\r\\n    <!-- /.search form -->\\r\\n\\r\\n    <!-- Sidebar Menu -->\\r\\n    <ul class=\"sidebar-menu\">\\r\\n      <li class=\"header\">HEADER</li>\\r\\n      <!-- Optionally, you can add icons to the links -->\\r\\n      <li class=\"active\"><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Link</span></a></li>\\r\\n      <li><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Another Link</span></a></li>\\r\\n      <li class=\"treeview\">\\r\\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>多级菜单</span>\\r\\n          <span class=\"pull-right-container\">\\r\\n            <i class=\"fa fa-angle-left pull-right\"></i>\\r\\n          </span>\\r\\n        </a>\\r\\n        <ul class=\"treeview-menu\">\\r\\n          <li><a href=\"#\">Link in level 2</a></li>\\r\\n          <li><a href=\"#\">Link in level 2</a></li>\\r\\n        </ul>\\r\\n      </li>\\r\\n    </ul>\\r\\n    <!-- /.sidebar-menu -->\\r\\n  </section>\\r\\n  <!-- /.sidebar -->\\r\\n</aside>\\r\\n\\r\\n<!-- Content Wrapper. Contains page content -->\\r\\n<div class=\"content-wrapper\">\\r\\n  <!-- Content Header (Page header) -->\\r\\n  <section class=\"content-header\">\\r\\n    <h1>\\r\\n      Page Header\\r\\n      <small>Optional description</small>\\r\\n    </h1>\\r\\n    <ol class=\"breadcrumb\">\\r\\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\\r\\n      <li class=\"active\">Here</li>\\r\\n    </ol>\\r\\n  </section>\\r\\n\\r\\n  <!-- Main content -->\\r\\n  <section class=\"content\">\\r\\n\\r\\n    <!-- Your Page Content Here -->\\r\\n\\r\\n  </section>\\r\\n  <!-- /.content -->\\r\\n</div>\\r\\n<!-- /.content-wrapper -->\\r\\n\\r\\n<!-- Main Footer -->\\r\\n<footer class=\"main-footer\">\\r\\n  <!-- To the right -->\\r\\n  <div class=\"pull-right hidden-xs\">\\r\\n    Anything you want\\r\\n  </div>\\r\\n  <!-- Default to the left -->\\r\\n  <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\\r\\n</footer>\\r\\n\\r\\n<!-- Control Sidebar -->\\r\\n<aside class=\"control-sidebar control-sidebar-dark\">\\r\\n  <!-- Create the tabs -->\\r\\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\\r\\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\\r\\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\\r\\n  </ul>\\r\\n  <!-- Tab panes -->\\r\\n  <div class=\"tab-content\">\\r\\n    <!-- Home tab content -->\\r\\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\\r\\n      <h3 class=\"control-sidebar-heading\">近期活动</h3>\\r\\n      <ul class=\"control-sidebar-menu\">\\r\\n        <li>\\r\\n          <a href=\"javascript::;\">\\r\\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\\r\\n\\r\\n            <div class=\"menu-info\">\\r\\n              <h4 class=\"control-sidebar-subheading\">Langdon 的生日</h4>\\r\\n\\r\\n              <p>Will be 23 on April 24th</p>\\r\\n            </div>\\r\\n          </a>\\r\\n        </li>\\r\\n      </ul>\\r\\n      <!-- /.control-sidebar-menu -->\\r\\n\\r\\n      <h3 class=\"control-sidebar-heading\"> 任务进度</h3>\\r\\n      <ul class=\"control-sidebar-menu\">\\r\\n        <li>\\r\\n          <a href=\"javascript::;\">\\r\\n            <h4 class=\"control-sidebar-subheading\">\\r\\n                自定义模板设计\\r\\n              <span class=\"pull-right-container\">\\r\\n                <span class=\"label label-danger pull-right\">70%</span>\\r\\n              </span>\\r\\n            </h4>\\r\\n\\r\\n            <div class=\"progress progress-xxs\">\\r\\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\\r\\n            </div>\\r\\n          </a>\\r\\n        </li>\\r\\n      </ul>\\r\\n      <!-- /.control-sidebar-menu -->\\r\\n\\r\\n    </div>\\r\\n    <!-- /.tab-pane -->\\r\\n    <!--  统计信息选项卡内容 -->\\r\\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\"> 统计信息选项卡内容</div>\\r\\n    <!-- /.tab-pane -->\\r\\n    <!-- Settings tab content -->\\r\\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\\r\\n      <form method=\"post\">\\r\\n        <h3 class=\"control-sidebar-heading\">常规设置项</h3>\\r\\n\\r\\n        <div class=\"form-group\">\\r\\n          <label class=\"control-sidebar-subheading\">\\r\\n            报告面板用法\\r\\n            <input type=\"checkbox\" class=\"pull-right\" checked>\\r\\n          </label>\\r\\n\\r\\n          <p>\\r\\n            常规设置选项的相关信息\\r\\n          </p>\\r\\n        </div>\\r\\n        <!-- /.form-group -->\\r\\n      </form>\\r\\n    </div>\\r\\n    <!-- /.tab-pane -->\\r\\n  </div>\\r\\n</aside>\\r\\n<!-- /.control-sidebar -->\\r\\n<!-- Add the sidebar\\'s background. This div must be placed\\r\\n      immediately after the control sidebar -->\\r\\n<div class=\"control-sidebar-bg\"></div>';\n    return $$out;\n};\n\n//# sourceURL=webpack:///../scripts/views/layout.art?");

/***/ }),

/***/ "../scripts/views/nav.art":
/*!********************************!*\
  !*** ../scripts/views/nav.art ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ \"../../node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<!-- Sidebar toggle button-->\\r\\n<a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\\r\\n  <span class=\"sr-only\">切换导航</span>\\r\\n</a>\\r\\n<!-- Navbar Right Menu -->\\r\\n<div class=\"navbar-custom-menu\">\\r\\n  <ul class=\"nav navbar-nav\">\\r\\n    <!-- Messages: style can be found in dropdown.less-->\\r\\n    <li class=\"dropdown messages-menu\">\\r\\n      <!-- Menu toggle button -->\\r\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\r\\n        <i class=\"fa fa-envelope-o\"></i>\\r\\n        <span class=\"label label-success\">4</span>\\r\\n      </a>\\r\\n      <ul class=\"dropdown-menu\">\\r\\n        <li class=\"header\">You have 4 messages</li>\\r\\n        <li>\\r\\n          <!-- inner menu: contains the messages -->\\r\\n          <ul class=\"menu\">\\r\\n            <li><!-- start message -->\\r\\n              <a href=\"#\">\\r\\n                <div class=\"pull-left\">\\r\\n                  <!-- User Image -->\\r\\n                  <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\r\\n                </div>\\r\\n                <!-- Message title and timestamp -->\\r\\n                <h4>\\r\\n                  Support Team\\r\\n                  <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\\r\\n                </h4>\\r\\n                <!-- The message -->\\r\\n                <p>Why not buy a new awesome theme?</p>\\r\\n              </a>\\r\\n            </li>\\r\\n            <!-- end message -->\\r\\n          </ul>\\r\\n          <!-- /.menu -->\\r\\n        </li>\\r\\n        <li class=\"footer\"><a href=\"#\">查看所有消息</a></li>\\r\\n      </ul>\\r\\n    </li>\\r\\n    <!-- /.messages-menu -->\\r\\n\\r\\n    <!-- Notifications Menu -->\\r\\n    <li class=\"dropdown notifications-menu\">\\r\\n      <!-- Menu toggle button -->\\r\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\r\\n        <i class=\"fa fa-bell-o\"></i>\\r\\n        <span class=\"label label-warning\">10</span>\\r\\n      </a>\\r\\n      <ul class=\"dropdown-menu\">\\r\\n        <li class=\"header\">You have 10 notifications</li>\\r\\n        <li>\\r\\n          <!-- Inner Menu: contains the notifications -->\\r\\n          <ul class=\"menu\">\\r\\n            <li><!-- start notification -->\\r\\n              <a href=\"#\">\\r\\n                <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\\r\\n              </a>\\r\\n            </li>\\r\\n            <!-- end notification -->\\r\\n          </ul>\\r\\n        </li>\\r\\n        <li class=\"footer\"><a href=\"#\">全部</a></li>\\r\\n      </ul>\\r\\n    </li>\\r\\n    <!-- Tasks Menu -->\\r\\n    <li class=\"dropdown tasks-menu\">\\r\\n      <!-- Menu Toggle Button -->\\r\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\r\\n        <i class=\"fa fa-flag-o\"></i>\\r\\n        <span class=\"label label-danger\">9</span>\\r\\n      </a>\\r\\n      <ul class=\"dropdown-menu\">\\r\\n        <li class=\"header\">You have 9 tasks</li>\\r\\n        <li>\\r\\n          <!-- Inner menu: contains the tasks -->\\r\\n          <ul class=\"menu\">\\r\\n            <li><!-- Task item -->\\r\\n              <a href=\"#\">\\r\\n                <!-- Task title and progress text -->\\r\\n                <h3>\\r\\n                  设计按钮\\r\\n                  <small class=\"pull-right\">20%</small>\\r\\n                </h3>\\r\\n                <!-- The progress bar -->\\r\\n                <div class=\"progress xs\">\\r\\n                  <!-- Change the css width attribute to simulate progress -->\\r\\n                  <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\\r\\n                    <span class=\"sr-only\">20% Complete</span>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </a>\\r\\n            </li>\\r\\n            <!-- end task item -->\\r\\n          </ul>\\r\\n        </li>\\r\\n        <li class=\"footer\">\\r\\n          查看所有任务\\r\\n        </li>\\r\\n      </ul>\\r\\n    </li>\\r\\n    <!-- User Account Menu -->\\r\\n    <li class=\"dropdown user user-menu\">\\r\\n      <!-- Menu Toggle Button -->\\r\\n      <a href=\"#\" class=\"dropdown-toggle btn-user\" data-toggle=\"dropdown\">\\r\\n        <!-- The user image in the navbar-->\\r\\n        <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"user-image\" alt=\"User Image\">\\r\\n        <!-- hidden-xs hides the username on small devices so only the image appears. -->\\r\\n        <span class=\"hidden-xs\" id=\"btn-signin\">登录</span>\\r\\n        <span class=\"hidden-xs\" id=\"btn-signup\">注册</span>\\r\\n      </a>\\r\\n      <ul class=\"dropdown-menu\">\\r\\n        <!-- The user image in the menu -->\\r\\n        <li class=\"user-header\">\\r\\n          <div class=\"box box-info\">\\r\\n            <!-- /.box-header -->\\r\\n            <!-- form start -->\\r\\n            <form class=\"form-horizontal\">\\r\\n              <div class=\"box-body\">\\r\\n                <div class=\"form-group\">\\r\\n                  <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">账号</label>\\r\\n\\r\\n                  <div class=\"col-sm-9\">\\r\\n                    <input type=\"email\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Email\">\\r\\n                  </div>\\r\\n                </div>\\r\\n                <div class=\"form-group\">\\r\\n                  <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">密码</label>\\r\\n\\r\\n                  <div class=\"col-sm-9\">\\r\\n                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\">\\r\\n                  </div>\\r\\n                </div>\\r\\n                \\r\\n              </div>\\r\\n              \\r\\n            </form>\\r\\n          </div>\\r\\n        </li>\\r\\n        <!--li class=\"user-header\">\\r\\n          <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\r\\n\\r\\n          <p>\\r\\n            Alexander Pierce - Web Developer\\r\\n            <small>Member since Nov. 2012</small>\\r\\n          </p>\\r\\n        </li-->\\r\\n        <!-- Menu Body -->\\r\\n        <!--li class=\"user-body\">\\r\\n          <div class=\"row\">\\r\\n            <div class=\"col-xs-4 text-center\">\\r\\n              <a href=\"#\">花朵</a>\\r\\n            </div>\\r\\n            <div class=\"col-xs-4 text-center\">\\r\\n              <a href=\"#\">销量</a>\\r\\n            </div>\\r\\n            <div class=\"col-xs-4 text-center\">\\r\\n              <a href=\"#\">好友</a>\\r\\n            </div>\\r\\n          </div-->\\r\\n          <!-- /.row -->\\r\\n        </li>\\r\\n        <!-- Menu Footer-->\\r\\n        <li class=\"user-footer\">\\r\\n          <div class=\"pull-left\">\\r\\n            <a href=\"#\" class=\"btn btn-default btn-flat\">取消</a>\\r\\n          </div>\\r\\n          <div class=\"pull-right\" id=\"btn-submit\">\\r\\n            <a href=\"javascript:;\" class=\"btn btn-primary btn-flat\">确定</a>\\r\\n          </div>\\r\\n        </li>\\r\\n      </ul>\\r\\n    </li>\\r\\n    <!-- Control Sidebar Toggle Button -->\\r\\n    <li>\\r\\n      <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\\r\\n    </li>\\r\\n  </ul>\\r\\n</div>';\n    return $$out;\n};\n\n//# sourceURL=webpack:///../scripts/views/nav.art?");

/***/ })

/******/ });