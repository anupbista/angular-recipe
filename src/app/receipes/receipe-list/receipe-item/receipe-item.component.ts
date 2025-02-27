import {Component, Input, OnInit} from '@angular/core';
import {Receipe} from '../../receipe.modal';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() receipe: Receipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }


}
