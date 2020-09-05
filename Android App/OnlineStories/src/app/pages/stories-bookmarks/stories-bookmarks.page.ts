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
import { StoriesStorageService } from "./../../services/stories-storage/stories-storage.service";
import { ToastController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";



@Component({
	selector: "app-stories-bookmarks",
	templateUrl: "stories-bookmarks.page.html",
	styleUrls: ["stories-bookmarks.page.scss"],
})

export class StoriesBookmarksPage {
	
	pageName:string = `stories-bookmarks` ;
	
	/**
	* StoriesBookmarksPage:constructor()
	**/
	constructor(
		private router: Router,
		public statusBar: StatusBar,
		public storiesStorageService: StoriesStorageService,
		public toastController: ToastController,
		public loadingController: LoadingController,
		public popoverController: PopoverController,
		private storage: Storage
	){
	
		// statusbar
		this.statusBar.styleLightContent();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString("#263238");
	
	

	}
	
	/**
	* StoriesBookmarksPage:showPopover()
	**/
	async showPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	
	


		
	dataBookmarks : any = [];
	loading:any;
	
	/**
	* StoriesBookmarksPage.ngOnInit()
	**/
	public ngOnInit(){
		this.presentLoading();
		this.storiesStorageService.getItems(`stories-bookmark`).then((items)=>{
			this.dataBookmarks = items;
			this.dismissLoading();
		});
	}
	
	
	/**
	* StoriesBookmarksPage.presentLoading()
	**/
	async presentLoading() {
		this.loading = await this.loadingController.create({
			message: "Please wait...!",
			spinner: "crescent",
			duration: 2000
		});
		await this.loading.present();
	}
	
	
	/**
	* StoriesBookmarksPage.dismissLoading()
	**/
	async dismissLoading() {
		if(this.loading){
			await this.loading.dismiss();
		}
	}
	
	
	/**
	* StoriesBookmarksPage.removeWishlist()
	**/
	public removeBookmark(id:string){
		this.storiesStorageService.removeItem(`stories-bookmark`,id).then((items)=>{
			this.presentLoading();
		});
		setTimeout(() => {
			this.storiesStorageService.getItems(`stories-bookmark`).then((items)=>{
				this.dataBookmarks = items;
				this.dismissLoading();
			});
		}, 1000);
	}
	
	
	/**
	* StoriesBookmarksPage.clearWishlist()
	**/
	public clearBookmarks(){
		this.storiesStorageService.clearItems(`stories-bookmark`).then((items)=>{
			this.presentLoading();
		});
		setTimeout(() => {
			this.storiesStorageService.getItems(`stories-bookmark`).then((items)=>{
				this.dataBookmarks = items;
				this.dismissLoading();
			});
		}, 1000);
	}
	
	
	
	
	/**
	* StoriesBookmarksPage.doRefresh()
	**/
	public doRefresh(refresher){
		this.storiesStorageService.getItems(`stories-bookmark`).then((items)=>{
			this.dataBookmarks = items;
		});
		setTimeout(() => {
			refresher.target.complete();
		}, 2000);
	}
	
	




}
