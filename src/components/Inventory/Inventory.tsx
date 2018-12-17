import React, { useEffect } from "react";
import InventoryForm from "./InventoryForm";
import InventoryList from "./InventoryList";

import styles from "./Inventory.css";

const msg = Object.freeze({
  botOnBoarding1: "Welcome,",
  botOnBoarding2: "Let me help you to\nmove to your next step.",
  botOnBoarding3: "Please use the furniture tool\nto add your furnitures",
  botAlertList: "Add a furniture with the form below",
  inventory: "Inventory",
  inventoryFormTitle: "Furniture tool"
});

export type Furniture = {
  furnitureVolume: number;
  furnitureHeight: number;
  furnitureWidth: number;
  furnitureLength: number;
  furnitureLabel: string;
};

interface Props {}

const Inventory = React.memo((props: Props) => {
  const [furnitureList, setFurnitureList] = React.useState<
    ReadonlyArray<Furniture>
  >([]);
  const totalVolume = React.useRef(0);

  useEffect(
    () => {
      furnitureList.forEach(furniture => {
        totalVolume.current = totalVolume.current + furniture.furnitureVolume;
      });
    },
    [furnitureList]
  );

  return (
    <>
      <section className={styles.addSection}>
        <ul className={styles.onBoardingContainer}>
          <li className={styles.onBoarding}>{msg.botOnBoarding1}</li>
          <li className={styles.onBoarding}>{msg.botOnBoarding2}</li>
          <li className={styles.onBoarding}>{msg.botOnBoarding3}</li>
        </ul>
        <article className={styles.furtnitureCalculator}>
          <h2>{msg.inventoryFormTitle}</h2>
          <InventoryForm
            items={furnitureList}
            addFurniture={setFurnitureList}
          />
        </article>
      </section>
      <section className={styles.listSection}>
        <div className={styles.listHeader}>
          <h2 className={styles.listTitle}>{msg.inventory}</h2>
          {totalVolume.current !== 0 && <span className={styles.totalVolume}>{`Total Volume : ${parseFloat((totalVolume.current).toFixed(1))} m3`}</span>}
        </div>
        {furnitureList.length !== 0 ? (
          <InventoryList
            items={furnitureList}
            removeFurniture={setFurnitureList}
          />
        ) : (
          <p className={styles.botAlertList}>{msg.botAlertList}</p>
        )}
      </section>
    </>
  );
});

export default Inventory;
