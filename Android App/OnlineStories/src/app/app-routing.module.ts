/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "about-us",
		loadChildren: () => import("./pages/about-us/about-us.module").then(m => m.AboutUsPageModule)
	},
	{
		path: "categories",
		loadChildren: () => import("./pages/categories/categories.module").then(m => m.CategoriesPageModule)
	},
	{
		path: "home",
		loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
	},
	{
		path: "privacy-policy",
		loadChildren: () => import("./pages/privacy-policy/privacy-policy.module").then(m => m.PrivacyPolicyPageModule)
	},
	{
		path: "stories-bookmarks",
		loadChildren: () => import("./pages/stories-bookmarks/stories-bookmarks.module").then(m => m.StoriesBookmarksPageModule)
	},
	{
		path: "stories-detail",
		loadChildren: () => import("./pages/stories-detail/stories-detail.module").then(m => m.StoriesDetailPageModule)
	},
	{
		path: "stories-detail/:id",
		loadChildren: () => import("./pages/stories-detail/stories-detail.module").then(m => m.StoriesDetailPageModule)
	},
	{
		path: "stories",
		loadChildren: () => import("./pages/stories/stories.module").then(m => m.StoriesPageModule)
	},
	{
		path: "stories/:param_id",
		loadChildren: () => import("./pages/stories/stories.module").then(m => m.StoriesPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
