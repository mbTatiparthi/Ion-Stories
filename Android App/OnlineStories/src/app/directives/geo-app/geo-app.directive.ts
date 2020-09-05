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
import { Platform } from "@ionic/angular";

@Directive({
	selector: "[geoApp]"
})

export class GeoAppDirective {

	@Input() location: string;
	@Input() query: string;

	constructor( 
		private elementRef: ElementRef,
		private inAppBrowser: InAppBrowser,
		private platform: Platform
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.runGeoApp(this.location,this.query);
	}


	
	/**
	* runGeoApp($loc,$query)
	* @param string $loc = "-0.0486027,99.888909"
	**/
	
	private runGeoApp(loc: string, query: string){
		let MyLoc = loc || "-0.0486027,99.888909";
		let MyQuery = query || "";
		let urlSchema;
		if (this.platform.is("ios")){
			urlSchema = "maps://?q=" + MyLoc;
		}else{
			urlSchema = "geo:" + MyLoc + "?q=" + MyQuery;
		}
		this.inAppBrowser.create(urlSchema,"_system");
	}
	


}
