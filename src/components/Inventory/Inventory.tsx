import React from 'react'
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

export type Furniture = {
    furnitureVolume: number;
    furnitureHeight: number;
    furnitureWidth: number;
    furnitureLength: number;
    furnitureLabel: string;
  };

interface Props {}

const Inventory = React.memo((props: Props) => {
    const [furnitureList, setFurnitureList] = React.useState<ReadonlyArray<Furniture>>([]);

    return (
        <>
        <InventoryForm items={furnitureList} addFurniture={setFurnitureList} />
        <InventoryList items={furnitureList} />
        </>
    )
})

export default Inventory