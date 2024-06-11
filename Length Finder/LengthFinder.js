// Country Name Length Finder

const country = ["Japan", "Mexico", "Morocco", "Iceland", "Russia"];

function TravelingCountry(country) {
    let travelCountry;

    for (const travel of country) {
        if (travel.length == 6) {
            travelCountry = travel;
            break;
        }
    }

    return travelCountry;
}

let result = TravelingCountry(country);

console.log(result);