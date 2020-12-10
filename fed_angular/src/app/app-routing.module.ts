import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SuccessHomeComponent } from './success-home/success-home.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { ApprovalHomeComponent } from './admin/approval-home/approval-home.component';
import { DeclineReasonComponent } from './admin/decline-reason/decline-reason.component';
import { AssignBatchandgroupComponent } from './admin/assign-batchandgroup/assign-batchandgroup.component';
import { AssignMotivatorComponent } from './admin/assign-motivator/assign-motivator.component';
import { ModifyUserComponent } from './admin/modify-user/modify-user.component';
import { ModifyChallengerComponent } from './admin/modify-challenger/modify-challenger.component';
import { MotivatorDetailsComponent } from './admin/motivator-details/motivator-details.component';
import { ModifyMotivatorComponent } from './admin/modify-motivator/modify-motivator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DailyLogsComponent } from './admin/daily-logs/daily-logs.component';
import { MonthlyChartsComponent } from './admin/monthly-charts/monthly-charts.component';
import { ViewMessageComponent } from './admin/view-message/view-message.component';
import { SendMessageComponent } from './admin/send-message/send-message.component';
import { FinalReportComponent } from './admin/final-report/final-report.component';
import { LogoutComponent } from './logout/logout.component';
import { MotivatorSidebarComponent } from './motivator/motivator-sidebar/motivator-sidebar.component';
import { MotivatorHomeComponent } from './motivator/motivator-home/motivator-home.component';
import { MotivatorInboxComponent } from './motivator/motivator-inbox/motivator-inbox.component';
import { SendMessageMotivatorComponent } from './motivator/send-message-motivator/send-message-motivator.component';
import { ChangePasswordComponent } from './motivator/change-password/change-password.component';
import { ChallengerSidebarComponent } from './challenger/challenger-sidebar/challenger-sidebar.component';
import { ChallengerHomeComponent } from './challenger/challenger-home/challenger-home.component';
import { PdfViewerComponent } from './challenger/pdf-viewer/pdf-viewer.component';
import { UpdateDailylogComponent } from './challenger/update-dailylog/update-dailylog.component';
import { UpdateMonthlylogComponent } from './challenger/update-monthlylog/update-monthlylog.component';

const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'adminDashboardSidebar', outlet: 'sidebar',component: AdminSidebarComponent},
  { path: 'adminDashboard', component: AdminHomeComponent},
  { path: 'successpage', component: SuccessHomeComponent},
  { path: 'requests', component: ApprovalHomeComponent},
  { path: 'decline/:email', component: DeclineReasonComponent},
  { path: 'assignBatchGroup', component: AssignBatchandgroupComponent},
  { path: 'assignMotivator', component: AssignMotivatorComponent},
  { path: 'modifyUser', component: ModifyUserComponent},
  { path: 'modifyChallenger/:userId', component: ModifyChallengerComponent},
  { path: 'motivatorDetails', component: MotivatorDetailsComponent},
  { path: 'modifyMotivator/:userId', component: ModifyMotivatorComponent},
  { path: 'uploadPlan', component: FileUploadComponent},
  { path: 'dailyLogs', component: DailyLogsComponent},
  { path: 'monthlyCharts', component: MonthlyChartsComponent},
  { path: 'viewMessage', component: ViewMessageComponent},
  { path: 'sendMessage', component: SendMessageComponent},
  { path: 'viewReport', component: FinalReportComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'motivatorDashboardSidebar', outlet: 'sidebar',component: MotivatorSidebarComponent},
  { path: 'motivatorDashboard', component: MotivatorHomeComponent},
  { path: 'viewMessageMotivator', component: MotivatorInboxComponent},
  { path: 'sendMessageMotivator', component: SendMessageMotivatorComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'challengerDashboardSidebar', outlet: 'sidebar',component: ChallengerSidebarComponent},
  { path: 'challengerDashboard', component: ChallengerHomeComponent},
  { path: 'pdfViewer', component: PdfViewerComponent},
  { path: 'updatedailylog', component: UpdateDailylogComponent},
  { path: 'updatemonthlyChart', component: UpdateMonthlylogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
