import React from 'react'
import { PreviewProps } from '.'

export class Preview extends React.PureComponent<PreviewProps, never> {
  render(): React.ReactNode {
    return <div className="preview">
      <h1>preview</h1>
    </div>
  }
}
