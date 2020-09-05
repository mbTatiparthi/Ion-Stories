/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoriesBookmarksPage } from "./stories-bookmarks.page";

const routes: Routes = [
	{
		path: "",
		component: StoriesBookmarksPage,
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StoriesBookmarksPageRoutingModule {}
