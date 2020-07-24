const BASE_URL = 'http://127.0.0.1:8000/api/';

const LOGIN_URL = 'user/auth/';

const VENDOR_CATEGORY = 'vendors/category/';

const PRODUCT_URL = 'vendors/items/';

function generateURL(SUB_URL){
    URL = BASE_URL + SUB_URL;
    console.log(URL);
    if(URL.endsWith('/')){
        return URL;
    }
    return URL + '/';
};
