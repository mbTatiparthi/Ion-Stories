/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";


@Injectable({
	providedIn: "root"
})

export class StoriesStorageService {
	
	constructor(
		private storage: Storage
	){



	}


	/**
	* StoriesStorageService.getItems(table:string)
	**/
	public async getItems(table:string){
		let data:any = [] ;
		this.storage.forEach((val,key,index) => {
			let prefix : string = `${table}:`;
			if(key.substring(0,prefix.length) ==  prefix){
				data.push(val);
			}
		});
		return await data;
	}
	
	
	/**
	* StoriesStorageService.getItem(table:string,key:string)
	**/
	public async getItem(table:string,key:string){
		return await this.storage.get(`${table}:${key}`);
	}
	
	
	/**
	* StoriesStorageService.setItem(table:string,key:string,val:any)
	**/
	public async setItem(table:string,key:string,value:any){
		return await this.storage.set(`${table}:${key}`,value);
	}
	
	
	/**
	* StoriesStorageService.removeItem(table:string,key:string)
	**/
	public async removeItem(table:string,key:string){
		return await this.storage.remove(`${table}:${key}`);
	}
	
	
	/**
	* StoriesStorageService.clearItems(table:string)
	**/
	public async clearItems(table:string) {
		this.storage.forEach((iValue, iKey, iIndex) => {
			let prefix : string = `${table}:`;
			if(iKey.substring(0,prefix.length) ==  prefix){
				this.storage.remove(`${iKey}`);
			}
		});
	}



}

