import { makeAutoObservable } from 'mobx'

export default class Store {
	constructor() {
		this._link = 0

		makeAutoObservable(this)
	}

	setLink(link) {
		this._link = link
	}

	get link() {
		return this._link
	}
}
