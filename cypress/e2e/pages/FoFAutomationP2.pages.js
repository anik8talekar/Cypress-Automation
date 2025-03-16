import FoFAutomationP2Locators from "../locator files/FoFAutomationP2.locators";

var foFAutomationP2Locators = new FoFAutomationP2Locators

const XLSX = require('xlsx');

class FoFAutomationP2Functions {
    CheckTaxonomyColumnExcel() {
        cy.readFile('cypress/fixtures/FoF_Extract_2024-08-05--02-16-02.xlsx', 'binary').then((fileContent) => {
            // Parse the Excel file
            const workbook = XLSX.read(fileContent, { type: 'binary' });

            // Assume the sheet you want to check is the first one (index 0)
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];

            // Convert the worksheet to JSON format(with raw data to avoid auto-formatting)
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: true });

            // Define the column name you want to check
            const columnName = 'Taxonomy';

            let headerRowIndex = null;
            let columnIndex = null;

            // Iterate through each row to find the header row
            for (let i = 0; i < jsonData.length; i++) {
                const row = jsonData[i];
                if (row.includes(columnName)) {
                    headerRowIndex = i;
                    columnIndex = row.indexOf(columnName);
                    break;
                }
            }

            // Check if the header row was found
            expect(headerRowIndex, `Header containing "${columnName}" not found`).to.not.be.null;
            expect(columnIndex, `Column "${columnName}" not found in the header row`).to.not.be.null;

            // Initialize a flag to check if data exists in the column
            let hasData = false;

            // Iterate through the rows below the header to check for data
            for (let i = headerRowIndex + 1; i < jsonData.length; i++) {
                const row = jsonData[i];
                if (row[columnIndex] !== undefined && row[columnIndex] !== null && row[columnIndex] !== '') {
                    hasData = true;
                    break;
                }
            }

            // Assert that the column contains data
            expect(hasData, `Data found in the column "${columnName}"`).to.be.true;
        })
    }
    VerifySheetNames() {
        cy.readFile('cypress/fixtures/FoF_Extract_2024-08-05--02-16-02.xlsx', 'binary').then((fileContent) => {
            // Parse the Excel file
            const workbook = XLSX.read(fileContent, { type: 'binary' });

            // Get the list of sheet names
            const sheetNames = workbook.SheetNames;

            // Define the expected sheet names
            const expectedSheetNames = ['FOF Analysis', 'Statement Detail', '926', '8621', '8865', '8886', 'Installment Sales', 'EIP - Transfers', '199A'];

            // Assert that all expected sheet names are present
            expectedSheetNames.forEach(sheetName => {
                expect(sheetNames, `Sheet "${sheetName}" not found`).to.include(sheetName);
            });

            // Optionally, you can assert that the number of sheets is as expected
            expect(sheetNames.length, 'Unexpected number of sheets').to.equal(expectedSheetNames.length);
        })
    }


}
export default FoFAutomationP2Functions;