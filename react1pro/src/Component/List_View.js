import React from 'react'
import Form from 'react-bootstrap/Form';

export default function List_View() {
    const data =
        ['Use Array.map',
            'Not a for loop',
            'Give each item a unique key',
            'Avoid using array index as the key']

    const listItems = data.map((value) =>

        <li key={value.toString()}>
            <Form.Check inline />
            {value}
        </li>
    );
    return (

        <>
            <ul>{listItems}</ul>
        </>
    )
}
