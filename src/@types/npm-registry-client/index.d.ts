declare module 'npm-registry-client' {
  import { Readable } from 'stream';

  interface Metadata {
    name: String;
    version: String;
  }

  interface PassCredentials {
    username: String;
    password: String;
    email: String;
  }

  interface TokenCredentials {
    token: String;
  }

  interface PublishParams {
    metadata: Metadata;
    access: String;
    body: Readable;
    auth: PassCredentials | TokenCredentials;
  }

  type PublishCallback = (error: any, data: any, raw: any, res: any) => void;

  export default class registry {
    readonly publish: (
      uri: String,
      params: PublishParams,
      cb: PublishCallback
    ) => void;
  }
}
