import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { BehaviourSubjectService } from "src/app/services/behaviourSubject/behaviour-subject.service";
@Component({
    selector: 'app-lifecycle',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [UserService]
})

export class HomeComponent implements OnInit {
    name: string = ""
    dogsInfo: any[] = [];
    dogInfoButtonText:any=""
    constructor(private userService: UserService,private authServive:AuthService,private behaviouralButtonText:BehaviourSubjectService) {
        this.name = this.userService.getUserName();
    }
    ngOnInit(): void {
        this.behaviouralButtonText.currentButtontext.subscribe(msg=>this.dogInfoButtonText=msg)
    }
    handleDogInfoClick() {
        this.name = this.userService.getChangeName();
        this.userService.getDogBreedInfo().subscribe(data => { 
            this.dogsInfo = data.data 
            this.behaviouralButtonText.changeButtonText("view Dogs Info")
        })
    }
    handleLoginClick(){
        this.authServive.login();
        alert(`SucessFully LoggedIn`)
    }
}