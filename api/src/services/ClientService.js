const _client = require('../../clients.mock');
const {findNameInArray} = require('./UtilsService')

module.exports = {
    get allClients() {
        const countRealties = (enterprises) => {
            return enterprises.reduce((previousValue, currentValue) => {
                previousValue += Number(currentValue.realties);

                return previousValue;
            }, 0);
        }

        return _client.map(cli => {
            return {
                _id: cli._id,
                name: cli.name,
                image_src: cli.image_src,
                enterprises_amount: cli.enterprises.length,
                realties_amount: countRealties(cli.enterprises),
            }
        });
    },

    get enterprises() {
        const copyClient = _client.slice();
        return copyClient.flatMap(client => {
            return client.enterprises.map(enterprise => {

                const {_id, name, image_src, realties: realties_amount} = enterprise;

                return {
                    _id,
                    name,
                    image_src,
                    realties_amount,
                    client_name: client.name
                };
            });
        });
    },

    get totals() {
        const totals = {
            clients: this.allClients.length,
            enterprises: 0,
            realties: 0
        }

        return this.allClients.reduce((previousValue, currentValue) => {
            previousValue.enterprises += currentValue.enterprises_amount;
            previousValue.realties += currentValue.realties_amount;

            return previousValue;
        }, totals);
    },

    totalsByClientId(clientId) {
        const {
            enterprises_amount = 0,
            realties_amount = 0
        } = this.allClients.find(client => client._id === clientId) || {};

        return {enterprises: enterprises_amount, realties: realties_amount};
    },

    findByName(name) {
        return findNameInArray(name, this.allClients);
    },

    async findById(clientId) {
        const client = this.allClients.find(client => client._id === clientId);

        if (client) {
            delete client.enterprises_amount;
            delete client.realties_amount;
        } else {
            throw {message: 'Cliente não encontrado.', status: 400};
        }

        return client;
    },

    findEnterprisesByClientId(clientId) {
        let {enterprises = []} = _client.find(client => client._id === clientId) || {};

        enterprises = enterprises.map(enterprise => {
            const {_id, name, image_src, realties: realties_amount} = enterprise;

            return {
                _id,
                name,
                image_src,
                realties_amount,
            };
        });

        return enterprises;
    },

    findEnterprisesByName(name) {
        return findNameInArray(name, this.enterprises);
    },

    findEnterprisesByClientIdAndName(clientId, name) {
        return findNameInArray(name, this.findEnterprisesByClientId(clientId));
    },

};
