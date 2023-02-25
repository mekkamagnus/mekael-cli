#!/usr/bin/env node
import packageJSON from './package.json' assert { type: 'json' };
import welcome from 'cli-welcome';

// Clears the console
console.log();

welcome({
  title: packageJSON.name,
  tagline: `Hey, nice to meet you!`,
  description: packageJSON.description,
  version: packageJSON.version,
  bgColor: `#AFE1AF`,
  color: `#FFFFFF`,
  bold: true,
  clear: true,
});
console.log(`
Mekael Turner - Developer

I'm an indie programmer with a passion for fundamentals, creativity, cooperation, application, and results.

🐦 Twitter:  https://www.twitter.com/mekealturner
📖 Github:   https://www.github.com/mekkamagnus
🗺️  Blog:     https://mekkamagnus.github.io

`);
