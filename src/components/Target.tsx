import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { IItemWithData, IItem } from './Item';

interface ITargetProps {}

const Target: React.FC<ITargetProps> = () => {
    const [droppedItem, setdroppedItem] = useState<IItem>();

    const [{ isOver }, drop] = useDrop({
        accept: 'item',
        drop: (item: IItemWithData, monitor) => {
            console.log(item.data);
            setdroppedItem(item.data);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            hasDropped: !!monitor.didDrop(),
        }),
    });

    let backgroundColorValue;
    isOver ? (backgroundColorValue = 'lightgreen') : (backgroundColorValue = 'white');

    return (
        <div className="target" ref={drop} style={{ backgroundColor: backgroundColorValue }}>
            <div>Target</div>
            <br />
            <br />
            <div>{!!droppedItem ? droppedItem.name : ''}</div>
        </div>
    );
};

export default Target;
