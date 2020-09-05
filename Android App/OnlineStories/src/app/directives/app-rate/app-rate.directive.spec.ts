/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { AppRateDirective } from "./app-rate.directive";

describe("AppRateDirective", () => {
	it("should create an instance", () => {
		let elementRef = null;
		let appRate = null;
		let platform = null;
		let alertController = null;
		// please write the code manually
		const directive = new AppRateDirective(elementRef,appRate,platform,alertController);
		expect(directive).toBeTruthy();
	});
});
