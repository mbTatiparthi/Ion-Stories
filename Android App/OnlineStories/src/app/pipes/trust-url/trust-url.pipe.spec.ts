/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { TrustUrlPipe } from "./trust-url.pipe";

describe("TrustUrlPipe", () => {
	it("create an instance", () => {
		// please write the code manually
		let domSanitizer= null ;
		const pipe = new TrustUrlPipe(domSanitizer);
		expect(pipe).toBeTruthy();
	});
});
