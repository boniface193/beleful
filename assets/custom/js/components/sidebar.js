Vue.component("side-bar", {
    data: function () {
        return {
            user: JSON.parse(localStorage.getItem("user")),
        };
    },
    mounted: function(){
        console.log(this.user);
    },
    methods: {
        logout: function () {
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        },
        handleActive: function() {
            
        } 
    },
    template: `<div class="sidebar-wrapper sidebar-theme">
                
                <nav id="sidebar">
                    <div class="shadow-bottom"></div>
                    <ul class="list-unstyled menu-categories" id="accordionExample">
                        <li class="menu">
                            <a href="index.html" @click="handleActive" data-active="false" class=" dropdown-toggle">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-home">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    <span>Dashboard</span>
                                </div>
                            </a>
                        </li>
                        <li v-if="!user.is_vendor" class="menu">
                            <a href="#banners" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="grid"></i>
                                    <span>Banners</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </a>
                            <ul class="collapse submenu list-unstyled" id="banners" data-parent="#accordionExample">
                                <li>
                                    <a href="banner.html"> Welcome Slider </a>
                                </li>
                                <li>
                                    <a href="banner_add.html">Add Banners </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu">
                            <a href="#products" data-toggle="collapse" data-active="false" aria-expanded="false" class="  dropdown-toggle">
                                <div class="">
                                    <i data-feather="tag"></i>
                                    <span>Manage Products</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </a>
                            <ul class="collapse submenu list-unstyled" id="products" data-parent="#accordionExample">
                                <li>
                                    <a href="product_add.html"> Add New Product </a>
                                </li>
                                <li>
                                    <a href="product_list.html"> Product's List </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu">
                            <a href="productCategory.html" aria-expanded="false" data-active="false" class="  dropdown-toggle">
                                <div class="">
                                    <i data-feather="cpu"></i>
                                    <span>Product Category</span>
                                </div>
                            </a>
                        </li>
                        <li v-if="!user.is_vendor" class="menu">
                            <a href="cities" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="map-pin"></i>
                                    <span>Manage Cities</span>
                                </div>
                            </a>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="#restaurant" data-toggle="collapse" data-active="false"  aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="home"></i>
                                    <span>Vendor</span>
                                </div>
                                 <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </a>
                            <ul class="collapse submenu list-unstyled" id="restaurant" data-parent="#restaurant">
                                <li>
                                    <a href="restaurant.html"> Vendors </a>
                                </li>

                                <li>
                                    <a href="vendor_add.html"> Add Vendor </a>
                                </li>
                            
                            </ul
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="offers.html" aria-expanded="false" data-active="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="calendar"></i>
                                    <span>Discount Offers</span>
                                </div>
                            </a>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="staffs.html" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="users"></i>
                                    <span>Staff Members</span>
                                </div>
                            </a>
                        </li>

                        <li class="menu">
                            <a href="#manageOrders" data-toggle="collapse" data-active="false" aria-expanded="false" class=" dropdown-toggle">
                                <div class="">
                                <i data-feather="shopping-cart"></i>
                                    <span>Manage Orders</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </a>
                            <ul class="collapse submenu list-unstyled" id="manageOrders" data-parent="#accordionExample">
                                <li>
                                    <a href="order.html"> New Orders </a>
                                </li>
                            
                            </ul>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="notification" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-users">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    <span>Push Notification</span>
                                </div>
                            </a>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="reporting.html" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-file">
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                        <polyline points="13 2 13 9 20 9"></polyline>
                                    </svg>
                                    <span>Reporting</span>
                                </div>
                            </a>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="users.html" data-toggle="collapse" data-active="false" aria-expanded="false"
                                class="dropdown-toggle">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-lock">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>App Users</span>
                                </div>
                            </a>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="#config" data-toggle="collapse" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="settings"></i>
                                    <span>Configuration</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </a>
                            <ul class="collapse submenu list-unstyled" id="config" data-parent="#accordionExample">
                                <li>
                                    <a href="settings.html"> Show Settings </a>
                                </li>
                                <li>
                                    <a href="settings_add.html">Add Configure</a>
                                </li>
                            </ul>
                        </li>

                        <li v-if="!user.is_vendor" class="menu">
                            <a href="reviews.html" data-active="false" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="users"></i>
                                    <span>Reviews</span>
                                </div>
                            </a>
                        </li>

                        <li class="menu" v-on:click.prevent="logout()">
                            <a href="" aria-expanded="false" class="dropdown-toggle">
                                <div class="">
                                    <i data-feather="log-out"></i>
                                    <span>Logout</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <!-- <div class="shadow-bottom"></div> -->

                </nav>

            </div>`,
});



