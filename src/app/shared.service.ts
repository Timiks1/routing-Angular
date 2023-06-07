import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public key : string = '';
  public acess : boolean = false;
  public reg : string = "Register";
  constructor() { }
  public Change(){
    this.acess = true;
    this.reg = "Sign Out";
  }
}
