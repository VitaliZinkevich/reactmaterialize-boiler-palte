import React from 'react'
import {Row, Input,Dropdown, Button, Navbar, NavItem, Icon, Footer } from 'react-materialize';


const Test = ()=>{
    return (
        <main>

            <Row>
                <Input s={6} 
                onChange={function(e, value, ...rest) {
                    console.log (e, value)
                }}
                label="First Name" validate><Icon>account_circle</Icon></Input>
                <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
            </Row>

            <Row>
                <Input name='on' type='date' onChange={function(e, value) {
                    console.log (e, value)
                }} />
            </Row>
        </main>
    )
}

export default Test