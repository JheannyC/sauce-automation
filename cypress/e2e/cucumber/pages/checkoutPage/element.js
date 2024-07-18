const element = {
    
    /*
        fix: use a pattern to register ids;
    */

    attr: {
        errorMessage:'[data-test="error"]',
        continueButton: '.btn_primary',
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        zipCode: '[data-test="postalCode"]',
        summaryInfo: '.summary_info',
        itemTotal: '.summary_subtotal_label' ,
        tax: '.summary_tax_label',
        total: '.summary_total_label',
        finishButton: '.btn_action',
        checkoutCompleteTitle: '.complete-header',
        checkoutCompletSubTitle: '.complete-text',
        checkoutCompleteImg: '.pony_express'
    },

    placeholder: {
        firstName: 'First Name',
        lastName: 'Last Name',
        zipCode: 'Zip/Postal Code',
    },

    label:{
        continue: 'CONTINUE',
        finish: 'FINISH',
    },

    route:{
        stepOneURL: '/v1/checkout-step-one.html',
        stepTwoURL: '/v1/checkout-step-two.html',
        checkoutComplete: 'v1/checkout-complete.html',
    },

    message: {
        errorFirstName: 'Error: First Name is required',
        errorLastName: 'Error: Last Name is required',
        errorZipCode: 'Error: Postal Code is required',
    },
    
}

export default element
