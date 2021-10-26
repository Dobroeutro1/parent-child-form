import React from 'react'
import { FormState, FormProps } from './interfaces'
import btnPlus from '../../../media/btn_plus.svg'

export class Form extends React.PureComponent<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      parent: { name: "", age: '' },
      child: [{ name: "", age: '' }]
    }
  }

  componentDidMount(): void {
    this.setState({ parent: this.props.parent, child: this.props.child })
  }

  componentDidUpdate(prevProps: Readonly<FormProps>): void {
    if (prevProps !== this.props) {
      this.setState({ parent: this.props.parent, child: this.props.child })
    }
  }

  onSetParent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.currentTarget
    this.setState({ parent: { ...this.state.parent, [id]: value } })
  }

  onAddChild = (): void => {
    this.setState({ child: [...this.state.child, { name: '', age: '' }] })
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  render(): React.ReactNode {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__element">
          <h1 className="form__title">Персональные данные</h1>
          <div className="form-group">
            <label htmlFor="name" className="form-group__label">Имя</label>
            <input className="form-group__input" type="text" id="name" value={this.state.parent.name} onChange={this.onSetParent} />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="form-group__label">Возраст</label>
            <input className="form-group__input" type="text" id="age" value={this.state.parent.age} onChange={this.onSetParent} />
          </div>
        </div>

        <div className="form__element">
          <div className="form__header">
            <h1 className="form__title form__title_header">Дети (макс. 5)</h1>
            {this.state.child.length > 4 ? null : <button className="form__btn" onClick={this.onAddChild}>
              <img src={btnPlus} alt="plus" className="form__btn-img" />
              <p className="form__btn-text">Добавить ребенка</p>
            </button>}

          </div>
          <div className="form-group_wrap">
            <div className="form-group">
              <label htmlFor="name" className="form-group__label">Имя</label>
              <input className="form-group__input" type="text" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="age" className="form-group__label">Возраст</label>
              <input className="form-group__input" type="text" id="age"/>
            </div>
            <button className="form-group__btn">Удалить</button>
          </div>
        </div>
        <button className="form__btn btn_common" type="submit">Сохранить</button>
      </form>
    )
  }
}
