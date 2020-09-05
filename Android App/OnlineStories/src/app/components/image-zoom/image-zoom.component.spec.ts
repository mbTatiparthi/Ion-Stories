/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageZoomComponent } from "./image-zoom.component";

describe("ImageZoomComponent", () => {
	let component: ImageZoomComponent;
	let fixture: ComponentFixture<ImageZoomComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImageZoomComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(ImageZoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

