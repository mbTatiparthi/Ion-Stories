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
import {PopoverController, ToastController} from "@ionic/angular";
import {PopoverComponent} from "../../components/popover/popover.component";



@Component({
	selector: "app-stories-detail",
	templateUrl: "stories-detail.page.html",
	styleUrls: ["stories-detail.page.scss"],
})

export class StoriesDetailPage {

	//url parameter
	public id : string;

	
	pageName:string = `stories-detail` ;
	
	/**
	* StoriesDetailPage:constructor()
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
	
	
		this.id = this.activatedRoute.snapshot.paramMap.get("id");
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


		
	
	
	stories: Observable<any>;
	dataStories: any = {};
	
	
	count_bookmarks:number = 0;
	temp_count_bookmarks:number = 0 ;
	item_bookmarks : any = [];
	runBadge: any;
	
	
	/**
	* StoriesDetailPage:createBadge()
	**/
	createBadge(){
		this.runBadge = setInterval(()=>{
			this.getBadges();
		},1000)
	}
	
	
	/**
	* StoriesDetailPage:ionViewDidLeave()
	**/
	ionViewDidLeave(){
		clearInterval(this.runBadge);
	}
	
	
	/**
	* StoriesDetailPage:getBadges()
	**/
	getBadges(){
		this.getBookmarks();
	}
	
	
	/**
	*  StoriesDetail.getBookmarks()
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
	
	
	/**
	* StoriesDetailPage:saveBookmark(data:any)
	**/
	saveBookmark(dataId:string,data:any){
		this.storiesStorageService.setItem(`stories-bookmark`,dataId,data).then(()=>{
			this.showToast(`story added to Favorites`);
		})
	}
	
	
	/**
	* StoriesDetailPage:showToast(message:string)
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
	* StoriesDetailPage:getJSON(url: string)
	**/
	public getItem(){
		this.stories = this.storiesService.getItem(this.id);
		this.stories.subscribe(data => {
			this.dataStories = data ;
		});
	}
	
	
	
	/**
	* StoriesDetailPage:doRefresh()
	**/
	public doRefresh(refresher){
		this.dataStories = {};
		setTimeout(() => {
			refresher.target.complete();
		}, 100);
		this.getItem();
	}
	
	
	/**
	* StoriesDetailPage:ngOnInit()
	**/
	public ngOnInit(){
		this.dataStories = {};
		this.getItem();
	}
	




}
