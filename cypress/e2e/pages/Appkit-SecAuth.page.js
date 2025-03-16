import AppkitSecAuthLocators from "../locator files/Appkit-SecAuth.locator";

var appkitSecAuthLocators = new AppkitSecAuthLocators

class AppkitSecAuthFunctions{
    verifySecAuthUI(){
        cy.xpath(appkitSecAuthLocators.SEC_AUTH_UI).should('exist');
    }
    applyFilters(){
        cy.wait(5000);
        cy.xpath(appkitSecAuthLocators.GUID).type('dautomatio004')
        cy.xpath(appkitSecAuthLocators.FIRST_NAME).type('Dataflow')
        cy.xpath(appkitSecAuthLocators.LAST_NAME).type('Automation')
        cy.xpath(appkitSecAuthLocators.EMAIL).type('dataflow.automation@pwc.com')
    }
    verifyFilterResults(){
        cy.xpath(appkitSecAuthLocators.GUID_VALUE).should('have.text','dautomatio004') 
        cy.xpath(appkitSecAuthLocators.FIRST_NAME_VALUE).should('have.text','Dataflow')
        cy.xpath(appkitSecAuthLocators.LAST_NAME_VALUE).should('have.text','Automation')
        cy.xpath(appkitSecAuthLocators.EMAIL_VALUE).should('have.text','dataflow.automation@pwc.com')
    }
    scrollToBottom(){
        //cy.get(appkitSecAuthLocators.SCROLL_BODY).scrollTo('bottom');
    }
    verifySiteProvider(){
        cy.xpath(appkitSecAuthLocators.SITE_PROVIDER).should('be.visible');
    }
}

export default AppkitSecAuthFunctions;