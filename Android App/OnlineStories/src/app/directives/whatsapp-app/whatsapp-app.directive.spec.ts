/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { WhatsappAppDirective } from "./whatsapp-app.directive";

describe("WhatsappAppDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let inAppBrowser = null;
		// please write the code manually
		const directive = new WhatsappAppDirective(elementRef,inAppBrowser);
		expect(directive).toBeTruthy();
	});
});
