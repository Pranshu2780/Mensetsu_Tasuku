import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions'
import Item from './Item';


const ItemsList = ({ items, updateItem }) => ( // Mapping all elements
    <ul className={'item-list'}>
        {items.map(item => (
            <Item key={ item.id } {...item} onClick={() => updateItem(item.id)}/>
        ))}
    </ul>
)

const mapStateToProps = state => ({   // Return current state to Components
    items: state.items
})

const mapDispatchToProps = dispatch => ({  // Updating present state
    updateItem: id => dispatch(updateItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)