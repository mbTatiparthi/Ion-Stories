/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 08:05:11
**/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { AppSideMenus } from "./app.side-menus";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Dialogs } from "@ionic-native/dialogs/ngx";
import { Device } from "@ionic-native/device/ngx";
import { Globals } from "./class/globals/globals";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { DirectivesModule } from "./directives/directives.module";
import { PipesModule } from "./pipes/pipes.module";
import { environment } from "./../../src/environments/environment";

import { AdMobFree } from "@ionic-native/admob-free/ngx";
import { AdMobFreeBannerConfig } from "@ionic-native/admob-free/ngx";
import { AdMobFreeInterstitialConfig } from "@ionic-native/admob-free/ngx";
import { AdMobFreeRewardVideoConfig } from "@ionic-native/admob-free/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		DirectivesModule,
		PipesModule,
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot({ name : "OnlineStories" }),
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		InAppBrowser,
		Dialogs,
		Device,
		AppSideMenus,
		Globals,
		AppSideMenus,
		AdMobFree,
		OneSignal,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
