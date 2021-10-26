import { Action, Dispatch } from 'redux'
import { FormStorage } from './components/form'
import { PreviewStorage } from './components/preview'

export interface Storage {
  form: FormStorage
  preview: PreviewStorage
}

export interface PeopleData {
  name: string;
  age: number | string;
}


export interface IAction {
  type: string
  payload?: unknown
}

export interface IActionAsync {
  (dispatch: Dispatch<IAction>): void
}

export interface DispatchWithFn extends Dispatch<IAction> {
  <A extends Action>(action: IAction | IActionAsync): A
}

export interface IProps {
  dispatch?: DispatchWithFn
}
