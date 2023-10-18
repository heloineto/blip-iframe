import imp from '../imp';

interface ShowAlertParams {
  variant: string;
  icon: string;
  title: string;
  body: string;
  buttons: {
    cancel?: string;
    confirm: string;
  };
}

/**
 * Shows an modal-like alert on the main platform. It has two buttons, one for confirmation and one for cancelation.
 * @param params The parameters for the alert.
 * @returns A promise that resolves to true if the user confirmed the alert, false otherwise.
 */
export function showAlert(params: ShowAlertParams) {
  return imp.sendMessage<ShowAlertResponse>({
    action: 'showAlert',
    content: params,
  });
}

export interface ShowAlertRequest {
  action: 'showAlert';
  content: {
    variant: string;
    icon: string;
    title: string;
    body: string;
    buttons: {
      cancel?: string;
      confirm: string;
    };
  };
}

export type ShowAlertResponse = boolean;
