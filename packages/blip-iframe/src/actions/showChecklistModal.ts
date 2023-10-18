import imp from '../imp';

// TODO: Implement
export function showChecklistModal() {
  return imp.sendMessage<ShowChecklistModalResponse>({
    action: 'showChecklistModal',
  });
}

export interface ShowChecklistModalRequest {
  action: 'showChecklistModal';
  content: {
    inputs?: Record<string, unknown>;
    steps?: unknown[];
    nextButtonText?: string;
    backButtonText?: string;
    finishButtonText?: string;
    hideProgressBar?: boolean;
    firstProgressStep?: number;
    trackingId?: string;
  };
}

export type ShowChecklistModalResponse = string;
