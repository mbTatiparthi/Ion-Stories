/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { InAppBrowserOptions } from "@ionic-native/in-app-browser/ngx";

@Directive({
	selector: "[whatsappApp]"
})

export class WhatsappAppDirective {

	@Input() message: string;
	@Input() phoneNumber: string;
	@Input() appid: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runWhatsapp(this.phoneNumber,this.message,this.appid);
	}


	
	/**
	* runWhatsapp($phoneNumber,$message)
	* @param string $phoneNumber = "08123435435"
	* @param string $message = "hi there"
	**/
	
	private runWhatsapp(phoneNumber: string,message: string,appid: string){
		let myNumber = phoneNumber || "";
		let myMessage = message || "Hi";
		let myAppId = appid || "  https://play.google.com/store/apps/details?id=com.flucoderapps.onlinestories"
		if(myMessage == ""){
			myMessage = "Hi";
		}
		let urlSchema = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(myNumber) + "&text=" + encodeURIComponent(myMessage) + encodeURIComponent(myAppId) ;
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}
