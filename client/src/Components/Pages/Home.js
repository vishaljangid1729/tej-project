import React from 'react'
import { Container, Search } from 'semantic-ui-react'
import Nav from '../nav'
import Table_que from '../table'


function Home () {
    return (
        <>
            <Nav></Nav>
            <Container>
                <Search value = "Question Sets"></Search>
                <Table_que></Table_que>
            </Container>

        </>

    )
}

export {Home}