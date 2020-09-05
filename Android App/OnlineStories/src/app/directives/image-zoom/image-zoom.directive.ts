/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { Directive, HostListener, Input, ElementRef } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Component } from "@angular/core";
import { ImageZoomComponent } from "../../components/image-zoom/image-zoom.component";

@Directive({
	selector: "[imageZoom]"
})

export class ImageZoomDirective {

	@Input() image: string;

	constructor( 
		private elementRef: ElementRef,
		private modalController: ModalController
	 ){


	}






	@HostListener("click", ["$event"]) onClick(e){
		this.viewZoom();
	}



	/**
	* viewZoom()
	**/
	
	private viewZoom(){
		let image = this.image || "";
		
		this.modalController.create({
			component : ImageZoomComponent,
			componentProps : {
				img: image
			}
		}).then(modal=> modal.present());
	}



}
