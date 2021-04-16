import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes  = [{path:'',component:HomeComponent},
{path:'authors',component:AuthorsComponent},{path:'books',component:BooksComponent},{path:'add-book',component:AddBookComponent},
{path:'login', component:LoginComponent,
children:[
  {path:'signup', component:SignupComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
