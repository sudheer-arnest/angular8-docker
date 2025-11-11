import { AbstractControl,ValidationErrors } from "@angular/forms";

export function Custumvalidator(control:AbstractControl):ValidationErrors|null{
    const forbidden = control.value =="todo"
    return forbidden?{noTodo:true}:null
}