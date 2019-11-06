const excelToJson = require('convert-excel-to-json');


module.exports = {

    convertExcelToJson(){
        return excelToJson({ sourceFile: 'testExcel.xlsx' });
    }

} 