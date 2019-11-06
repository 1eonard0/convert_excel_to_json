const { convertExcelToJson } = require('./converter');

var result = convertExcelToJson();

result['Hoja 1'].forEach(element => {
    console.log(`${element.A} | ${element.B} | ${element.C}`);
});
