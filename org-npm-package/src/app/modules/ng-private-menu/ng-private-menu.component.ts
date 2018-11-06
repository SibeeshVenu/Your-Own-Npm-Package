import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-private-menu',
  templateUrl: './ng-private-menu.component.html',
  styleUrls: ['./ng-private-menu.component.scss']
})
export class NgPrivateMenuComponent implements OnInit {
  @Input()
  items;
  ngOnInit() { }
}
