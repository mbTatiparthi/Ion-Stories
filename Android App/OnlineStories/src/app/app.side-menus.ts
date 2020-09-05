/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Injectable } from "@angular/core";

@Injectable()

export class AppSideMenus{
	items:any = [
    {
        "item_type": "inlink",
        "item_label": "Home",
        "item_var": "home",
        "item_link": "\/home",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "home",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Stories",
        "item_var": "stories",
        "item_link": "\/stories",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "clipboard",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Categories",
        "item_var": "categories",
        "item_link": "\/categories",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "logo-slack",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Favorites",
        "item_var": "stories_bookmarks",
        "item_link": "\/stories-bookmarks",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "heart",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "About US",
        "item_var": "about_us",
        "item_link": "\/about-us",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "people-circle",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "app-rate",
        "item_label": "Rate This App",
        "item_var": "rate_this_app",
        "item_link": "\/",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "logo-google-playstore",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "systembrowser",
        "item_label": "More Apps",
        "item_var": "more_apps",
        "item_link": "\/",
        "item_value": "https:\/\/play.google.com\/store\/apps\/developer?id=flucoder",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "logo-android",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    },
    {
        "item_type": "inlink",
        "item_label": "Privacy Policy",
        "item_var": "privacy_policy",
        "item_link": "\/privacy-policy",
        "item_value": "",
        "item_desc": "",
        "item_color_label": "undefined",
        "item_icon_left": "lock-closed",
        "item_color_icon_left": "gray",
        "item_icon_right": "",
        "item_color_icon_right": "undefined"
    }
] ;

}
