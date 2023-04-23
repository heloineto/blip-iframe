interface Options {
    prefix?: string;
    caller?: string;
    receiveWindow?: Window;
    targetWindow?: Window;
    shouldHandleMessage?: (message: {
        message: Message;
        trackingProperties: TrackingProperties;
    }) => boolean;
}

export default Options;
