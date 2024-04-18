import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fact } from '../../models/models';

@Component({
  selector: 'app-facts',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
  @Input() public data:Fact;

  constructor(){}
}
