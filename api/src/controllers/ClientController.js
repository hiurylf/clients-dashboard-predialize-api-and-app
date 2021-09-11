const ClientService = require("../services/ClientService");

module.exports = {
    async getAllClients(req, res) {
        try {
            const clients = ClientService.allClients;

            return res.json(clients);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getClientByName(req, res) {
        try {
            const { name } = req.params;

            const clients = ClientService.findByName(name);

            return res.json(clients);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getClientById(req, res) {
        try {
            const { _id } = req.params;

            const client = await ClientService.findById(_id);

            return res.json(client);
        } catch (error) {
            const {status = 500, message} = error || {};
            return res.status(status).json(message);
        }
    },

    async getEnterprisesByClientId(req, res) {
        try {
            const { client_id } = req.params;

            const client = ClientService.findEnterprisesByClientId(client_id);

            return res.json(client);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getEnterprisesByClientIdAndName(req, res) {
        try {
            const { client_id, name } = req.params;

            const enterprises = ClientService.findEnterprisesByClientIdAndName(client_id, name);

            return res.json(enterprises);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getEnterprises(req, res) {
        try {
            const enterprises = ClientService.enterprises;

            return res.json(enterprises);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getEnterprisesByName(req, res) {
        try {
            const { name } = req.params;

            const enterprises = ClientService.findEnterprisesByName(name);

            return res.json(enterprises);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getTotals(req, res) {
        try {
            const totals = ClientService.totals;

            return res.json(totals);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getClientTotals(req, res) {
        try {
            const { client_id } = req.params;

            const totals = ClientService.totalsByClientId(client_id);

            return res.json(totals);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

};
