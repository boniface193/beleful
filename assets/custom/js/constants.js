const BASE_URL = 'https://staging-api.beleful.com.ng/api/';
//const BASE_URL = ' http://127.0.0.1:8000/api/';

const LOGIN_URL = 'user/auth/';

const VENDOR_CATEGORY = 'vendors/category/';

const PRODUCT_URL = 'vendors/items/';

const UPDATE_CATEGORY = 'vendors/category/';

const DELIVERY_URL = 'order/web/';

const DELIVERY_DETAIL_URL = 'order/';

const DASHBOARD_URL = 'vendors/dashboard/';

const VENDORS_URL = 'vendors/';

const BANNER_GET = 'banner';

const BANNER_POST = 'banner/create'

const BANNER_UPDATE = 'banner/edit/'

const VENDOR_URL_SAVE = 'vendors/save/';

const CONFIRM_EMAIL_URL = 'user/accounts/activate/';

const RESET_PASSWORD_URL = 'user/password/getcode/';

const VERIFY_OTP = 'user/password/confirmcode/';

const CHANGE_PASSWORD = 'user/'

const generateURL = (SUB_URL) => {
    URL = BASE_URL + SUB_URL;
    if (URL.endsWith('/')) return URL;
    return URL + '/';
};

const redirect = url => window.location = url

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const handleError = (errObject) => {

    //Destructure the error object so that you can pick out the response and the message
    const { message, response } = errObject

    if (response.status === 401) redirect('login.html');

    Object.entries(response?.data?.errors).map(error => {
        Snackbar.show({
            text: error[0] + ": " + error[1][0],
            actionTextColor: "#fff",
            backgroundColor: "#e7515a"
        })
    })
}
