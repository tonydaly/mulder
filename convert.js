const csvToJson = require('convert-csv-to-json');

const ufoSightingsCSV = 'ufo-sightings.csv';
const ufoSightingsJSON = 'ufo-sightings.json';

csvToJson
  .fieldDelimiter(',')
  .generateJsonFileFromCsv(ufoSightingsCSV, ufoSightingsJSON);
