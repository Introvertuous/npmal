const token = process.env.NPMAL_TOKEN;

if (token === undefined) {
  throw new Error(
    'environment variable NPMAL_TOKEN contains an invalid token, please set a proper token, see https://docs.npmjs.com/creating-and-viewing-authentication-tokens'
  );
}

export default { token };
