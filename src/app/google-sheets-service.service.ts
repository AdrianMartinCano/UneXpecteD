import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private apiKey: string = 'TU_CLAVE_DE_API';
  private clientId: string = 'TU_CLIENT_ID';
  private spreadsheetId: string = 'TU_ID_DE_HOJA_DE_CALCULO';
  private gapi: any;

  constructor() {
    this.loadGapi();
  }

  private loadGapi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => this.initClient();
    document.body.appendChild(script);
  }

  private initClient() {
    this.gapi = (window as any).gapi;
    this.gapi.load('client:auth2', () => {
      this.gapi.client.init({
        apiKey: this.apiKey,
        clientId: this.clientId,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
      }).then(() => {
        this.gapi.auth2.getAuthInstance().signIn();
      });
    });
  }

  public appendData(data: any[]) {
    this.gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [data]
      }
    }).then((response: any) => {
      console.log('Data appended:', response);
    }, (error: any) => {
      console.error('Error appending data:', error);
    });
  }
}