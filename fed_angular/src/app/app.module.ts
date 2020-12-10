import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { SuccessHomeComponent } from './success-home/success-home.component';
import { ApprovalHomeComponent } from './admin/approval-home/approval-home.component';
import { DeclineReasonComponent } from './admin/decline-reason/decline-reason.component';
import { AssignBatchandgroupComponent } from './admin/assign-batchandgroup/assign-batchandgroup.component';
import { AssignMotivatorComponent } from './admin/assign-motivator/assign-motivator.component';
import { Globals } from './globals';
import { FilterPipe } from './filter.pipe';
import { ModifyUserComponent } from './admin/modify-user/modify-user.component';
import { ModifyChallengerComponent } from './admin/modify-challenger/modify-challenger.component';
import { FilterPipe1 } from './filter1.pipe';
import { ModifyMotivatorComponent } from './admin/modify-motivator/modify-motivator.component';
import { MotivatorDetailsComponent } from './admin/motivator-details/motivator-details.component';
import { FilterPipe2 } from './filter2.pipe';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileSelectDirective} from "ng2-file-upload";
import { DailyLogsComponent } from './admin/daily-logs/daily-logs.component';
import { MonthlyChartsComponent } from './admin/monthly-charts/monthly-charts.component';
import { FilterPipe3 } from './filter3.pipe';
import { ViewMessageComponent } from './admin/view-message/view-message.component';
import { SendMessageComponent } from './admin/send-message/send-message.component';
import { FinalReportComponent } from './admin/final-report/final-report.component';
import { ChartsModule } from 'ng2-charts';
import { LogoutComponent } from './logout/logout.component';
import { MotivatorHomeComponent } from './motivator/motivator-home/motivator-home.component';
import { MotivatorSidebarComponent } from './motivator/motivator-sidebar/motivator-sidebar.component';
import { MotivatorInboxComponent } from './motivator/motivator-inbox/motivator-inbox.component';
import { SendMessageMotivatorComponent } from './motivator/send-message-motivator/send-message-motivator.component';
import { ChangePasswordComponent } from './motivator/change-password/change-password.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { ChallengerHomeComponent } from './challenger/challenger-home/challenger-home.component';
import { ChallengerSidebarComponent } from './challenger/challenger-sidebar/challenger-sidebar.component';
import { PdfViewerComponent } from './challenger/pdf-viewer/pdf-viewer.component';
import { UpdateDailylogComponent } from './challenger/update-dailylog/update-dailylog.component';
import { UpdateMonthlylogComponent } from './challenger/update-monthlylog/update-monthlylog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    SuccessHomeComponent,
    ApprovalHomeComponent,
    DeclineReasonComponent,
    AssignBatchandgroupComponent,
    AssignMotivatorComponent,
    FilterPipe,
    ModifyUserComponent,
    ModifyChallengerComponent,
    FilterPipe1,
    ModifyMotivatorComponent,
    MotivatorDetailsComponent,
    FilterPipe2,
    FileUploadComponent,
    FileSelectDirective,
    DailyLogsComponent,
    MonthlyChartsComponent,
    FilterPipe3,
    ViewMessageComponent,
    SendMessageComponent,
    FinalReportComponent,
    LogoutComponent,
    MotivatorHomeComponent,
    MotivatorSidebarComponent,
    MotivatorInboxComponent,
    SendMessageMotivatorComponent,
    ChangePasswordComponent,
    ChallengerHomeComponent,
    ChallengerSidebarComponent,
    PdfViewerComponent,
    UpdateDailylogComponent,
    UpdateMonthlylogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    ChartsModule,
    PdfJsViewerModule
  ],
  providers: [UserService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
