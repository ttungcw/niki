import React from 'react';
import Item from '../Item/Item';
function ListItem({ data }) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <Item item={item} />
                </li>
            ))}
        </ul>
    );
}

export default ListItem;
