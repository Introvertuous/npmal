#!/usr/bin/env node

import npmal from 'commander';
import snag from './commands/snag';

import { description, version } from '../package.json';

npmal.version(version).description(description);

npmal
  .command('snag <name>')
  .alias('s')
  .description('snags a particular npmjs name')
  .action(snag);

  npmal.parse(process.argv);

if (npmal.args.length === 0) {
  npmal.help();
}
