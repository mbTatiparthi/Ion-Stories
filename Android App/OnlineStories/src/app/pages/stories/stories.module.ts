/**
* @author devmahi <devmahi.me@gmail.com>
* @copyright Online Stories 2020
* @version 01.01.01
* @license licenses.txt
*
* @date 2020-07-02 04:29:58
**/

import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { DirectivesModule } from "./../../directives/directives.module";
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { StoriesPageRoutingModule } from "./stories-routing.module";
import { environment } from "./../../../../src/environments/environment";
import { Observable } from "rxjs";
import { StoriesService } from "./../../services/stories/stories.service";
import { StoriesStorageService } from "./../../services/stories-storage/stories-storage.service";
import { ToastController } from "@ionic/angular";
import { ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../../components/popover/popover.component";
import { StoriesPage } from "./stories.page";


/** i18n **/
import localeEnGb from "@angular/common/locales/en-GB";
registerLocaleData(localeEnGb, "en-GB");


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		HttpClientModule,
		DirectivesModule,
		PipesModule,
		ComponentsModule,
		IonicStorageModule.forRoot({ name : "OnlineStories"  }),
		StoriesPageRoutingModule
	],
	declarations: [StoriesPage],
	exports: [],
	entryComponents: [],
	providers: [{ provide: LOCALE_ID, useValue: "en-GB" },StatusBar,StoriesService,StoriesStorageService,ToastController,PopoverController]
})
export class StoriesPageModule {}
