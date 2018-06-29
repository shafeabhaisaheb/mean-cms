import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CgService } from './../../../cg.service';
import { tap, delay } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component..scss']
})

export class LunchComponent implements OnInit {

 lunch_subheading: any;
 subheadForm: FormGroup;
 imageForm: FormGroup;
 lunch_image: any;
 fileUploadSub: any;
 fileToUpload: File  = null;
 uploadProgress:number = 0;
 uploadComplete:boolean = false;
 serverResponse: any;

message: any;
 uploadingProgressing:boolean = false;
 listMessage = "lunch";

  constructor(private route: ActivatedRoute, private router: Router, private service: CgService, private fb: FormBuilder, private http: HttpClient) {
  	this.createForm();
   }

 createForm() {

   this.subheadForm = this.fb.group({
      lunch_subheading: ['', Validators.required ]
   });
   this.imageForm = this.fb.group({
   });
 }


  handleFileInput(files: FileList) {
      let fileItem = files.item(0);
      console.log("file input has changed. The file is", fileItem);
      this.fileToUpload = fileItem;
  }
 

  ngOnInit() {

   console.log('Title is...' + this.listMessage);
    this.getLunch();

  }

  updateElement(name, value, id) {
    this.route.params.subscribe(params => {
        this.service.updateElement(name, value, id);
        this.message = "Updated Successfully";
        setTimeout(() => 
        {
            this.router.navigate(['lunch']);
        },
        2000);
    });
  }


  handleSubmit(event:any, statusNgForm:NgForm, imageForm:FormGroup){
    event.preventDefault()
    if (statusNgForm.submitted){
      let submittedData = imageForm.value
      this.fileUploadSub = this.fileUpload(
        this.fileToUpload, 
        submittedData).subscribe(
          event=>this.handleProgress(event), 
          error=>{
              console.log("Server error")
          });
          statusNgForm.resetForm({})
      }
    }
    

  handleProgress(event){
    if (event.type === HttpEventType.DownloadProgress) {
      this.uploadingProgressing =true
      this.uploadProgress = Math.round(100 * event.loaded / event.total)
    }
    if (event.type === HttpEventType.UploadProgress) {
      this.uploadingProgressing =true
      this.uploadProgress = Math.round(100 * event.loaded / event.total)
    }
    if (event.type === HttpEventType.Response) {
      this.uploadComplete = true
      this.serverResponse = event.body
    }
  }

  fileUpload(fileItem:File, extraData?:object):any{
    let apiCreateEndpoint = 'http://localhost:4000/upload?image_name=lunch_image';
    const formData: FormData = new FormData();
    formData.append('fileItem', fileItem, fileItem.name);
    if (extraData) {
      for(let key in extraData){
        formData.append(key, extraData[key])
      }
    }
    const req = new HttpRequest('POST', apiCreateEndpoint, formData, {
      reportProgress: true // for progress data
    });
    return this.http.request(req)
  }    

  getLunch() {
  
    this.service.getElement("lunch_subheading").subscribe(res => {
      this.lunch_subheading = res;
    });
    
    this.service.getElement("lunch_image").subscribe(res => {
      this.lunch_image = res;
    });
    
  }


}
