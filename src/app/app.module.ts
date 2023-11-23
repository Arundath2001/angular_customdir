import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AuthorComponent } from './author/author.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkstyleDirective } from './linkstyle.directive';
import { IconHoverDirective } from './iconhover.directive';
import { MainheadDirective } from './mainhead.directive';
import { HeadStyleDirective } from './headstyle.directive';
import { ParagraphstyleDirective } from './paragraphstyle.directive';
import { ButtonstyleDirective } from './buttonstyle.directive';
import { DivStyleDirective } from './divstyle.directive';
import { SmalldivstyleDirective } from './smalldivstyle.directive';
import { ImagestyleDirective } from './imagestyle.directive';
import { DivnewDirective } from './divnew.directive';
import { WhitebgDirective } from './whitebg.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AuthorComponent,
    DownloadComponent,
    HomeComponent,
    NavbarComponent,
    LinkstyleDirective,
    IconHoverDirective,
    MainheadDirective,
    HeadStyleDirective,
    ParagraphstyleDirective,
    ButtonstyleDirective,
    DivStyleDirective,
    SmalldivstyleDirective,
    ImagestyleDirective,
    DivnewDirective,
    WhitebgDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
