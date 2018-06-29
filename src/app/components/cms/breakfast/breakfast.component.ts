import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CgService } from './../../../cg.service';
import { tap, delay } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component..scss']
})

export class BreakfastComponent implements OnInit {

 breakfast_subheading: any;
 subheadForm: FormGroup;
 imageForm: FormGroup;
 breakfast_image: any;
 fileUploadSub: any;
 fileToUpload: File  = null;
 uploadProgress:number = 0;
 uploadComplete:boolean = false;
 serverResponse: any;

 uploadingProgressing:boolean = false;
 listMessage = "breakfast";
 message: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: CgService, private fb: FormBuilder, private http: HttpClient) {
  	this.createForm();
   }

 createForm() {

   this.subheadForm = this.fb.group({
      breakfast_subheading: ['', Validators.required ]
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
    this.getBreakfast();

  }

  updateElement(name, value, id) {
    this.route.params.subscribe(params => {
        this.service.updateElement(name, value, id);
        this.message = "Updated Successfully";
        setTimeout(() => 
        {
            this.router.navigate(['breakfast']);
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
    let apiCreateEndpoint = 'http://localhost:4000/upload?image_name=breakfast_image';
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

  getBreakfast() {
  
    this.service.getElement("breakfast_subheading").subscribe(res => {
      this.breakfast_subheading = res;
    });
    
    this.service.getElement("breakfast_image").subscribe(res => {
      this.breakfast_image = res;
    });
    
  }


}
