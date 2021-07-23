import React from 'react';
import { useDrag } from 'react-dnd';

export interface IItem {
    id: number;
    name: string;
}

export interface IItemWithData {
    type: string;
    data: IItem;
}

interface IItemProps {
    item: IItem;
}

const Item: React.FC<IItemProps> = ({ item }) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: 'item',
            data: item,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    let opacityValue;
    isDragging ? (opacityValue = '0.5') : (opacityValue = '1');

    let backgroundColorValue;
    isDragging ? (backgroundColorValue = 'lightgrey') : (backgroundColorValue = 'white');

    return (
        <div
            className="item"
            ref={drag}
            style={{ opacity: opacityValue, backgroundColor: backgroundColorValue }}
        >
            {item.name}
        </div>
    );
};

export default Item;
