import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';
import { LocalStorageService } from '../../local-storage.service';
import { Local } from 'protractor/built/driverProviders';
import { UserObject } from '../../interfaces/userObject';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  registerForm!: FormGroup;
  userId: string = '';
  user: string = '';
  pass: string = '';
  userObject = {user: this.user, pass: this.pass, userId: this.userId}
  constructor(private modalService: ModalService, private fb: FormBuilder, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.initRegForm();
  }

  initRegForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username(): any {return this.registerForm.get('username'); }
  get password(): any {return this.registerForm.get('password'); }

  clearUsername() { this.username.setValue(''); }
  clearPassword() { this.password.setValue(''); }

  openModal(id: string, e:any) {
    e.preventDefault();
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  setUserObject(userObject: UserObject) {
    // generate UUid
    userObject.userId = 'TEMP UUID USERID VALUE';
    userObject.user = this.username.value;
    userObject.pass = this.password.value;
  }

  onSubmit() {
    this.setUserObject(this.userObject);
    this.localStorageService.setItem('user', JSON.stringify(this.userObject));
    this.clearPassword();
    this.clearUsername();
    this.closeModal('register-modal');
  }

}