import { TSProxy } from './TSProxy';

// Get the port from command line args.
const port = parseInt(process.argv[2], 10);
const proxyServer = new TSProxy('browserleaks.com', port);
proxyServer.start();
