/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { ImageZoomDirective } from "./image-zoom.directive";

describe("ImageZoomDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let modalController = null;
		// please write the code manually
		const directive = new ImageZoomDirective(elementRef,modalController);
		expect(directive).toBeTruthy();
	});
});
