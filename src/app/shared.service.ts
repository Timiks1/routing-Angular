import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public key : string = '';
  public acess : boolean = false;
  public reg : string = "Register";
  public btnName : string = "Сохранить"
  constructor() { }
  public Change(){
    this.acess = true;
    this.reg = "Sign Out";
    this.btnName = "Выйти"
  }
  public LogOut(){
    this.btnName = "Сохранить";
    this.key = '';
    this.acess = false;
  }
}
