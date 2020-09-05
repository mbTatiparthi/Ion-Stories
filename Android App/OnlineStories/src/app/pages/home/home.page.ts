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
import { Observable } from "rxjs";
import { CategoriesService } from "./../../services/categories/categories.service";
import { StoriesService } from "./../../services/stories/stories.service";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
import { Platform } from "@ionic/angular";



@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})

export class HomePage {
	
	pageName:string = `home` ;

	
	/**
	* HomePage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public categoriesService: CategoriesService,
		public storiesService: StoriesService,
		public popoverController: PopoverController,
		public platform: Platform,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#263238");
	
	

	}

	
	/**
	* HomePage:showPopover()
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
	* Init for Categories
	* api: https://localhost/onlinestories/restapi.php?api=categories
	**/
	categories: Observable<any>;
	dataCategories: any = [];
	
	
	/**
	* HomePage:getCategories();
	**/
	getCategories(){
		this.categories = this.categoriesService.getItems();
		this.categories.subscribe(data => {
			this.dataCategories = data ;
		});
	}
	
	/**
	* Init for Stories
	* api: https://localhost/onlinestories/restapi.php?api=stories&category={id}&orderby=id&sort=desc
	**/
	stories: Observable<any>;
	dataStories: any = [];
	
	
	/**
	* HomePage:getStories();
	**/
	getStories(){
		this.stories = this.storiesService.getItems("-1");
		this.stories.subscribe(data => {
			this.dataStories = data ;
		});
	}
	
	
	/**
	* HomePage:ngOnInit();
	**/
	public ngOnInit(){
		this.getCategories();
		this.getStories();
	}




}
