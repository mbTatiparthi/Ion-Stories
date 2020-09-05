/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { Component , OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { environment } from "./../../../../src/environments/environment";
import { Storage } from "@ionic/storage";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-about-us",
	templateUrl: "about-us.page.html",
	styleUrls: ["about-us.page.scss"],
})

export class AboutUsPage {

	// variable for segment tab
	segmentTab: string = "about-us";

	
	pageName:string = `about-us` ;
	
	/**
	* AboutUsPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#263238");
	
	

	}
	
	/**
	* AboutUsPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


	


	/**
	* AboutUsPage:ngOnInit()
	* @param string $url = 'http://ihsana.com/'
	**/
	public ngOnInit()
	{
	}  



}
