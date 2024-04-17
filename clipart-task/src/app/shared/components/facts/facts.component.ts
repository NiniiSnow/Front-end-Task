import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facts',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
  @Input() public imgUrl:string;
  @Input() public description:string;

  constructor(){}
}
