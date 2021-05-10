import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Nav extends Component {
  

  render() {

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='Home'
            
          />
          <Menu.Item
            name='Eassys'
            active
          />
        </Menu>
        
      </Segment>
    )
  }
}
