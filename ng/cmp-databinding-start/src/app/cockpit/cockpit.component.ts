import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = "";
  // newServerContent = "";

  constructor() { }

  ngOnInit(): void { }

  onAddServer(server : {name:HTMLInputElement,content:HTMLInputElement}) {
    // console.log(server)
    this.serverCreated.emit({
      serverName: server.name.value,
      serverContent: server.content.value
    });
  }

  onAddBlueprint(server: { name: HTMLInputElement, content: HTMLInputElement }) {
    console.log(server)
    this.blueprintCreated.emit({
      serverName: server.name.value,
      serverContent: server.content.value
    });
  }
}
