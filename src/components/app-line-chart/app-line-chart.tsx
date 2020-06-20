import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-line-chart',
  styleUrl: 'app-line-chart.css',
})
export class AppLineChart implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Generating Line Chart</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          Put something here
        </ion-content>
      </Host>
    );
  }

}
