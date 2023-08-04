var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
import { IframeMessageProxy as IframeMessageProxy19 } from "iframe-message-proxy";

// src/actions/getApplication.ts
import { IframeMessageProxy } from "iframe-message-proxy";
function getApplication(fullIdentity) {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy2 } from "iframe-message-proxy";
function getCurrentLanguage() {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy2.sendMessage({
        action: "getCurrentLanguage"
      });
      return { response, error: null };
    } catch (error) {
      return { response: null, error };
    }
  });
}

// src/actions/hasPermissions.ts
import { IframeMessageProxy as IframeMessageProxy3 } from "iframe-message-proxy";
function hasPermissions(permission, area) {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy3.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy4 } from "iframe-message-proxy";
function heightChange(height) {
  return __async(this, null, function* () {
    yield IframeMessageProxy4.sendMessage({
      action: "heightChange",
      content: height,
      fireAndForget: true
    });
  });
}

// src/actions/hideNavbar.ts
import { IframeMessageProxy as IframeMessageProxy5 } from "iframe-message-proxy";
var hideNavbar = () => __async(void 0, null, function* () {
  yield IframeMessageProxy5.sendMessage({
    action: "hideNavbar"
  });
});
var hideNavbar_default = hideNavbar;

// src/actions/segment.ts
import { IframeMessageProxy as IframeMessageProxy6 } from "iframe-message-proxy";
function segment(content) {
  return __async(this, null, function* () {
    yield IframeMessageProxy6.sendMessage({
      action: "segment",
      content
    });
  });
}

// src/actions/sendCommand.ts
import { IframeMessageProxy as IframeMessageProxy7 } from "iframe-message-proxy";
function sendCommand(content) {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy7.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy8 } from "iframe-message-proxy";
function showModal(content) {
  return __async(this, null, function* () {
    yield IframeMessageProxy8.sendMessage({
      action: "showModal",
      content
    });
  });
}

// src/actions/showNavbar.ts
import { IframeMessageProxy as IframeMessageProxy9 } from "iframe-message-proxy";
var showNavbar = () => __async(void 0, null, function* () {
  yield IframeMessageProxy9.sendMessage({
    action: "hideNavbar"
  });
});
var showNavbar_default = showNavbar;

// src/actions/startLoading.ts
import { IframeMessageProxy as IframeMessageProxy10 } from "iframe-message-proxy";
function startLoading() {
  return __async(this, null, function* () {
    yield IframeMessageProxy10.sendMessage({ action: "startLoading" });
  });
}

// src/actions/stopLoading.ts
import { IframeMessageProxy as IframeMessageProxy11 } from "iframe-message-proxy";
function stopLoading() {
  return __async(this, null, function* () {
    yield IframeMessageProxy11.sendMessage({ action: "stopLoading" });
  });
}

// src/actions/toast.ts
import { IframeMessageProxy as IframeMessageProxy12 } from "iframe-message-proxy";
function toast(content) {
  return __async(this, null, function* () {
    yield IframeMessageProxy12.sendMessage({
      action: "toast",
      content
    });
  });
}

// src/commands/getAccount.ts
import { IframeMessageProxy as IframeMessageProxy13 } from "iframe-message-proxy";
function getAccount() {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy13.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy14 } from "iframe-message-proxy";
function getBot(fullIdentity) {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy14.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy15 } from "iframe-message-proxy";
function getBots(tenantId) {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy15.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy16 } from "iframe-message-proxy";
function getPublishedFlow() {
  return __async(this, null, function* () {
    try {
      const { response } = yield IframeMessageProxy16.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy17 } from "iframe-message-proxy";
function setVariable(variableKey, variable) {
  return __async(this, null, function* () {
    try {
      const response = yield IframeMessageProxy17.sendMessage({
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
import { IframeMessageProxy as IframeMessageProxy18 } from "iframe-message-proxy";
function getVariable(variableKey) {
  return __async(this, null, function* () {
    try {
      const response = yield IframeMessageProxy18.sendMessage({
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
  imp: IframeMessageProxy19
});
var src_default = iframe;
export {
  src_default as default
};
