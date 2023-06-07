import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {
  inputValue: string = '';
  constructor(public sharedService: SharedService) { }

  saveInput() {
    console.log(this.inputValue);
    this.sharedService.key= this.inputValue;
    if(this.sharedService.key != '' && this.sharedService.acess == false){
   this.sharedService.Change();
    }
    else{
      this.sharedService.LogOut();
    }
  }
  openLink() {
    const url = 'https://api.nasa.gov'; // Замените ссылку на нужную
    window.open(url, '_blank');
  }
}
