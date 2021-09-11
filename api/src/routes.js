const ClientController = require('./controllers/ClientController');

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", ClientController.getAllClients);

  /** Get clients by name */
  app.get("/name/:name", ClientController.getClientByName);

  /** Get general totals */
  app.get("/totals", ClientController.getTotals);

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", ClientController.getEnterprisesByClientId);
  
  /** Get client totals */
  app.get("/:client_id/totals", ClientController.getClientTotals);

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", ClientController.getEnterprisesByClientIdAndName);

  /** Get all enterprises */
  app.get("/enterprise", ClientController.getEnterprises);

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", ClientController.getEnterprisesByName);

  /** Get a client by _id */
  app.get("/:_id", ClientController.getClientById);
};
