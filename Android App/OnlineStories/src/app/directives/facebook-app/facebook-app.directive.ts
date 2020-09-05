/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Platform } from "@ionic/angular";

@Directive({
	selector: "[facebookApp]"
})

export class FacebookAppDirective {

	@Input() url: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser,
		private platform: Platform
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runFacebook(this.url);
	}


	
	/**
	* runFacebook($url)
	* @param string $url = "http://ihsana.com/"
	**/
	
	private runFacebook(url: string){
		let myUrl = url || "https://play.google.com/store/apps/details?id=com.imabuilder.flucoderapps.onlinestories";
		if(myUrl == ""){
			myUrl = "https://play.google.com/store/apps/details?id=com.imabuilder.flucoderapps.onlinestories";
		}
		let urlSchema = "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(myUrl);
		if (this.platform.is("android")){
			urlSchema = "fb://faceweb/f?href=https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(myUrl) ;
		}
		if (this.platform.is("ios")){
			urlSchema = "fbapi20130214://dialog/share?app_id=966242223397117&version=20130410&method_args=%7B%22name%22%3Anull%2C%22description%22%3Anull%2C%22link%22%3A%22" + encodeURIComponent(myUrl) + "%22%7D" ;
		}
		this.inAppBrowser.create(urlSchema,"_system");
	}


}
