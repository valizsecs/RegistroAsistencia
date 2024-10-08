import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUsername(); // Obtén el nombre del usuario
  }
}
