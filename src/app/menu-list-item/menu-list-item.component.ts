import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavItem} from '../nav-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({transform: 'rotate(0deg)'})),
            state('expanded', style({transform: 'rotate(180deg)'})),
            transition('expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ])
    ]
})
export class MenuListItemComponent implements OnInit {
    expanded: boolean;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input() item: NavItem;
    @Input() depth: number;

  constructor(public router: Router) {
      if (this.depth === undefined) {
          this.depth = 0;
      }
  }

  ngOnInit() {
  }

    onItemSelected(item: NavItem) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    }

}
