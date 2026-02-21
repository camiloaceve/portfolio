import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
  }
}
