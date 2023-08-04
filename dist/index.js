"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_iframe_message_proxy19 = require("iframe-message-proxy");

// src/actions/getApplication.ts
var import_iframe_message_proxy = require("iframe-message-proxy");
function getApplication(fullIdentity) {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy.IframeMessageProxy.sendMessage({
        action: "getApplication",
        content: fullIdentity != null ? fullIdentity : null
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/actions/getCurrentLanguage.ts
var import_iframe_message_proxy2 = require("iframe-message-proxy");
function getCurrentLanguage() {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy2.IframeMessageProxy.sendMessage({
        action: "getCurrentLanguage"
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/actions/hasPermissions.ts
var import_iframe_message_proxy3 = require("iframe-message-proxy");
function hasPermissions(permission, area) {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy3.IframeMessageProxy.sendMessage({
        action: "hasPermissions",
        content: {
          permissionType: permission,
          customArea: area
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/actions/heightChange.ts
var import_iframe_message_proxy4 = require("iframe-message-proxy");
function heightChange(height) {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy4.IframeMessageProxy.sendMessage({
      action: "heightChange",
      content: height,
      fireAndForget: true
    });
  });
}

// src/actions/hideNavbar.ts
var import_iframe_message_proxy5 = require("iframe-message-proxy");
var hideNavbar = () => __async(void 0, null, function* () {
  yield import_iframe_message_proxy5.IframeMessageProxy.sendMessage({
    action: "hideNavbar"
  });
});
var hideNavbar_default = hideNavbar;

// src/actions/segment.ts
var import_iframe_message_proxy6 = require("iframe-message-proxy");
function segment(content) {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy6.IframeMessageProxy.sendMessage({
      action: "segment",
      content
    });
  });
}

// src/actions/sendCommand.ts
var import_iframe_message_proxy7 = require("iframe-message-proxy");
function sendCommand(content) {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy7.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/actions/showModal.ts
var import_iframe_message_proxy8 = require("iframe-message-proxy");
function showModal(content) {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy8.IframeMessageProxy.sendMessage({
      action: "showModal",
      content
    });
  });
}

// src/actions/showNavbar.ts
var import_iframe_message_proxy9 = require("iframe-message-proxy");
var showNavbar = () => __async(void 0, null, function* () {
  yield import_iframe_message_proxy9.IframeMessageProxy.sendMessage({
    action: "hideNavbar"
  });
});
var showNavbar_default = showNavbar;

// src/actions/startLoading.ts
var import_iframe_message_proxy10 = require("iframe-message-proxy");
function startLoading() {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy10.IframeMessageProxy.sendMessage({ action: "startLoading" });
  });
}

// src/actions/stopLoading.ts
var import_iframe_message_proxy11 = require("iframe-message-proxy");
function stopLoading() {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy11.IframeMessageProxy.sendMessage({ action: "stopLoading" });
  });
}

// src/actions/toast.ts
var import_iframe_message_proxy12 = require("iframe-message-proxy");
function toast(content) {
  return __async(this, null, function* () {
    yield import_iframe_message_proxy12.IframeMessageProxy.sendMessage({
      action: "toast",
      content
    });
  });
}

// src/commands/getAccount.ts
var import_iframe_message_proxy13 = require("iframe-message-proxy");
function getAccount() {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy13.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          command: {
            method: "get",
            uri: "/account"
          },
          destination: "BlipService"
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/commands/getBot.ts
var import_iframe_message_proxy14 = require("iframe-message-proxy");
function getBot(fullIdentity) {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy14.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          destination: "BlipService",
          command: {
            method: "get",
            to: "postmaster@portal.blip.ai",
            uri: `/applications/${fullIdentity}`
          }
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/commands/getBots.ts
var import_iframe_message_proxy15 = require("iframe-message-proxy");
function getBots(tenantId) {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy15.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          timeout: 3e4,
          destination: "BlipService",
          command: {
            method: "get",
            to: "postmaster@portal.blip.ai",
            uri: tenantId === void 0 ? "/applications" : `/tenants/${tenantId}/applications`
          }
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/commands/getPublishedFlow.ts
var import_iframe_message_proxy16 = require("iframe-message-proxy");
function getPublishedFlow() {
  return __async(this, null, function* () {
    try {
      const { response } = yield import_iframe_message_proxy16.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          command: {
            method: "get",
            uri: "/buckets/blip_portal:builder_published_flow"
          }
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/bucket/setVariable.ts
var import_iframe_message_proxy17 = require("iframe-message-proxy");
function setVariable(variableKey, variable) {
  return __async(this, null, function* () {
    try {
      const response = yield import_iframe_message_proxy17.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          destination: "MessagingHubService",
          command: {
            method: "set",
            uri: `/buckets/${variableKey}`,
            type: "application/json",
            resource: variable
          }
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/bucket/getVariable.ts
var import_iframe_message_proxy18 = require("iframe-message-proxy");
function getVariable(variableKey) {
  return __async(this, null, function* () {
    try {
      const response = yield import_iframe_message_proxy18.IframeMessageProxy.sendMessage({
        action: "sendCommand",
        content: {
          destination: "MessagingHubService",
          command: {
            method: "get",
            uri: `/buckets/${variableKey}`
          }
        }
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/index.ts
var actions = {
  getApplication,
  getCurrentLanguage,
  hasPermissions,
  heightChange,
  hideNavbar: hideNavbar_default,
  segment,
  sendCommand,
  showModal,
  showNavbar: showNavbar_default,
  startLoading,
  stopLoading,
  toast
};
var commands = {
  getAccount,
  getBot,
  getBots,
  getPublishedFlow
};
var bucket = {
  setVariable,
  getVariable
};
var iframe = __spreadProps(__spreadValues({}, actions), {
  actions,
  commands,
  bucket,
  imp: import_iframe_message_proxy19.IframeMessageProxy
});
var src_default = iframe;
