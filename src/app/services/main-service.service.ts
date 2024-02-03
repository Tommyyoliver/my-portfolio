import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MainServiceService {

  languageSubject = new BehaviorSubject<string>("en");

  getLanguage(): Observable<string> {
    return this.languageSubject.asObservable();
  }

  changeLanguage() {
    if (this.languageSubject.getValue() == "en") {
      this.languageSubject.next("es");
    } else {
      this.languageSubject.next("en");
    }
  }

}
