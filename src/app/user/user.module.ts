import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {userRoutes} from './user.routes'
import {ProfileComponent} from './profile.components'
import { LoginComponent } from './login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:[
    ProfileComponent,
    LoginComponent
  ],
  providers:[

  ]
})

export class UserModule{

}
