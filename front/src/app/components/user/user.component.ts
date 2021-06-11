import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }


  ngOnInit(): void {
    this.getUsers();
      
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.userService.users = res;
      },
      err=> console.error(err) 
    )
  }

  addUser(form: NgForm) {
    if (form.value._id) {
      // console.log('actualizando');  
      this.userService.updateUser(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else {
      this.userService.createUsers(form.value).subscribe(
        res => {
          this.getUsers();
          form.reset();
        },
        err => console.error(err)
      );
    }
  }

  deleteUser(_id: any) {
    if (confirm('¿estás de acuerdo con borrar esta persona?')) {
      this.userService.deleteUsers(_id).subscribe(
        (res) => {
          this.getUsers();
        },
        (err) => console.error(err)
      );
    } 
  }

  editUser(user: User) {
    // console.log(user);
    this.userService.selectedUser = user;
    
  }

}
