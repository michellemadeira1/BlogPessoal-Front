import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // caminho do seletor 
  templateUrl: './app.component.html',// templete
  styleUrls: ['./app.component.css'] //estilo css
})
export class AppComponent {
  
  constructor (
    public auth : AuthService
  ){}


}
