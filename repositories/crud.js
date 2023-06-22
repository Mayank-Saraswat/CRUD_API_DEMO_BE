let connection = require('../connection/db')

const getData = async (query) => {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                reject(error.message);
            }
            resolve(result)
        });
    });
}

const postData = async (query) => {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                console.log(error)
                reject(error.message);
            }
            resolve(result)
        });
    });
}

const putData = async (query) => {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                console.log(error)
                reject(error.message);
            }
            resolve(result)
        });
    });
}

const deleteData = async (query) => {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, result) {
            if (error) {
                console.log(error)
                reject(error.message);
            }
            resolve(result)
        });
    });
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData
    };