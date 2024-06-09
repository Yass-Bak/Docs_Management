import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	/**
   * storeToken
   */
	public storeToken(token: string) {
		localStorage.setItem('token', token)
	}

	/**
	 * storeRole
	 */
	public storeRole(role: string) {

		localStorage.setItem('role', role);
	}

	public storeUserData(UserData: string) {

		localStorage.setItem('userData', UserData);
	}


	/**
	 * retriveToken
	 */
	public retreiveToken() {

		return localStorage.getItem('token');
	}
	/**
		 * retriveRole
		 */
	public retreiveRole() {
		return localStorage.getItem('role');
	}
	public retreiveUserData() {
		return localStorage.getItem('userData');
	}

	public retreiveUserId() {

		let userData: User = <User>JSON.parse(this.retreiveUserData()!);
		return userData.userId;
	}


	public retreiveUserDataObject() {
		let userData: User = <User>JSON.parse(this.retreiveUserData()!);
		return userData;
	}
	/**
	 * clean
	 */
	public clean() {
		localStorage.clear();
	}
}


export interface User {
	userId: number;
	nom: number;
	prenom: number;
	email: number;
	motpasse: number;
	role: string;
}

