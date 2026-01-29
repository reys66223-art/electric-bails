const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n⚡ Electric Blue Baileys ⚡\n` +
    `\n❌ This package requires Node.js 20+ to run properly.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 20+ to continue.\n`
  );
  process.exit(1);
}
