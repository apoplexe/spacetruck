import React, { useEffect } from "react";
import TextInput from "../TextInput";
import volumeCalculator from "../../utils/volumeCalculator";
import { ListProps } from './InventoryList';
import { Furniture } from "./Inventory";
import styles from './InventoryForm.css'
import Button from '../Button'

const msg = Object.freeze({
  furnitureLabel: "Furniture name",
  lengthLabel: "length (cm)",
  widthLabel: "Width (cm)",
  heightLabel: "Height (cm)",
  addFurniture: "Add Furniture"
});

interface Props extends React.FormHTMLAttributes<HTMLFormElement>, ListProps<Furniture>  {
  addFurniture: (furnitures: ReadonlyArray<Furniture>) => void
}

const InventoryForm = React.memo((props: Props) => {
  const { addFurniture, items } = props
  const [furnitureLabel, setFurnitureLabel] = React.useState('');
  const [furnitureVolume, setFurnitureVolume] = React.useState(0);
  const [furnitureWidth, setFurnitureWidth] = React.useState(0);
  const [furnitureHeight, setFurnitureHeight] = React.useState(0);
  const [furnitureLength, setFurnitureLength] = React.useState(0);

  useEffect(
    () => {
      setFurnitureVolume(
        volumeCalculator(furnitureWidth, furnitureHeight, furnitureLength)
      );
    },
    [furnitureWidth, furnitureHeight, furnitureLength]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    addFurniture([...items, {
      furnitureVolume: furnitureVolume,
      furnitureHeight: furnitureHeight,
      furnitureWidth: furnitureWidth,
      furnitureLength: furnitureLength,
      furnitureLabel: furnitureLabel
    }])
  };

  const handleLabelValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLabel(event.currentTarget.value);
 
  const handleWidthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureWidth(parseFloat(event.currentTarget.value));
  
  const handleHeightValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureHeight(parseFloat(event.currentTarget.value));

  const handleLengthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLength(parseFloat(event.currentTarget.value));

  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <TextInput onChange={handleLabelValueChange} name={msg.furnitureLabel} required/>
          <TextInput onChange={handleLengthValueChange} name={msg.lengthLabel} required/>
          <TextInput onChange={handleWidthValueChange} name={msg.widthLabel} required/>
          <TextInput onChange={handleHeightValueChange} name={msg.heightLabel} required/>
          <Button kind="secondary" type='submit' >{msg.addFurniture}</Button>
        </div>
        <span className={styles.furnitureVolume} >{`Volume : ${furnitureVolume} m3`}</span>
      </form>
    </>
  );
});

export default InventoryForm;
