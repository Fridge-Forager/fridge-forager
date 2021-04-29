import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { LocalStorageService } from '../../local-storage.service';
import { Local } from 'protractor/built/driverProviders';
import {UserObject} from '../../interfaces/userObject';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  userId: string = '';
  user: string = '';
  pass: string = '';
  userObject = {user: this.user, pass: this.pass, userId: this.userId}
  constructor(private modalService: ModalService, private fb: FormBuilder, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.initRegForm();
  }

  initRegForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username(): any {return this.loginForm.get('username'); }
  get password(): any {return this.loginForm.get('password'); }

  clearUsername() { this.username.setValue(''); }
  clearPassword() { this.password.setValue(''); }

  openModal(id: string, e:any) {
    e.preventDefault();
    this.modalService.open(id);
  }

  closeModal(id: string, e:any) {
    e.preventDefault();
    this.modalService.close(id);
  }

  openRegisterModal() {
    this.modalService.close('login-modal');
    this.modalService.open('register-modal');
  }

  setUserObject()userObject:UserObject {
    let temp = this.localStorageService.getItem('user');
    userObject.pass = this.password.value;
    userObject.user = this.username.value;
  }

  onSubmit() {
    
    this.userObject.user;
    this.userObject.pass;
    this.userObject.userId;
    this.clearPassword();
    this.clearUsername();
  }

}
// const jsonValue = JSON.stringify(value);

/**
 * const jsonValue = await AsyncStorage.getItem("user");
		return jsonValue !== null ? JSON.parse(jsonValue) : null;
 */