import imp from '../imp';

export type SegmentMethod =
  | 'createTrack'
  | 'createApplicationTrack'
  | 'resetAccount'
  | 'setAccount'
  | 'createApplicationTrack'
  | 'createOrganizationTrack';

export interface SegmentParams {
  /**
   * The analytics service method to be used.
   */
  method: SegmentMethod;
  /**
   * The method parameters.
   */
  parameters: {
    /**
     * The event to be tracked.
     */
    trackEvent?: string;
    /**
     * The payload data to be sent along with the event.
     */
    payload?: Record<string, unknown>;
    /**
     * The application data to be sent along with the event.
     */
    application?: Record<string, unknown>;
  };
}

/**
 * Makes calls to the platform's analytics API.
 * @param params The segment parameters
 */
export async function segment(params: SegmentParams) {
  return await imp.sendMessage({
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
