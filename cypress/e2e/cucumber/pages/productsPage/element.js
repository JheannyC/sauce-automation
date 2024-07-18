const element = {
    
    /*
        fix: use a pattern to register ids;
        bug: burguerMenu is not working. Cypress can not see visible.
    */

    attr: {
        header: '#header_container',
        productLabel: '.product_label',
        burguerMenu: '.bm-burger-button > button',
        appLogo: '.app_logo',
        cart: '#shopping_cart_container',
        productsList: '.inventory_list',
        inventoryImage: '.inventory_item_img',
        inventoryItemName: '.inventory_item_name',
        inventoryItemDescription: '.inventory_item_desc',
        inventoryItemPrice: '.inventory_item_price',
        cartButton: '.btn_primary',
        productId1: '#item_1_title_link',
        productId2: '#item_2_title_link',
        productNameDetail: '.btn_primary',
    },

    route: {
        inventory: '/inventory.html',
    }

}

export default element
