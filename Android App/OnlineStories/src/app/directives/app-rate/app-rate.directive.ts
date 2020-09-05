/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { AppRate } from "@ionic-native/app-rate/ngx";
import { Platform } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Directive({
	selector: "[appRate]"
})

export class AppRateDirective {

	@Input() ios: string;
	@Input() android: string;
	@Input() windows: string;

	constructor( 
		private elementRef: ElementRef,
		private appRate: AppRate,
		private platform: Platform,
		private alertController: AlertController
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.rateApp();
	}


	
	
	/**
	* rateApp()
	**/
	
	private rateApp(){
		if (this.platform.is("cordova")){
			
			let iosAppId = this.ios || "";
			let androidAppId = this.android || "com.flucoderapps.onlinestories";
			let windowsAppId = this.windows || "";
			
			this.appRate.preferences.storeAppURL = {
				ios: `${iosAppId}`,
				android: `market://details?id=${androidAppId}`,
				windows: `ms-windows-store://review/?ProductId=${windowsAppId}`
			}
			this.appRate.promptForRating(true);
		}else{
			this.showAlert(`Information`,`Device`,`Only works on real devices!`);
		}
	}
	
	
	/**
	* showAlert($header,$subheader,$message)
	**/
	async showAlert(header:string, subheader: string, message: string){
		const alert = await this.alertController.create({
			header: header,
			subHeader: subheader,
			message: message,
			buttons: ["OK"]
		});
		await alert.present();
	}
	
	
	
	


}
