import { Component, OnInit } from '@angular/core';
import { GoogleService, GoogleObj } from '../services/google.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
  providers: [GoogleService]
})
export class MessengerComponent implements OnInit {
  public googleObj: GoogleObj = new GoogleObj();
  public key: string;
  public result: '';
  private btnSubmit: any;

  constructor(private google: GoogleService) { }

  ngOnInit(): void {
    this.btnSubmit = document.getElementById('btnSubmit');
  }

  send() {
    this.btnSubmit.disabled = true;
    this.google.translate(this.googleObj, this.key).subscribe((res:any) => {
      this.btnSubmit.disabled = false;
      this.result = res.data.translation[0].translatedText;
    },
    err => {
      console.log(err);
    }
    )
  }

}
