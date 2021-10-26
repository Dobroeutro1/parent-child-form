import { connect } from 'react-redux'
import { Storage } from './interfaces'
import { Form, FormStorage } from './components/form'
import { Preview, PreviewStorage } from './components/preview'

export const FormContainer = connect(form)(Form),
  PreviewContainer = connect(preview)(Preview)

function form(state: Storage): FormStorage {
  return { ...state.form }
}

function preview(state: Storage): PreviewStorage {
  return { ...state.preview }
}
