import { FitBoundsAccessor } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CardInfo } from '../models/userModels';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  form = this.fb.group({
    card_number: ['', [Validators.required]],
    name_on_card: ['', [Validators.required]],
    expiry_date: ['', [Validators.required]],
    cvv: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    public dialogRef: MatDialogRef<CardInformationComponent>,) { }

  ngOnInit(): void {
  }

  addCardInfo() {
    if(this.form.valid) {
      const data: CardInfo = {
        user: localStorage.getItem('email')!,
        card_number: this.form.controls['card_number'].value,
        expiry_pate: this.form.controls['expiry_date'].value,
        cvv: this.form.controls['cvv'].value,
        name_on_card: this.form.controls['name_on_card'].value,
      }

      this.authService.addCardInfo(data).subscribe(data => {
        console.log(data);
        this.close(true);
      });
    }
  }

  close(response: boolean) {
    this.dialogRef.close(response);
  }
 
}
