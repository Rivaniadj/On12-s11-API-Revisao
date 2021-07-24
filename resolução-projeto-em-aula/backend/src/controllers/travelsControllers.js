const travels = require("../models/travels.json");
const passengers = require("../models/passengers.json");
const utils = require("../utils/travelsUtils");
const fs = require("fs");


const getAllTravels = (req, res) => {
    res.status(200).json(travels);
}

const getTravelById = (req, res) => {

    const resquestId = req.params.id;
    const filteredTravel = utils.findById(travels, resquestId);

    res.status(200).send(filteredTravel);
};

// Para Casa
// - atualizar um passageiro no sistema
const updatePassenger = (req, res) => {
    const requiredId = req.params.id;
    const { name, email, documentNumber } = req.body;

    let filteredPassenger = travels.find(passengers, requiredId);

    const updatePassenger = {

        id: requiredId,
        name,
        email,
        documentNumber,
        travelId: filteredPassenger.travelId,

    }
};
// - editar o nome do passageiro no sistema<br />
const updateName = (req, res) => {
    const requiredId = req.params.id;
    let newName = req.body.name;


    let filteredPassenger = utils.filterById(passengers, requiredId)
    if (filteredPassenger) {

        filteredPassenger.name = newName;

        fs.writeFile("./src/models/passengers.json", JSON.stringify(passengers), 'utf8', function (err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                res.status(200).json([{
                    "mensagem": " passageiro  com nome atualizado com sucesso",
                    filteredPassenger
                }]);
            }
        })
    } else {
        res.status(500).send({ "message": "Passageiro não  foi encontrado" })
    }
}

// - ordenar viagens com número de passageiros
var capacityPassagers = [40, 50, 55, 45]
function ordenaNumber(a, b) {
    return a - b;
}

valores.sort (ordenaNumber);
for (var i = 0; i < capacityPassagers.length; i++){
    document.write(capacityPassagers[i] + "")
}



// - cadastrar todas as informações de um novo motorista em uma viagem

const createDriver = (req, res) => {

    let name = req.body.name; 
    let license = req.body.license;
};

let newDriver = {

    id: Math.random().toString(32).substr(2),
    name ,
    license,
};

let travelRequiredId = req.params.id;


let travelRequiredId = utils.findById(travels, travelRequiredId)

travels.forEach((travel) => {

    let sameTravel = travel === travelRequired;

    if (sameTravel) {
        travel.driverInfos.push(newDriver);
    };

});


// - editar qualquer dado do motorista<br />
const replaceDriverInfos = (req, res) => {

    let requestedId = req.params.id;
    let driverInfosFromBody = req.body;

    let filteredPost = travels.find(travel => travel.id == requestedId);

    let updateDriverInfor = {

        "id": filteredPost.id,
        "name": driverInfosFrombody.name,
        "license": driverInfosFrombody.license
    }

    const indice = travels.indexOf(filteredPost);

    travels.splice(indice, 1, updatetravels);
    res.status(200).send({
        "mensagem": "Dados substituído com sucesso",
        updateDriverInfor
    });


};
// - substituir motorista
// updateAnything  const para atualizar qualquer coisa

const updateAnything = (req, res) => {
    let requestedId = req.params.id;

    let filteredPost = travels.find(travel => travel.id == requestedId);
    let updatedPost = req.body;

    let keyList = Object.keys(updatedPost);


    keyList.forEach((key) => {


        filteredPost[key] = updatedPost[key];
    });

    res.status(200).send({
        "message": "substituiçao feito com sucesso",

        filteredPost
    });
};


// - deletar uma viagem<br /

const deleteTravel = (request, response) => {


    const idRequerido = request.params.id;
    const travelFiltrado = travels.find(travel => travel.id == idRequerido);

    const indice = travels.indexOf(travelFiltrado);

    movies.splice(indice, 1);

    response.status(200).send(

        {
            "mensagem": "viagem deletada com sucesso",


            travels
        });
};

module.exports = {
    getAllTravels,
    getTravelById,
    updatePassenger,
    createDriver,
    updateName,
    replaceDriverInfos,
    deleteTravel,
    updateAnything


}