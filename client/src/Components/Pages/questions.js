import React from 'react'
import { Button, Container, Form, Header, TextArea, Segment } from 'semantic-ui-react'
import Nav from '../nav'
import {Link} from 'react-router-dom'

function Question (){
    return (
        <>
            <Nav></Nav>
            <Container>
                <Header as = "h1">Question Set 1</Header>
                <p>
                More and more people use computers, but not everyone agrees that this benefits saziety. Those who support advances in b&ve that
computers have a positive on people. They teach hand-eye give *ople the ability to faraway and *ople, and
even allow to talk online with other Others have different ideas. experts are that are spending much the on
their computers and less tirne exercising, enjoying nature, and interacting with family and friends. Write a to you local in which ymJ
state opinion on the effects computers have on wople. Persuade the readers to agree with you.
                </p>
                <Header as = "h2">Answer: </Header>

                <Form>
                    <TextArea></TextArea>
                </Form>
                <br></br>
                <Button as = {Link} to = "/grade" primary size = 'large'>Get Your Grade</Button>
               
            </Container>
            
        </>
    )
}

export {Question}