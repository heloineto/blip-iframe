// TODO: Verify, unknown
export async function redirectToApplicationList() {
  // return imp.sendMessage<RedirectToApplicationListResponse>({
  //   action: 'redirectToApplicationList',
  // });
}

export interface RedirectToApplicationListRequest {
  action: 'redirectToApplicationList';
}

export interface RedirectToApplicationListResponse {}
