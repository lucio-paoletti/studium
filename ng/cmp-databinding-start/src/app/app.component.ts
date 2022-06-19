import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServer", content: "just a test" },
  ];

  onServerAdded(serverData : {serverName: string, serverContent: string}){
    this.serverElements.push({
      name:serverData.serverName,
      content: serverData.serverContent,
      type: "server"
    });
  }

  onBluePrintAdded(bluePrint: { serverName: string, serverContent: string }){
    this.serverElements.push({
      name: bluePrint.serverName,
      content: bluePrint.serverContent,
      type: "blueprint"
    });
  }
}
