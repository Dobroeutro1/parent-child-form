import { FormStorage } from '../components/form'
import { IAction } from '../interfaces'

const initialState: FormStorage = {
  parent: { name: '', age: null },
  child: [{ name: '', age: null }]
}

export function reducer(state = initialState, action: IAction): FormStorage {
  switch (action.type) {
    default:
      return { ...state }
  }
}
