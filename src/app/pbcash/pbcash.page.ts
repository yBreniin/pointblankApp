import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-pbcash',
  templateUrl: './pbcash.page.html',
  styleUrls: ['./pbcash.page.scss'],
})
export class PbcashPage implements OnInit {

  constructor(public loadingController: LoadingController, public router: Router) {}

  ngOnInit() {
  }

  loading(){

    this.presentLoadingWithOptions();

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //spinner: null,
      duration: 2000,
      message: 'Um Instante...',
      //translucent: true,
      //cssClass: 'custom-class custom-loading',
      //backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
    this.router.navigate(['loading']);
  }
}
