import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {tree} from '../../assets/mock_tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @ViewChild('')
  item;
  children;
  selected = false;
  selection = [];
  constructor() { }

  ngOnInit() {
    this.item = tree.map((a) => a);
    console.log(this.item);

    this.children = this.item.map(a => a.children);
    console.log(this.children);
  }


}
