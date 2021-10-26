import { PreviewStorage } from '../components/preview'
import { IAction } from '../interfaces'

const initialState: PreviewStorage = {
  parent: { name: '', age: null },
  child: []
}

export function reducer(state = initialState, action: IAction): PreviewStorage {
  switch (action.type) {
    default:
      return { ...state }
  }
}
