import React, { ReactNode, useEffect } from "react";
import { Furniture } from "./Inventory";
import { MdCheck, MdDelete } from "react-icons/md";
import styles from "./InventoryList.css";

export interface ListProps<Furniture> {
  items: ReadonlyArray<Furniture>;
}

export interface Props extends ListProps<Furniture> {}

const InventoryList = React.memo((props: Props) => {
  const { items } = props;
  const [itemsSelected, setItemsSelected] = React.useState<ReadonlyArray<number>>([]);

  // useEffect(() => console.log(itemsSelected), [itemsSelected])

  const handleItemClick = (index: number) => {
      itemsSelected.includes(index)
          ? setItemsSelected(itemsSelected.filter(activeId => activeId !== index))
          : setItemsSelected([...itemsSelected, index]);
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
            <div className={styles.removeItem}><MdDelete /></div>
          </li>
        );
      }),
    [items]
  );

  return <ul className={styles.furnitureList}>{renderListOfFurniture}</ul>;
});

export default InventoryList;
