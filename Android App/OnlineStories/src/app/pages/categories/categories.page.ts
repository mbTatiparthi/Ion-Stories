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
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-categories",
	templateUrl: "categories.page.html",
	styleUrls: ["categories.page.scss"],
})

export class CategoriesPage {

	// search query
	filterQuery: string = "";

	
	pageName:string = `categories` ;
	
	/**
	* CategoriesPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public categoriesService: CategoriesService,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#263238");
	
	

	}
	
	/**
	* CategoriesPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	categories: Observable<any>;
	dataCategories: any = [];
	filterDataCategories: any = [];
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* CategoriesPage:getItems()
	**/
	getItems(){
		this.categories = this.categoriesService.getItems();
		this.categories.subscribe(data => {
			this.dataCategories = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataCategories = newData;
		});
	}
	
	
	/**
	* CategoriesPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataCategories = this.dataCategories;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataCategories = this.dataCategories.filter((newItem) => {
				if(newItem.category_name){
					return newItem.category_name.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* CategoriesPage:loadMore(infiniteScroll)
	* @param event $infiniteScroll
	**/
	public loadMore(infiniteScroll){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataCategories){
			if(this.lastId < this.dataCategories.length){
				if(this.lastId < nextPage){
					this.filterDataCategories[this.lastId] = this.dataCategories[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			infiniteScroll.target.complete();
			if( this.lastId >= this.dataCategories.length){
				infiniteScroll.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* CategoriesPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataCategories = [] ;
		this.filterDataCategories = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* CategoriesPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataCategories = [] ;
		this.filterDataCategories = [] ;
		this.getItems();
	}
	




}
