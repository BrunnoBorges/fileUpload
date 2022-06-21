import { UploadService } from './upload.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput?: ElementRef;

  files?: Set<File>;
  fileType: any;
  fileToUpload = new FormData();
  selectedFiles?: FileList;
  user: string = 'Brunno Diego Oliveira Borges'

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    
    this.selectedFiles = <FileList>event.srcElement.files;

    this.fileType = this.selectedFiles[0].name;
    const fileNames = [];
    this.files = new Set();
    for(let i = 0; i < this.selectedFiles.length; i++) {
      fileNames.push(this.selectedFiles[i].name)
      this.files.add(this.selectedFiles[i]);
    }
  }

  onUpload() {

    if(this.files && this.files.size > 0) {
      console.log('sdsdsd', this.files);
      this.uploadService.upload(this.files, this.user)
        .subscribe(resp => console.log('Upload concluido'))
    }
  }

}
