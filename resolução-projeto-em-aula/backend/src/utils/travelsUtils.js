let findById = (model, id) => {
    let filteredData = model.find((travel) => {
        return travel.id == id
    });
    return filteredData;
};


module.exports = {
    findById
};