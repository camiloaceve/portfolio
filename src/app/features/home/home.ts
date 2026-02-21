import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
