import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class Nav extends Component {
  

  render() {

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='Home'
            as = {Link}
            to = "/"
            
          />
          <Menu.Item
            name='Essay'
            active
          />
        </Menu>
        
      </Segment>
    )
  }
}
