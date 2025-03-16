const xlsx = require('xlsx');
 
// Read the Excel file and return data from the "detail description" column
const readExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet);
  // Assuming the column name in the Excel is exactly 'detail description'
  const detailDescriptionData = jsonData.map(row => row['DetailDescription']);
  return detailDescriptionData;
}
 
module.exports = { readExcelFile };