import { Component, OnInit,Output,EventEmitter, Input,OnChanges, SimpleChanges } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap,tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges {
  constructor(private userService:UserService) { }
   searchValue = new FormControl();
   @Input() message:boolean
   @Output() searchChange = new EventEmitter<string>();
  ngOnInit() {
    this.searchValue.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      // tap(val => console.log('After distinctUntilChanged:', val)),
      // switchMap(value=>this.userService.searchItems(value))
     ).subscribe(value=>{
      this.searchChange.emit(value);
     })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['message']){
      console.log(changes['message'].previousValue,changes['message'].currentValue);
    } 
   }
}
