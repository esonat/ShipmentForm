import { FormGroup } from '@angular/forms';

export function PhoneNumberValidator(controlName:string){
    return (formGroup: FormGroup)=>{
        const control=formGroup.controls[controlName];
        var phoneNumber = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
/*

(123) 456-7890
123-456-7890
123.456.7890
1234567890

*/
        var test=phoneNumber.test(control.value);

        if(test==false){
            control.setErrors({pattern:true});
        }else{
            control.setErrors(null);
        }
    }
}