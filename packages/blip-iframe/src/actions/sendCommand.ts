import { sendMessage } from '../lib';

export interface SendCommandParams {
  /**
   * The timeout in milliseconds for the command to be executed
   */
  timeout?: number;
  /**
   * The service that will call the command. MessagingHubService is the default.
   */
  destination?: 'BlipService' | 'MessagingHubService' | (string & {});
  /**
   * Properties of the command to be executed
   */
  command: {
    /**
     * Identifier of the envelope, which can be any relevant value for the caller.
     *
     * If the command is sent through an "asynchronous" protocol (that does not guarantee of delivery order of the envelopes, like LIME),
     * it will be used to link a request to a response.
     */
    id?: string;
    /**
     * Identifier of the sender LIME node, in the name@domain/instance format.
     *
     * If a LIME node receives an envelope without this value,
     * it means that the envelope was originated by the remote party.
     */
    from?: string;
    /**
     * Identifier of the destination LIME node of the envelope,
     * in the name@domain/instance format.
     *
     * If the value is left empty in the request, the command will be processed by the connected node (server).
     *
     * Common values are: 'postmaster@desk.msging.net', 'postmaster@portal.blip.ai' and 'postmaster@tunnel.msging.net'
     */
    to?: string;
    /**
     * Acronym for per procurationem.
     * Identifier of a delegate LIME node (a node that received a permission
     * to send on behalf of another), in the name@domain/instance format.
     *
     * This property is useful to get resources in the server owned by
     * different identities, like presence and account information.
     * The value should be defined if the resource of an observe method
     * command is owned by a different identity than the destination.
     */
    pp?: string;
    /**
     * Allows the transport of generic information, in the "name": "value"
     * format. This property is optional for all envelopes.
     *
     * Any value set in this property will not change the behavior
     * of the server.
     *
     * Avoid to use this property to transport any command-related data,
     * like extra parameters.
     */
    metadata?: Record<string, unknown>;
    /**
     * Method for the manipulation of the resource. The possible values are:
     * - get - Gets an existing value of the resource.
     * - set - Sets or updates a for the resource.
     * - merge - Merges the resource document with an existing one. If the resource doesn't exists, it is created.
     * - delete - Deletes a value of the resource or the resource itself.
     * - subscribe - Subscribes to the resource, allowing the originator to be notified when the value of the resource changes in the destination.
     * - unsubscribe - Unsubscribes to the resource, signaling to the destination that the originator do not want to receive further notifications about the resource.
     * - observe - Notify the destination about a change in the resource value of the sender. Commands with this method are one-way and the destination should not send a response for it. Because of that, these commands may not have an id.
     */
    method:
      | 'get'
      | 'set'
      | 'merge'
      | 'delete'
      | 'subscribe'
      | 'unsubscribe'
      | 'observe';
    /**
     * The uniform resource identifier (RFC 3986).
     *
     * The supported scheme is lime, and the authority must be always the
     * identity of the resource owner. In command requests, this identity
     * is always the same of the identity of from envelope property.
     *
     * Since the base URI is always the same for a specific identity
     * (lime://user@domain), the URI can be represented as a fragment,
     * like /groups, instead of lime://user@domain/groups. The URI may
     * also contains a query string for filtering.
     */
    uri: string;
    /**
     * MIME type of the resource. Like the messages, the protocol defines some
     * common resource types, but may exists specific resources to the
     * implementation.
     *
     * This property should be present always when the value of resource
     * property is defined.
     *
     * Common types are: 'application/vnd.lime.presence+json', 'application/vnd.lime.receipt+json', 'application/vnd.lime.ping+json', 'application/vnd.lime.collection+json'
     */
    type?: string;
    /**
     * JSON representation of the resource.
     *
     * It must be present in commands with the methods set and observe and
     * may be present in the method delete. In a command response, must be
     * present in successfully processed command with the method get.
     */
    resource?: unknown;
    /**
     * Result status of the command processing. Mandatory in response commands.
     *
     * The valid values are:
     * - success - The command was processed successfully. In cases of command of method get, the property resource of the response should have a value.
     * - failure - A problem occurred while processing the command. In this case, the property reason of the response should have a value.
     */
    status?: 'success' | 'failure';
    /**
     * If the command was not successfully processed (status = 'failure'), this property should
     * provide more details about the problem.
     */
    reason?: {
      /**
       * Code number of the reason. There are some protocol pre-defined
       * codes, but may exists specific codes for each implementation of
       * the protocol.
       */
      code: number;
      /**
       * Description message of the problem.
       */
      description?: string;
    };
    /**
     * Common states are 'new', 'authenticating'
     */
    state?: 'new' | 'authenticating' | (string & {});
    [key: string]: unknown;
  };
}

/**
 * Sends a command through the Blip Commands API using MessagingHubService (default) or BlipService.
 *
 * Learn more: (https://limeprotocol.org/index.html#command)
 *
 * @param params The parameters of the command
 * @returns The response of the command
 */
export function sendCommand<
  TData = unknown,
  TWrappedResponse extends WrappedSendCommandResponse<TData> = WrappedSendCommandResponse<TData>
>(params: SendCommandParams, sender = sendMessage) {
  return sender<TData, TWrappedResponse>({
    action: 'sendCommand',
    content: params,
  });
}

export interface SendCommandRequest {
  action: 'sendCommand';
  content: {
    timeout?: number;
    destination?: 'BlipService' | 'MessagingHubService' | (string & {});
    command: {
      id?: string;
      from?: string;
      to?: string;
      pp?: string;
      metadata?: Record<string, unknown>;
      method:
        | 'get'
        | 'set'
        | 'merge'
        | 'delete'
        | 'subscribe'
        | 'unsubscribe'
        | 'observe';
      uri: string;
      type?: string;
      resource?: unknown;
      status?: 'success' | 'failure';
      reason?: {
        code: number;
        description?: string;
      };
      state?: 'new' | 'authenticating' | (string & {});
      [key: string]: unknown;
    };
  };
}

export interface WrappedSendCommandResponse<TData> {
  response: TData;
  trackingProperties: { id: string };
}
