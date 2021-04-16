import{FormGroup}from '@angular/forms';


export function mustmatch(controlName:string, Matchingcontrol:string){
    return(FormGroup:FormGroup)=>{
        const control=FormGroup.controls[controlName];
        const Matchingcontrol=FormGroup.controls[MatchingControlName];

        if(Matchingcontrol.errors && !Matchingcontrol.errors.mustmatch){
            return
        }
        if(control.value!==Matchingcontrol.value){
            Matchingcontrol.setErrors({mustMatch:true});
        }  else {
            Matchingcontrol.setErrors(null);
        }
        }
        }


