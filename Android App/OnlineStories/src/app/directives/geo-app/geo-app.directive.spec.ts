/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { GeoAppDirective } from "./geo-app.directive";

describe("GeoAppDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		let platform = null;
		// please write the code manually
		const directive = new GeoAppDirective(elementRef,inAppBrowser,platform);
		expect(directive).toBeTruthy();
	});
});
