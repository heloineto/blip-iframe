import { sendMessage } from '../lib';

export type SegmentMethod =
  | 'createTrack'
  | 'createApplicationTrack'
  | 'resetAccount'
  | 'setAccount'
  | 'createOrganizationTrack';

export interface SegmentParams {
  /**
   * The analytics service method to be used
   */
  method: SegmentMethod;
  /**
   * The method parameters
   */
  parameters: {
    /**
     * The event to be tracked.
     */
    trackEvent?: string;
    /**
     * The payload data to be sent along with the event
     */
    payload?: Record<string, unknown>;
    /**
     * The application data to be sent along with the event
     */
    application?: Record<string, unknown>;
  };
}

/**
 * Makes calls to the platform's analytics API.
 * @param params The segment parameters
 */
export function segment(params: SegmentParams, sender = sendMessage) {
  return sender({
    action: 'segment',
    content: params,
  });
}

export interface SegmentRequest {
  action: 'segment';
  content: {
    method: SegmentMethod;
    parameters: {
      trackEvent?: string;
      payload?: Record<string, unknown>;
      application?: Record<string, unknown>;
    };
  };
}
