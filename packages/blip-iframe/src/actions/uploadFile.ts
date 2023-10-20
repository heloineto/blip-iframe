import imp from '../imp';

export interface UploadFileParams {
  /**
   * The file to be uploaded. Can be a data URI string, a File or Blob object.
   */
  file: 'string' | File | Blob;
  /**
   * The type of the file.
   */
  type?: string;
}

/**
 * Uploads a file to Blip's public media server.
 * @param params The file parameters to be uploaded.
 * @returns The URL of the uploaded file.
 */
export function uploadFile(params: UploadFileParams) {
  return imp.sendMessage<UploadFileResponse>({
    action: 'uploadFile',
    content: params,
  });
}

export interface UploadFileRequest {
  action: 'uploadFile';
  content: {
    file: 'string' | File | Blob;
    type?: string;
  };
}

export type UploadFileResponse = string;
