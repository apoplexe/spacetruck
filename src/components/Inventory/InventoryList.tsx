import React, { ReactNode } from "react";
import { Furniture } from "./Inventory";

export interface ListProps<Furniture> {
  items: ReadonlyArray<Furniture>;
}

export interface Props extends ListProps<Furniture> {}

const InventoryList = React.memo((props: Props) => {
  const { items } = props;
  console.log(items)
  const renderListOfFurniture = React.useMemo(
    () =>
      items.map((item, index) => {
        return (
          <li key={item.furnitureLabel}>
          <div>check</div>
          <div><span>{item.furnitureLabel}</span><span>{item.furnitureVolume} m3</span></div>
          <div>delete</div>
          </li>
        )
      }),
    [items]
  );
  console.log(renderListOfFurniture)
  return <ul>{renderListOfFurniture}</ul>;
});

export default InventoryList