const BASE_URL = 'https://www.staging-api.beleful.com.ng/api/';
//const BASE_URL = ' http://127.0.0.1:8000/api/';

const LOGIN_URL = 'user/auth/';

const VENDOR_CATEGORY = 'vendors/category/';

const PRODUCT_URL = 'vendors/items/';

const UPDATE_CATEGORY = 'vendors/category/';

const DELIVERY_URL = 'order/web/';

const DELIVERY_DETAIL_URL = 'order/';

const DASHBOARD_URL = 'vendors/dashboard/';

function generateURL(SUB_URL){
    URL = BASE_URL + SUB_URL;
    if(URL.endsWith('/')){
        return URL;
    }
    return URL + '/';
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
