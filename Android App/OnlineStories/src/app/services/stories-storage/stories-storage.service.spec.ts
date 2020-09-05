/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { TestBed } from "@angular/core/testing";

import { StoriesStorageService } from "./stories-storage.service";

describe("StoriesStorageService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));
	
	it("should be created", () => {
		const service: StoriesStorageService = TestBed.get(StoriesStorageService);
		expect(service).toBeTruthy();
	});
});
