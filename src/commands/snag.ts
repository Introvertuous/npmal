import assert from 'assert';
import Registry from 'npm-registry-client';
import { Readable } from 'stream';
import zlib from 'zlib';
import configuration from '../lib/configuration';

const registry = 'https://registry.npmjs.org';
const client = new Registry();
const gzip = zlib.createGzip();

export default async function action(name: string) {
  const metadata = {
    name,
    version: '0.0.0',
  };

  const metadataStream = new Readable();
  metadataStream.push(JSON.stringify(metadata, null, 2));
  metadataStream.push(null);

  client.publish(
    `${registry}/${encodeURIComponent(name)}`,
    {
      access: 'public',
      auth: {
        token: configuration.token,
      },
      body: metadataStream.pipe(gzip),
      metadata,
    },
    (err) => assert(err == null, err)
  );
}
