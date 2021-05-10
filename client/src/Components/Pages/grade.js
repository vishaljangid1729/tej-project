import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import Nav from '../nav'

function Grade () {
    return (
        <>
            <Nav></Nav>
            <Container>
            <Segment>
                <Header size = "huge" >Grade: 7</Header>
                <p>Congratulations! Maximum Possible Score on this question is 12</p>

            </Segment>

            </Container>
        </>
    )
}

export {Grade}