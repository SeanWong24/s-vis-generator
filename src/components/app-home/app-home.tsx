import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>S Vis Generator</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          Put something here
        </ion-content>
      </Host>
    )
  }
}
