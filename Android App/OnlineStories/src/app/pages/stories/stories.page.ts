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
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { StoriesService } from "./../../services/stories/stories.service";
import { StoriesStorageService } from "./../../services/stories-storage/stories-storage.service";
import { ToastController } from "@ionic/angular";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-stories",
	templateUrl: "stories.page.html",
	styleUrls: ["stories.page.scss"],
})

export class StoriesPage {

	//url parameter
	public paramId : string;

	
	pageName:string = `stories` ;
	
	/**
	* StoriesPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public storiesService: StoriesService,
		public storiesStorageService: StoriesStorageService,
		public toastController: ToastController,
		public popoverController: PopoverController,
		public activatedRoute: ActivatedRoute,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#263238");
	
	
		this.paramId = this.activatedRoute.snapshot.paramMap.get("param_id");
		//badge for bookmarks
		this.createBadge();
		

	}
	
	/**
	* StoriesPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	
	
	filterQuery: string = "";
	
	
	stories: Observable<any>;
	dataStories: any = [];
	filterDataStories: any = [];
	
	
	count_bookmarks:number = 0;
	temp_count_bookmarks:number = 0 ;
	item_bookmarks : any = [];
	runBadge: any;
	
	
	/**
	* StoriesPage:createBadge()
	**/
	createBadge(){
		this.runBadge = setInterval(()=>{
			this.getBadges();
		},1000)
	}
	
	
	/**
	* StoriesPage:ionViewDidLeave()
	**/
	ionViewDidLeave(){
		clearInterval(this.runBadge);
	}
	
	
	/**
	* StoriesPage:getBadges()
	**/
	getBadges(){
		this.getBookmarks();
	}
	
	
	/**
	*  Stories.getBookmarks()
	**/
	public async getBookmarks(){
		this.count_bookmarks = this.temp_count_bookmarks;
		this.temp_count_bookmarks = 0;
		this.item_bookmarks = []; 
		this.storage.forEach((iValue, iKey, iIndex) => {
			let bookmarkKey = iKey.substring(0,17);
			console.log(`key`,bookmarkKey);
			if( bookmarkKey ==  `stories-bookmark:`){
				this.pushBookmark(iValue);
			}
		});
	}
	
	
	/**
	* .pushBookmark(item)
	**/
	private pushBookmark(item){
		this.temp_count_bookmarks++;
		this.item_bookmarks.push(item);
	}
	
	
	//for infinite-scroll
	lastId:number = 0;
	firstLoad:number = 20;
	perPage:number = 20;
	
	@ViewChild("IonInfiniteScroll",{static: false}) infiniteScroll: IonInfiniteScroll;
	
	
	
	/**
	* StoriesPage:saveBookmark(data:any)
	**/
	saveBookmark(dataId:string,data:any){
		this.storiesStorageService.setItem(`stories-bookmark`,dataId,data).then(()=>{
			this.showToast(`story added to Favorties`);
		})
	}
	
	
	/**
	* StoriesPage:showToast(message:string)
	**/
	async showToast(message:string){
		const toast = await this.toastController.create({
			message: message,
			position: "bottom",
			color: "dark",
			duration: 500
		});
		await toast.present();
	}
	
	
	/**
	* StoriesPage:getItems()
	**/
	getItems(){
		if(this.paramId == null){
			this.paramId = "-1";
		}
		this.stories = this.storiesService.getItems(this.paramId);
		this.stories.subscribe(data => {
			this.dataStories = data ;
			this.lastId = 0;
			let newData : any = [];
			for (let item of data) {
				if(this.lastId <= (this.firstLoad -1) ) {
					newData[this.lastId] = item;
					//console.log(this.lastId);
					this.lastId++;
				}
			}
			this.filterDataStories = newData;
		});
	}
	
	
	/**
	* StoriesPage:filterItems($event)
	* @param any $event
	*
	* @required for searchbar
	**/
	public filterItems(evt: any) {
		this.filterDataStories = this.dataStories;
		let filterVal = evt.target.value;
		if (filterVal && filterVal.trim() !== "") {
			this.filterDataStories = this.dataStories.filter((newItem) => {
				if(newItem.story_title){
					return newItem.story_title.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				}
			});
		}
	}
	
	
	/**
	* StoriesPage:loadMore(infiniteScroll)
	* @param event $infiniteScroll
	**/
	public loadMore(infiniteScroll){
		let newData : any = [];
		let nextPage:number = this.perPage + this.lastId;
		for (let item of this.dataStories){
			if(this.lastId < this.dataStories.length){
				if(this.lastId < nextPage){
					this.filterDataStories[this.lastId] = this.dataStories[this.lastId];
					//console.log("more data",this.lastId);
					this.lastId++;
				}
			}
		}
		setTimeout(() => {
			infiniteScroll.target.complete();
			if( this.lastId >= this.dataStories.length){
				infiniteScroll.target.enable = false;
			}
		}, 500);
	}
	
	
	/**
	* StoriesPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataStories = [] ;
		this.filterDataStories = [] ;
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItems();
	}
	
	
	/**
	* StoriesPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataStories = [] ;
		this.filterDataStories = [] ;
		this.getItems();
	}
	




}
