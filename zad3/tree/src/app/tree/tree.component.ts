import { Component, OnInit, ViewChild } from '@angular/core';
import {tree} from '../../assets/mock_tree';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  item;
  selection = [];
  disp = false;
  value;
  constructor() { }

  ngOnInit() {
    this.item = tree.map((a) => a);
    console.log(this.item);
  }

  log() {
   this.item = this.item.filter((a) => a.value.toLowerCase() === this.value.toLowerCase());
  }

  check(isSelected, item) {
    item.checked = isSelected;
    if (item.checked === true) {
      for (let i = 0; i < item.children.length ; i++) {
        item.children[i].checked = isSelected;
      }
    } else if (item.checked === false) {
      for ( let i = 0; i < item.children.length; i++ ) {
        item.children[i].checked = false;
      }
    }
  }

  display(item) {
    if (item.checked) {
      this.selection.push(item.value);
      for (let i = 0; i < item.children.length; i++) {
        if (item.children[i].checked) {
           console.log(item.children[i]);
           this.selection.push(item.children[i].value);
          }
        }
      } else if (item.checked === false) {
        this.selection.splice(this.selection.indexOf(item.value), 1);
        console.log(this.selection);
        for (let j = 0; j < item.children.length; j++ ) {
          this.selection.splice(this.selection.indexOf(item.children[j].value, 1));
        }
      }
    }


    toggle(parent) {
      if (!parent.showChildren) {
        this.disp = true;
        parent.showChildren = this.disp;
      } else {
        this.disp = false;
        parent.showChildren = this.disp;
      }
    }
  }
