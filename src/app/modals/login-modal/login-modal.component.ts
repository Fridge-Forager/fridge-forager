import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private modalService: ModalService, private fb: FormBuilder) { }

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

  onSubmit() {
    this.clearPassword();
    this.clearUsername();
  }

}
