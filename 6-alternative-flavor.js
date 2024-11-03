// Istedet for at vi bruker const for å lage variabelen, så bruker vi module.exports med en gang siden vi tenker å eksportere denne til andre filer
module.exports.items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

// Vi legger til 'items' og 'singlePerson' som egenskaper på module.exports-objektet.
// module.exports er et objekt, så vi kan legge til lister og andre objekter, som 'person', på samme måte.
module.exports.singlePerson = person