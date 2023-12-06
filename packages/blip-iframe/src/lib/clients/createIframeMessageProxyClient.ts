import { IframeMessageProxy } from "iframe-message-proxy";

export function createIframeMessageProxyClient() {
  return IframeMessageProxy.sendMessage;
}
