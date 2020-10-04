import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {userRoutes} from './user.routes'
import {ProfileComponent} from './profile.components'
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes),
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
