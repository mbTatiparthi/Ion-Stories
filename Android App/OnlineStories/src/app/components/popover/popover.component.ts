/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
		

		
@Component({
	selector: "app-popover",
	templateUrl: "./popover.component.html",
	styleUrls: ["./popover.component.scss"],
})
		
		
export class PopoverComponent implements OnInit {
		
	/**
	* PopoverComponent:constructor()
	**/
	constructor(
		public popoverController: PopoverController,
		public router: Router,
		public storage: Storage
	){
		
		// constructor
		
	}
	
	
		
	/**
	* PopoverComponent:dismissPopover()
	**/
	dismissPopover(){
		this.popoverController.dismiss();
	}
		
		
	/**
	* PopoverComponent:clearStorage()
	**/
	clearStorage(){
		this.dismissPopover();
		this.storage.clear();
		this.router.navigate(["/"]);
	}
		
		
	/**
	* PopoverComponent:exitApp()
	**/
	exitApp(){
		this.dismissPopover();
		if(window.confirm("Do you want to exit App?")){
			navigator["app"].exitApp();
		}
	}
		
		
	/**
	* PopoverComponent:darkMode(event)
	**/
	isDarkMode:boolean = false;
	darkMode(event){
		let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
		systemDark.addListener(this.colorTest);
		if(event.detail.checked){
			document.body.setAttribute("data-theme", "dark");
		}else{
			document.body.setAttribute("data-theme", "light");
		}
	}
	
	
	/**
	* PopoverComponent:colorTest(systemInitiatedDark)
	**/
	colorTest(systemInitiatedDark){
		if (systemInitiatedDark.matches) {
			document.body.setAttribute("data-theme", "dark");
		}else{
			document.body.setAttribute("data-theme", "light");
		}
	}
	
	
	/**
	* PopoverComponent:ngOnInit()
	**/
	ngOnInit(){
		let getDarkMode = document.body.getAttribute("data-theme");
		if(getDarkMode==`dark`){
			this.isDarkMode = true;
		}else{
			this.isDarkMode = false;
		}
	}

		
		
}
