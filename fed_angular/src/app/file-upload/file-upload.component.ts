import { Component, OnInit } from '@angular/core';
import { Response } from '../model/response';
import { FileUploader } from 'ng2-file-upload';
import { UserService } from '../service/user.service';
import { Admin } from '../model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  batchName: any = ["AboveBMI25", "BelowBMI25"];
  disable: number;
  response: Response;
  batchselected: string = "AboveBMI25";
  user: Admin;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });

  constructor(private router: Router, private userService: UserService) { 
    this.user = new Admin();
  }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "admin"){
      this.router.navigate(['/']);
    }
  }

  validateFile(fileEvent: any) {
    const file: File = fileEvent.target.files[0];
    console.log('size', file.name);
    console.log('type', file.type);
    if(file.size <= 10000000 && file.type == "application/pdf" && file.name!=null){
        this.disable = 1;
    }
    else{
      this.response = new Response();
      this.response.response = "file size should be less than 10 MB and format should be PDF."
    }
  }

  selectBatch(event: any){
    this.batchselected = event.target.value;
  }

  onSubmit(){
    let data = new FormData();
    let fileItem = this.uploader.queue[0]._file;
    console.log(fileItem.name);
    data.append('file', fileItem);
    data.append( 'dataType', "application/pdf");
    data.append('batch', this.batchselected);
    this.userService.uploadFile(data).subscribe(data => alert(data.response));
  }

}
