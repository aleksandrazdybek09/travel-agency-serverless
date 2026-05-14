exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('Witaj promotorze! Tutaj beda ladowac sie oferty wycieczek.'),
    };
};