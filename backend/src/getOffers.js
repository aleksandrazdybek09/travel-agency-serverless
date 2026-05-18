exports.handler = async (event) => {
    const mockOffers = [
        {
            id: "1",
            destination: "Majorka, Hiszpania",
            price: 2500,
            currency: "PLN",
            durationDays: 7,
            description: "Wspaniały tydzień na słonecznej Majorce."
        },
        {
            id: "2",
            destination: "Rzym, Włochy",
            price: 1800,
            currency: "PLN",
            durationDays: 4,
            description: "City break w Wiecznym Mieście."
        }
    ];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" // Pozwala frontendowi na odpytanie tego API
        },
        body: JSON.stringify(mockOffers),
    };
};