import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {tree} from '../../assets/mock_tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  // @ViewChild('')
  index;
  item;
  children;
  selected = false;
  selection = [];
  itemChecked = false;
  constructor() { }

  ngOnInit() {
    this.item = tree.map((a) => a);
    console.log(this.item);

    this.children = this.item.map(a => a.children);
    console.log(this.children);
  }

  check(isSelected, item) {
  if (isSelected) {
    this.selection.push(item.value);
    console.log(this.selection);
  } else {
  this.index = this.selection.indexOf(item.value);
   this.selection.splice(this.index, 1);
   console.log(this.selection);
  }
  }


}
