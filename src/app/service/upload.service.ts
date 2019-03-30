import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  static API_URL: string = 'http://localhost:3000/default/';
  constructor(private http: HttpClient) { }

  fileUpload(files: any): Observable<Object> {
    const formData: any = new FormData();
    const fileArray: Array<File> = files;
    for (let i = 0; i < fileArray.length; i++) {
      formData.append('uploads[]', fileArray[i], fileArray[i]['name']);
    }
    return this.http.post(UploadService.API_URL + 'upload', formData)
      .pipe(
        map(x => {
          return x;
        })
      );
  }

  fileDownload(): Observable<any> {
    return this.http.get(UploadService.API_URL + 'getAllFiles')
      .pipe(
        map(x => {
          return x;
        })
      );
  }
}
