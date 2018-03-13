import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';

import {Page404Component} from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
