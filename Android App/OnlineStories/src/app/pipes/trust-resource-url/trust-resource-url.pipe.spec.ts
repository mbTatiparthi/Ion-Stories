/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { TrustResourceUrlPipe } from "./trust-resource-url.pipe";

describe("TrustResourceUrlPipe", () => {
	it("create an instance", () => {
		// please write the code manually
		let domSanitizer= null ;
		const pipe = new TrustResourceUrlPipe(domSanitizer);
		expect(pipe).toBeTruthy();
	});
});
