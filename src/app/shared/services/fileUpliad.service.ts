import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(file: File, filePath: string): Observable<string> {
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // Regresa la URL del archivo subido
    return new Observable<string>((observer) => {
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              observer.next(url);
              observer.complete();
            });
          })
        )
        .subscribe();
    });
  }

  
}
