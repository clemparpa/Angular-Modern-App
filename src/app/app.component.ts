import { Component } from "@angular/core";
import { PresentationComponent } from "./presentation.component";

@Component({
  selector: "app-root",
  imports: [PresentationComponent],
  template: ` <app-presentation></app-presentation> `,
  styles: [],
  standalone: true,
})
export class AppComponent {
  title = "modern-app-template";
}
