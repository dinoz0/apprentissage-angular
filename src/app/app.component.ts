import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 

  appareils: any[];


  isAuth = false;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  onAllumer() {
		if(confirm('Allumer tout?')) {
      this.appareilService.switchOnAll();
    } else {
      return null;
    }
    return '';
	}

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
      return '';
  }
}
