module.exports = {
    findNameInArray(name, array) {
        if ((!name && name.trim() === '') || !Array.isArray(array)) return [];

        return array.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }
};
