import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { ForgotComponent } from "./forgot/forgot.component";
import { RegisterComponent } from "./register/register.component";
import { OtpComponent } from "./otp/otp.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { JobListComponent } from "./job-list/job-list.component";
import { JobViewComponent } from "./job-view/job-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// import { UserAuthenticateService } from "./user-authenticate-service";

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    OtpComponent,
    LockscreenComponent,
    JobListComponent,
    JobViewComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers: [UserAuthenticateService],
})
export class LoginModule {}
