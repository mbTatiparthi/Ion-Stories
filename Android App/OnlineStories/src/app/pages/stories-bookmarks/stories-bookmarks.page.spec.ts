/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StoriesBookmarksPage } from "./stories-bookmarks.page";

describe("StoriesBookmarksPage", () => {
	let component: StoriesBookmarksPage;
	let fixture: ComponentFixture<StoriesBookmarksPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ StoriesBookmarksPage ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StoriesBookmarksPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
