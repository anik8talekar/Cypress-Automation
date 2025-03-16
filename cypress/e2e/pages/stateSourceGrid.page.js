import StateSourceGridLocators from "../locator files/stateSourceGrid.locator";

var stateSourceGridLocator = new StateSourceGridLocators;

class StateSourceGridFunctions{
searchAndOpenDocument(){
    cy.getTestData().then((data)=>{
    cy.xpath(stateSourceGridLocator.SEARCH_DOC).type('14-STANLEY SITWELL 1 7_1_6.pdf');
    cy.wait(1000);
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    cy.xpath(stateSourceGridLocator.MATCH_ICON).eq(1).click({force: true});
    cy.xpath(stateSourceGridLocator.EXP_DOC_ID).click();
    cy.xpath(stateSourceGridLocator.EXP_TEXT_BOX).type('Federal K-1 (2023) Corporation - Corporation')
    cy.xpath(data['EXP_OPTION']).eq(0).click();
    cy.xpath(stateSourceGridLocator.MATCH_BTN).click();
    cy.wait(5000);
    cy.xpath(stateSourceGridLocator.REVIEW_ICON).eq(1).click({force: true});
})
}
selectStateSource(){
    cy.wait(5000);
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(stateSourceGridLocator.STATE_SOURCE).click();
    cy.wait(5000);
}
selectColumns(){
    cy.xpath(stateSourceGridLocator.COLOUMN_DROPDOWN).click();
    cy.xpath(stateSourceGridLocator.STATE_ADJUSTMENT).click();
    cy.xpath(stateSourceGridLocator.APPORTIONMENT).click();
    cy.xpath(stateSourceGridLocator.PAYMENTS).click();
}
readyForTRACkReview(){
    cy.xpath(stateSourceGridLocator.TRACK_REVIEW_BUTTON).invoke('text').then((ActualText)=>{
        const ExpectedText = ' Ready for TRACK review '
        if(ActualText === ExpectedText){
          cy.xpath(stateSourceGridLocator.READY_FOR_TRACK_REVIEW).click();
          cy.wait(1000);
          cy.xpath(stateSourceGridLocator.NOTIFICATION).should('have.text',' Allocable items create process completed ')
          cy.xpath(stateSourceGridLocator.OK).click(); 
        }else{
          cy.wait(5000);
          cy.xpath(stateSourceGridLocator.EDIT_ALLOCABLE_ITEMS).should('exist').click();
          cy.get(stateSourceGridLocator.NOTIFICATION_CONTENT).should('have.text','SUCCESS Document successfuly state unapproved ')
          cy.wait(3000);
          cy.xpath(stateSourceGridLocator.READY_FOR_TRACK_REVIEW).click();
          cy.wait(1000);
          cy.xpath(stateSourceGridLocator.NOTIFICATION).should('have.text',' Allocable items create process completed ')
          cy.xpath(stateSourceGridLocator.OK).click();
        }
        })
}
verifyTaxonomyRow(){
    cy.xpath(stateSourceGridLocator.TAXONOMY_ROW).should('be.visible');
}
selectDirectConnectProfile(){
    cy.xpath(stateSourceGridLocator.SELECT_PROFILE).click();
    cy.xpath(stateSourceGridLocator.PROFILE_OPTION).click();
    cy.wait(3000); 
}
selectDocForReviewItem(){
    cy.xpath(stateSourceGridLocator.DOC_FOR_REVIEW).click();
    cy.xpath(stateSourceGridLocator.REVIEW_ALLOCABLE_ITEMS).click();
}
verifyAmount(){
cy.xpath(stateSourceGridLocator.STATE).click();
//cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
cy.xpath(stateSourceGridLocator.AMOUNT_1).should('have.text','$8,976.00')
cy.xpath(stateSourceGridLocator.AMOUNT_2).should('have.text','$788.00')
cy.xpath(stateSourceGridLocator.AMOUNT_3).should('have.text','$67.00')
cy.xpath(stateSourceGridLocator.AMOUNT_4).should('have.text','$87.00')
cy.xpath(stateSourceGridLocator.AMOUNT_5).should('have.text','$1.00')
cy.xpath(stateSourceGridLocator.AMOUNT_6).should('have.text','$7,687.00')
cy.xpath(stateSourceGridLocator.AMOUNT_7).should('have.text','$44.00')
cy.xpath(stateSourceGridLocator.AMOUNT_8).should('have.text','$78.00')
}
sendDocToTRACK(){
    cy.xpath(stateSourceGridLocator.DOC_FOR_REVIEW).click();
    cy.xpath(stateSourceGridLocator.SEND_TO_TRACK).click();
    cy.wait(2000);
    cy.get(stateSourceGridLocator.NOTIFICATION_CONTENT).should('have.text','SUCCESS The export task for selected documents was queued. ')
}
selectTRACKAllocableItem(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(stateSourceGridLocator.TRACK_ALLOCABLE_ITEMS).click();
    cy.wait(5000);
}
reapplyTemplate(){
    cy.xpath(stateSourceGridLocator.REAPPLY_TEMPLATE).click();
    cy.xpath(stateSourceGridLocator.REAPPLY).click();
    cy.get(stateSourceGridLocator.NOTIFICATION_CONTENT).should('have.text','SUCCESS Allocable Item Template has been successfully reapplied. ')
}
openArizonaDoc(){
    cy.xpath(stateSourceGridLocator.SEARCH_DOC).type('2023 Arizona K-1 NR GST_1_2.pdf');
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    cy.xpath(stateSourceGridLocator.REVIEW_ICON).eq(1).click({force: true});
}
matchUnmatchRematch(){
    //match
cy.wait(6000);
cy.xpath(stateSourceGridLocator.MATCH_SPAN).click();
cy.wait(5000);
cy.xpath(stateSourceGridLocator.EXP_DOC_ID).click();
cy.xpath(stateSourceGridLocator.EXP_TEXT_BOX).type('Federal K-1 (2023) GEORGE BLUTH FUND - GEORGE BLUTH FUND')
cy.xpath(stateSourceGridLocator.EXP_OPTION_2).click();
cy.xpath(stateSourceGridLocator.MATCH_BTN).click();
cy.wait(5000);

//unmatch
cy.xpath(stateSourceGridLocator.DOC_CENTER).click();
cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
cy.xpath(stateSourceGridLocator.CHECKNOX).click({force: true});
cy.wait(3000);
cy.xpath(stateSourceGridLocator.ACTIONS_DROPDOWN).click();
cy.xpath(stateSourceGridLocator.UNMATCH_OPTION).click();
cy.xpath(stateSourceGridLocator.UNMATCH).click();
cy.wait(5000);

//rematch
cy.xpath(stateSourceGridLocator.REVIEW_ICON).eq(1).click();
cy.wait(5000);
cy.xpath(stateSourceGridLocator.MATCH_SPAN).click();
cy.wait(5000);
cy.xpath(stateSourceGridLocator.EXP_DOC_ID).click();
cy.xpath(stateSourceGridLocator.EXP_TEXT_BOX).type('Federal K-1 (2023) GEORGE BLUTH FUND - GEORGE BLUTH FUND')
cy.xpath(stateSourceGridLocator.EXP_OPTION_2).click();
cy.xpath(stateSourceGridLocator.MATCH_BTN).click();
}
editMetaDataForArizona(){
cy.xpath(stateSourceGridLocator.MORE).click();
cy.xpath(stateSourceGridLocator.EDIT_META_DATA).click();
cy.xpath(stateSourceGridLocator.INVESTMENT_ID).click();
cy.xpath(stateSourceGridLocator.I_ID_OPTION).click();
cy.xpath(stateSourceGridLocator.INVESTOR_ID).click();
cy.xpath(stateSourceGridLocator.I_ID_OPTION).click();
cy.xpath(stateSourceGridLocator.SAVE).click();
cy.xpath(stateSourceGridLocator.CONFIRM).click();
cy.wait(20000);
}
deleteDocument(){
    cy.wait(3000);
    cy.xpath(stateSourceGridLocator.DOC_CENTER).click();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    cy.xpath(stateSourceGridLocator.CHECKNOX).click({force: true});
    cy.xpath(stateSourceGridLocator.ACTIONS_DROPDOWN).click();
    cy.xpath(stateSourceGridLocator.DELETE_OPTION).click();
    cy.xpath(stateSourceGridLocator.DELETE).click();
}
openUpperTierOne(){
    cy.xpath(stateSourceGridLocator.SEARCH_DOC).type('14-STANLEY SITWELL 1 7_1_6.pdf');
    //cy.xpath(stateSourceGridLocator.UPPER_TIER_1).type('Upper Tier One');
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    cy.xpath(stateSourceGridLocator.REVIEW_ICON).eq(1).click({force: true});
}
expandAndEditDefaultValues(){
    cy.xpath(stateSourceGridLocator.ARIZONA).eq(1).click();
    cy.xpath(stateSourceGridLocator.C_1).should('have.text',' (50) ')
    cy.xpath(stateSourceGridLocator.C_2).click();
    cy.xpath(stateSourceGridLocator.C_2_TEXT).clear();
    cy.xpath(stateSourceGridLocator.C_2_TEXT).type('(1999)');
    cy.xpath(stateSourceGridLocator.C_3).eq(1).click();
    cy.xpath(stateSourceGridLocator.EDITED_VALUE).should('have.text',' (1999) ')
}
discardEditedValues(){
    cy.xpath(stateSourceGridLocator.C_4).eq(0).click({force:true});
    cy.xpath(stateSourceGridLocator.C_1).should('have.text',' (50) ')
}
}

export default StateSourceGridFunctions;