import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import TodoItem from '../TodoItem'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addWithInfo('not complete', 'An incomplete todo item', () => (
    <TodoItem text={text('Text', 'Not complete')} />
  ))
  .addWithInfo('complete', 'A complete todo item', () => (
    <TodoItem
      text={text('Text', 'Complete')}
      complete={boolean('Complete', true)} />
  ))
