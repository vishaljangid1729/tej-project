import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const Table_que = () => (
  <Table >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Min Score</Table.HeaderCell>
        <Table.HeaderCell>Max Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell as = {Link} to = "/question">More and more people use computer </Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell as = {Link} to = "/question">Censorship in the Libraries "All Of us can think Of a that we </Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>4</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell as = {Link} to = "/question">Winter Hibiscus by Minfong Ho Saeng, a girl, and her family have moved to</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>14</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell as = {Link} to = "/question">Wülter Hibiscus by Minfong Ho Saeng, a ørl, md her family haw "Kwed to</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>14</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell as = {Link} to = "/question">Write Being patient means that are understanding tolerant. A patient </Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>14</Table.Cell>
      </Table.Row>

     
    </Table.Body>
  </Table>
)

export default Table_que
