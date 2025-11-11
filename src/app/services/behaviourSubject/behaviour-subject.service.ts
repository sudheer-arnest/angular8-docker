import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {
  private buttonText = new BehaviorSubject<string>('get Dogs Info')
  currentButtontext = this.buttonText.asObservable();
  constructor() { }
  changeButtonText(message:string){
    this.buttonText.next(message);
  }
}
