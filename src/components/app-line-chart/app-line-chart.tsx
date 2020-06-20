import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { alertController } from '@ionic/core';
import 's-vis';

@Component({
  tag: 'app-line-chart',
  styleUrl: 'app-line-chart.css',
})
export class AppLineChart implements ComponentInterface {

  private datasetTextAreaElement: HTMLIonTextareaElement;

  @State() data: [number, number][][];
  @State() minX: number;
  @State() maxX: number;
  @State() minY: number;
  @State() maxY: number;

  async updateDatasetString(value: string) {
    try {
      const dataMatrix: number[][] = [];
      let columnCount: number = -1;
      const rows = value.split('\n');
      for (const row of rows) {
        const lineValues = [];
        const values = row.split(',');
        if (columnCount < 0) {
          columnCount = values.length;
        } else if (columnCount !== values.length) {
          throw new Error('Value count for each line is different.');
        }

        for (const value of values) {
          if (Number.isNaN(+value)) {
            throw new Error('There is a non-numric value.');
          }
          lineValues.push(+value);
        }
        dataMatrix.push(lineValues);
      }
      const data: [number, number][][] = [];
      for (let columnIndex = 1; columnIndex < dataMatrix[0].length; columnIndex++) {
        const lineData: [number, number][] = [];
        for (let rowIndex = 0; rowIndex < dataMatrix.length; rowIndex++) {
          const point: [number, number] = [
            dataMatrix[rowIndex][0],
            dataMatrix[rowIndex][columnIndex]
          ];
          lineData.push(point);
        }
        data.push(lineData);
      }

      this.data = data;
    } catch (e) {
      const alert = await alertController.create({
        header: 'Invalid Input',
        subHeader: 'The input dataset cannot be parsed.',
        message: e?.message,
        buttons: ['OK']
      });

      await alert.present();
    }
  }

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

        <ion-content>
          <ion-grid slot="fixed">
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-content>
                    <ion-item>
                      <ion-label position="stacked">Dataset</ion-label>
                      <ion-textarea
                        ref={el => this.datasetTextAreaElement = el}
                        rows={10}
                        placeholder="Enter the dataset here (as CSV format)"
                      ></ion-textarea>
                    </ion-item>
                    <ion-button onClick={() => this.updateDatasetString(this.datasetTextAreaElement?.value)}>Confirm</ion-button>

                    <ion-item>
                      <ion-label position="fixed">Min X</ion-label>
                      <ion-input
                        clearInput={true}
                        type="number"
                        inputmode="numeric"
                        value={this.minX}
                        placeholder="Not Set(Auto)"
                        onIonChange={({ detail: { value } }) => this.minX = +value}
                      ></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="fixed">Max X</ion-label>
                      <ion-input
                        clearInput={true}
                        type="number"
                        inputmode="numeric"
                        value={this.maxX}
                        placeholder="Not Set(Auto)"
                        onIonChange={({ detail: { value } }) => this.maxX = +value}
                      ></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="fixed">Min Y</ion-label>
                      <ion-input
                        clearInput={true}
                        type="number"
                        inputmode="numeric"
                        value={this.minY}
                        placeholder="Not Set(Auto)"
                        onIonChange={({ detail: { value } }) => this.minY = +value}
                      ></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="fixed">Max Y</ion-label>
                      <ion-input
                        clearInput={true}
                        type="number"
                        inputmode="numeric"
                        value={this.maxY}
                        placeholder="Not Set(Auto)"
                        onIonChange={({ detail: { value } }) => this.maxY = +value}
                      ></ion-input>
                    </ion-item>
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <s-line-chart
                    data={this.data}
                    minX={this.minX}
                    maxX={this.maxX}
                    minY={this.minY}
                    maxY={this.maxY}
                  ></s-line-chart>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </Host>
    );
  }

}
