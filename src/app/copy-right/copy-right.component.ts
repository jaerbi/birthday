import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.scss']
})
export class CopyRightComponent {

  description: string = 'made by jaerbi 2019';

  constructor() { }

}
