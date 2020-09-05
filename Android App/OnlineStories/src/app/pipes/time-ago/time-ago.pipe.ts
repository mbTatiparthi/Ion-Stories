/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Pipe, PipeTransform } from "@angular/core";

/**
 * TimeAgo pipe
 * Convert Date into time ago format

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */


@Pipe({
	name: "timeAgo",
})

export class TimeAgoPipe implements PipeTransform {

	constructor(
		
	){



	}

	transform(value:any,args?:any): any{

			let date: any = new Date(value);
			var seconds = Math.floor((Date.now() - date) / 1000);
			var interval = Math.floor(seconds / 31536000);
			if (interval > 1) { return interval + " years ago";}
			interval = Math.floor(seconds / 2592000);
			if (interval > 1) { return interval + " months ago";}
			interval = Math.floor(seconds / 86400);
			if (interval > 1) { return interval + " days ago";}
			interval = Math.floor(seconds / 3600);
			if (interval > 1) { return interval + " hours ago"; }
			interval = Math.floor(seconds / 60);
			if (interval > 1) { return interval + " minutes ago"; }
			return Math.floor(seconds) + " seconds ago";
			


	}
}
