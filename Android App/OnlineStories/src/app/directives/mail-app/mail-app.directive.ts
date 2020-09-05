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

@Directive({
	selector: "[mailApp]"
})

export class MailAppDirective {

	@Input() emailAddress: string;
	@Input() emailSubject: string;
	@Input() emailMessage: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runMailApp(this.emailAddress,this.emailSubject,this.emailMessage);
	}



	/**
	* runMailApp($email,$subject,$message)
	* @param string $email = "jasman@ihsana.com"
	* @param string $subject = "subject"
	* @param string $message = "your message"
	**/
	
	private runMailApp(email: string, subject : string, message : string){
		let emailAddr = email || "info@ihsana.com";
		let textSubject = subject || "email subject";
		let textMessage = encodeURI(message) || "write your message";
		if(textSubject == ""){
			textSubject = "email subject";
		}
		if(textMessage == ""){
			textMessage = "your message";
		}
		let urlSchema = "mailto:" + emailAddr + "?subject=" + textSubject + "&body=" + textMessage;
		this.inAppBrowser.create(urlSchema,"_system");
	}



}
