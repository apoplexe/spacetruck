import React, { ReactNode, useEffect } from "react";
import { Furniture } from "./Inventory";
import { MdCheck, MdDelete } from "react-icons/md";
import styles from "./InventoryList.css";
import Button from "../Button";

export interface ListProps<Furniture> {
  items: ReadonlyArray<Furniture>;
}

export interface Props extends ListProps<Furniture> {
  removeFurniture: (furnitures: ReadonlyArray<Furniture>) => void;
}

const InventoryList = React.memo((props: Props) => {
  const { removeFurniture, items } = props;
  const [itemsSelected, setItemsSelected] = React.useState<
    ReadonlyArray<number>
  >([]);

  const handleItemClick = (index: number) => {
    itemsSelected.includes(index)
      ? setItemsSelected(itemsSelected.filter(activeId => activeId !== index))
      : setItemsSelected([...itemsSelected, index]);
  };

  const handleRemoveFurniture = (index: number) => {
    removeFurniture(items.filter((item, idx) => idx !== index));
    setItemsSelected([])
  };
  
  const handleRemoveAll = () => {
    removeFurniture(items.filter((item, idx) => !itemsSelected.includes(idx)));
    setItemsSelected([])
  };

  const renderListOfFurniture = React.useMemo(
    () =>
      items.map((item, index) => {
        return (
          <li
            onClick={() => handleItemClick(index)}
            className={styles.furnitureItem}
            key={item.furnitureLabel}
          >
            <div className={styles.checkbox}>
              {itemsSelected.includes(index) && <MdCheck />}
            </div>
            <div className={styles.furnitureInfos}>
              <span className={styles.furnitureLabel}>
                {item.furnitureLabel}
              </span>
              <span className={styles.furnitureVolume}>
                {`${item.furnitureVolume} m3`}
              </span>
            </div>
            <div
              onClick={() => handleRemoveFurniture(index)}
              className={styles.removeItem}
            >
              <MdDelete />
            </div>
          </li>
        );
      }),
    [items, itemsSelected]
  );

  return (
    <>
      <ul className={styles.furnitureList}>{renderListOfFurniture}</ul>
      <Button onClick={handleRemoveAll} >Delete all</Button>
    </>
  );
});

export default InventoryList;
