import ProcessingLocators from "../locator files/Processing.locator"
import PPRLocators from "../locator files/PPRLocators";

var processingLocators = new ProcessingLocators();
var pPRLocators = new PPRLocators();

class PasswordProtectionRemovalFunctions {
  // TC1
  uploadTC1pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 1.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 1.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC1pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 1.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Password Locked';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
          cy.xpath(pPRLocators.ERROR_MESSAGE).should('have.text',' File is password protected. Please enter password to unlock enter password')
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 1.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC2
  uploadTC2pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 2.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 2.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC2pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 2.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 2.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC3
  uploadTC3pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 3.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 3.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC3pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 3.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 3.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC4
  uploadTC4pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 4.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 4.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC4pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 4.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 4.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC5
  uploadTC5pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 5.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 5.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC5pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 5.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 5.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC6
  uploadTC6pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 6.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 6.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC6pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 6.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Password Locked';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
          cy.xpath(pPRLocators.ERROR_MESSAGE).should('have.text',' File is password protected. Please enter password to unlock enter password')
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 6.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC7
  uploadTC7pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 7.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 7.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC7pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 7.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Password Locked';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
          cy.xpath(pPRLocators.ERROR_MESSAGE).should('have.text',' File is password protected. Please enter password to unlock enter password')
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 7.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC8
  uploadTC8pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 8.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 8.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC8pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 8.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 8.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC9
  uploadTC9pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 9.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 9.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC9pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 9.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 9.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC10
  uploadTC10pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 10.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 10.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC10pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 10.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 10.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC11
  uploadTC11pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 11.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 11.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC11pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 11.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 11.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC12
  uploadTC12pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 12.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 12.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC12pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 12.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Password Locked';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
          cy.xpath(pPRLocators.ERROR_MESSAGE).should('have.text',' File is password protected. Please enter password to unlock enter password')
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 12.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC13
  uploadTC13pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 13.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 13.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC13pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 13.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 13.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC14
  uploadTC14pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 14.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 14.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC14pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 14.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 14.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC15
  uploadTC15pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 15.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 15.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC15pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 15.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 15.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC16
  uploadTC16pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 16.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 16.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC16pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 16.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 16.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC17
  uploadTC17pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 17.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 17.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC17pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 17.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 17.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC18
  uploadTC18pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 18.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 18.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC18pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 18.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 18.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC19
  uploadTC19pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 19.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 19.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC19pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 19.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 19.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC20
  uploadTC20pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 20.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 20.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC20pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 20.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 20.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC21
  uploadTC21pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 21.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 21.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC21pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 21.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 21.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC22
  uploadTC22pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 22.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 22.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC22pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 22.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 22.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

   // TC23
   uploadTC23pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 23.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 23.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC23pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 23.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 23.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC24
  uploadTC24pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 24.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 24.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC24pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 24.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 24.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC25
  uploadTC25pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 25.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 25.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC25pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 25.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 25.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC26
  uploadTC26pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 26.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 26.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC26pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 26.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 26.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC27
  uploadTC27pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 27.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 27.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC27pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 27.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 27.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  // TC28
  uploadTC28pdf() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/PasswordProtectionRemoval/Test Case 28.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Test Case 28.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }

  verifyTC28pdf() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 28.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Test Case 28.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }

  //Unlock Functions

  uploadZipFile() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/Password protected file1.pdf.zip', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.ERROR_MESSAGE).should('be.visible');
  }
  unlockZipFile(){
    cy.xpath(processingLocators.SLIDEOUT_ENTER_PASSWORD).click();
    cy.xpath(processingLocators.PASSWORD_TEXTBOX).type('21372137');
    cy.xpath(processingLocators.ENTER).click();
  }
  uploadPdfFile() {
    cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/Password protected file1.pdf', { force: true });
    cy.wait(3000);
    cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', 'Password protected file1.pdf');
    cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    cy.wait(3000);
  }
  unlockPdfFile(){
    cy.xpath(processingLocators.GRID_ENTER_PASSWORD).click();
    cy.xpath(processingLocators.PASSWORD_TEXTBOX).type('21372137');
    cy.xpath(processingLocators.ENTER).click();
  }
  verifyZipUnlocked(){
    cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
  }
  verifyPdfUnlocked(){
    cy.xpath(processingLocators.PDF_STATUS).should('have.text',' Processing ');
  }
  verifypdfStatus() {
    cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Password protected file1.pdf');
    cy.wait(3000);

    const statusLocator = pPRLocators.STATUS_INDICATOR;
    const expectedText = 'Success';

    const checkStatus = () => {
      cy.xpath(statusLocator).invoke('text').then(text => {
        const trimmedText = text.trim();
        if (trimmedText === expectedText) {
          expect(trimmedText).to.equal(expectedText);
        } else {
          cy.reload();
          cy.xpath(pPRLocators.SEARCH_PDF_NAME).type('Password protected file1.pdf');
          cy.wait(3000);
          checkStatus();
        }
      });
    };
    checkStatus();
  }
}

export default PasswordProtectionRemovalFunctions;
