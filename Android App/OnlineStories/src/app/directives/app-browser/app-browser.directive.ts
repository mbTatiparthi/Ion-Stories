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
import { InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";
import { Platform } from "@ionic/angular";

@Directive({
	selector: "[appBrowser]"
})

export class AppBrowserDirective {

	@Input() url: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser,
		private platform: Platform
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runAppBrowser(this.url);
	}


	
	
	/**
	* Options for the Cordova InAppBrowser Plugin
	* @reference: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
	**/
	
	appBrowserOption : InAppBrowserOptions = {
		location : "yes",
		hidden : "no",
		zoom : "no", //android & windows
		hardwareback : "yes", //android & windows
		mediaPlaybackRequiresUserAction : "no",
		shouldPauseOnSuspend : "no", //android
		closebuttoncolor : "#03372D",
		toolbarcolor : "#066177",
		disallowoverscroll : "no",
		toolbar : "yes", //ios only
		enableViewportScale : "no",
		allowInlineMediaPlayback : "no",
		presentationstyle : "pagesheet",
		fullscreen : "yes", //windows
	}
	
	
	/**
	* runAppBrowser($url)
	* @param string $url = "http://ihsana.com"
	**/
	
	private runAppBrowser(url: string){
		let urlAddr = url || "http://ihsana.com";
		if (this.platform.is("ios")){
			this.inAppBrowser.create(urlAddr,"_system");
		}else{
			this.inAppBrowser.create(urlAddr,"_blank",this.appBrowserOption);
		}
	}
	


}
