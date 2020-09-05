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
import { ActionSheetController } from "@ionic/angular";
import { Platform } from "@ionic/angular";

@Directive({
	selector: "[contactUs]"
})

export class ContactUsDirective {

	@Input() phone: string;
	@Input() sms: string;
	@Input() whatsapp: string;
	@Input() email: string;
	@Input() message: string;
	@Input() title: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser,
		private actionSheetController: ActionSheetController,
		private platform: Platform
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runContactUs();
	}



	/**
	* runContactUs()
	**/
	
	private runContactUs(){
		let message = this.message || "";
		let phone = this.phone || "" ;
		let sms = this.sms || "" ;
		let whatsapp = this.whatsapp || "" ;
		let email = this.email || "" ;
		
		let buttons = [];
		
		if(phone != ""){
			let call_btn = {
				text: "Phone Call",
				icon: "call",
				handler: () => {
					console.log("Call number",phone);
					let urlSchema = "tel:" + phone ;
					this.inAppBrowser.create(urlSchema,"_system");
				}
			};
			buttons = buttons.concat(call_btn);
		}
		
		if(sms != ""){
			let sms_btn = {
				text: "SMS",
				icon: "paper-plane",
				handler: () => {
					console.log("SMS number",sms);
					let urlSchema;
					if (this.platform.is("ios")){
						urlSchema = "sms:" + sms + ";?&body=" + message;
					}else{
						urlSchema = "sms:" + sms + "?body=" + message;
					}
					this.inAppBrowser.create(urlSchema,"_system");
				}
			};
			buttons = buttons.concat(sms_btn);
		}
		
		if(whatsapp != ""){
			let whatsapp_btn = {
				text: "WhatsApp",
				icon: "logo-whatsapp",
				handler: () => {
					console.log("WhatsApp number",whatsapp);
					let urlSchema = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(whatsapp) + "&text=" + encodeURIComponent(message) ;
					this.inAppBrowser.create(urlSchema,"_system");
				}
			};
			buttons = buttons.concat(whatsapp_btn);
		}
		
		if(email != ""){
			let email_btn = {
				text: "Email",
				icon: "mail",
				handler: () => {
					console.log("email address",email);
					let urlSchema = "mailto:" + email + "?subject=" + message;
					this.inAppBrowser.create(urlSchema,"_system");
				}
			};
			buttons = buttons.concat(email_btn);
		}
		let cancel_btn = {
			text: "Cancel",
			icon: "close",
			role: "cancel",
			handler: () => {
				console.log("Cancel clicked");
			}
		};
		buttons = buttons.concat(cancel_btn);
		this.presentActionSheet(buttons);
	}


	/**
	* presentActionSheet(buttons)
	**/
	
	async presentActionSheet(buttons){
		let title = this.title || "Contact Us" ;
		const actionSheet = await this.actionSheetController.create({
			header: title,
			buttons: buttons
		});
		await actionSheet.present();
	}



}
