import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
  @Input() public imgUrl:string;
  @Input() public description:string;

  constructor(){}
}
