import { Component, OnInit, ViewChild, RootRenderer } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  @ViewChild('pdfViewer', null) pdfViewer;

  user: Admin;

  constructor(private router: Router,private userService: UserService) { 
    this.user = new Admin();
  }

  async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "challenger"){
      this.router.navigate(['/']);
    }
    this.userService.downloadFile().subscribe(result =>{
      this.pdfViewer.pdfSrc = result;
    })
    await this.userService.resolveAfter1Seconds(2);
    this.pdfViewer.refresh();
  }

}
