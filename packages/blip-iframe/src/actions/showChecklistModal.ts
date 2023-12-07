import { sendMessage } from '../lib';

export interface ShowChecklistModalParams {}

// TODO: Implement
export function showChecklistModal(
  params?: ShowChecklistModalParams,
  sender = sendMessage
) {
  return sender<ShowChecklistModalResponse>({
    action: 'showChecklistModal',
  });
}

export interface ShowChecklistModalRequest {
  action: 'showChecklistModal';
  // content: {
  //   inputs?: Record<string, unknown>;
  //   steps?: unknown[];
  //   nextButtonText?: string;
  //   backButtonText?: string;
  //   finishButtonText?: string;
  //   hideProgressBar?: boolean;
  //   firstProgressStep?: number;
  //   trackingId?: string;
  // };
}

export type ShowChecklistModalResponse = string;
