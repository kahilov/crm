import { observable, action } from  'mobx'

export class ActionStore {
    @observable name
    @observable country
    @observable owner
    @observable email
    @action handleInput = (param, value) => {
        this[param] = value
    } 
}