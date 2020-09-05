/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { ContactUsDirective } from "./contact-us.directive";

describe("ContactUsDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		let actionSheetController = null;
		let platform = null;
		// please write the code manually
		const directive = new ContactUsDirective(elementRef,inAppBrowser,actionSheetController,platform);
		expect(directive).toBeTruthy();
	});
});
