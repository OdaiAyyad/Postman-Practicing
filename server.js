const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

// Use default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use json-server-auth
server.use(auth);

// Use the router
server.use(router);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on http://localhost:${PORT}`);
});