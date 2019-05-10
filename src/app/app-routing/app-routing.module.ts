import { SuccessComponent } from './../success/success.component';
import { PlayComponent } from './../Play/play.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { path: '', component: PlayComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'play', component: PlayComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }