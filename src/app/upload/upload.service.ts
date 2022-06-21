import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, user: string) {

    const formData = new FormData();
    console.log('---->', formData);
    files.forEach(file => formData.append('file', file, file.name))

    return this.http.post(`http://localhost:8000/upload?user=${user}`, formData);
  }

}
