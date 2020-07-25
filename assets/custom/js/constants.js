const BASE_URL = 'https://staging-api.beleful.com.ng/api/';

const LOGIN_URL = 'user/auth/';

const VENDOR_CATEGORY = 'vendors/category/';

const ACCESS__TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk1NjQyNzEzLCJqdGkiOiIyM2ZlMmQwZDEzMGU0NDcyYmJiOGVhYTgwMWRkYzhmMSIsInVzZXJfaWQiOiI0ZDgyZGFjMS1lYmE3LTRkYjItYmY1NC00NzNiNzU0NWRiMWIifQ.ZSRcxx74xaWOOCsm4Sxg-JUwMK9SRxdoH4Kk8G0TDKM`

const PRODUCT_URL = 'vendors/items/';

const UPDATE__CATEGORY = 'vendors/category/'

function generateURL(SUB_URL){
    URL = BASE_URL + SUB_URL;
    // console.log(URL);
    if(URL.endsWith('/')){
        return URL;
    }
    return URL + '/';
};
