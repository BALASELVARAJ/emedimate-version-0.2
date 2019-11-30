// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  private access_token : string;
  private token_type : string;
  private expires_in : number;
  private emailID : string;
  private userID : string = '';
  private roleID : number;
  private deviceID : string = '';
  private isChangePassword : string;
  private issued : string;
  private expired : string;
  private signedInData : signedInDataDT;
  private autoLoginData : signedInDataDT = null;  
  constructor() {
    this.getAutoLoginData();
  }

  public updateSignedInData(signedInData: signedInDataDT) {
	this.access_token = signedInData.access_token;
    this.token_type = signedInData.token_type;
    this.expires_in = signedInData.expires_in;
    this.emailID = signedInData.emailID;
    this.UserID = signedInData.UserID;
    this.roleID = signedInData.roleID;
    this.deviceID = signedInData.deviceID;
    this.isChangePassword = signedInData.isChangePassword;
    this.issued = signedInData.issued;
		this.expired = signedInData.expired;
		this.signedInData = signedInData;
		localStorage.setItem('signedInData',JSON.stringify(this.signedInData));
	}
  public get SignedInData() : signedInDataDT {
    return this.signedInData;
  }
	private getAutoLoginData(): void { 
		if(localStorage.getItem('signedInDataDT')) {
			let autoLoginData = JSON.parse(localStorage.getItem('signedInDataDT'));
			this.autoLoginData = autoLoginData;
		}
	}
	public get AutoLoginData() : signedInDataDT {
		return this.autoLoginData;
	}
	public clearAutoLoginData() {
		localStorage.clear();
		this.autoLoginData = null;
		this.signedInData = null;
		
	}
	public get UserID() : string {
		return this.userID;
	}
	public set UserID(v: string) {
		this.userID = v;
	}
	public get Access_token() : string {
		return this.access_token;
	}
	public set Access_token(v: string) {
		this.access_token = v;
	}
	public get Token_type() : string {
		return this.token_type;
	}
	public set Token_type(v: string) {
		this.token_type = v;
	}
	public get Expires_in() : number {
		return this.expires_in;
	}
	public set Expires_in(v: number) {
		this.expires_in = v;
	}
	public get EmailID() : string {
		return this.emailID;
	}
	public set EmailID(v: string) {
		this.emailID = v;
	}
	public get RoleID() : number {
		return this.roleID;
	}
	public set RoleID(v: number) {
		this.roleID = v;
	}
	public get DeviceID() : string {
		return this.deviceID;
	}
  public set DeviceID(v: string) {
		this.deviceID = v;
	}
	public get IsChangePassword() : string {
		return this.isChangePassword;
	}
  public set IsChangePassword(v: string) {
		this.isChangePassword = v;
	}
	public get Issued() : string {
		return this.issued;
	}
  public set Issued(v: string) {
		this.issued = v;
	}
	public get Expired() : string {
		return this.expired;
	}
  public set Expired(v: string) {
		this.expired = v;
	}
}


interface signedInDataDT {
	access_token :  string,
	token_type :  string,
	expires_in : number,
	emailID :  string,
	UserID :  string,
	roleID :  number,
	deviceID :  string,
	isChangePassword :  string,
	issued :  string,
	expired :  string 
}
