import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { LocalStorageService } from '../../local-storage.service';
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
  storageUser!: UserObject;
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

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openRegisterModal() {
    this.modalService.close('login-modal');
    this.modalService.open('register-modal');
  }

  setUserObject(userObject: UserObject) {
    userObject.userId = '';
    userObject.user = this.username.value;
    userObject.pass = this.password.value;
  }

  checkLocalStorage():UserObject {
    this.setUserObject(this.userObject);
    this.storageUser = this.localStorageService.getItem('user') ? JSON.parse(this.localStorageService.getItem('user') || '') : null;
    if(this.storageUser !== null) {
      if(this.storageUser.pass === this.userObject.pass && this.storageUser.user === this.userObject.user)
      this.userObject.userId = this.storageUser.userId
    }
    return this.userObject
  }

  onSubmit() {
    const user = this.checkLocalStorage();
    console.log('login-modal.component.ts -- user:', user);
    this.clearPassword();
    this.clearUsername();
    this.closeModal('login-modal');
  }

}
