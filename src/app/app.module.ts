import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { TodosComponent } from './components/todos/todos.component';
import { TemplateDrivenForm01Component } from './components/forms/template-driven-form01/template-driven-form01.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveForm01Component } from './components/forms/reactive-form01/reactive-form01.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodosComponent,
    TemplateDrivenForm01Component,
    ReactiveForm01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
