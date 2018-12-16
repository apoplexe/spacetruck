import React, { useEffect } from "react";
import TextInput from "../TextInput";
import volumeCalculator from "../../utils/volumeCalculator";
import { ListProps } from './InventoryList';
import { Furniture } from "./Inventory";
import * as styles from './InventoryForm.css'
import classnames from 'classnames'

console.log(styles)
const msg = Object.freeze({
  furnitureLabel: "Nom du meuble",
  lengthLabel: "Longueur (cm)",
  widthLabel: "Largeur (cm)",
  heightLabel: "Hauteur (cm)",
  addFurniture: "Ajouter"
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

  useEffect(() => console.log(items), [items])
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

    addFurniture([{
      furnitureVolume: furnitureVolume,
      furnitureHeight: furnitureHeight,
      furnitureWidth: furnitureWidth,
      furnitureLength: furnitureLength,
      furnitureLabel: furnitureLabel
    }, ...items])
  };

  const handleLabelValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLabel(event.currentTarget.value);
 
  const handleWidthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureWidth(parseFloat(event.currentTarget.value));
  
  const handleHeightValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureHeight(parseFloat(event.currentTarget.value));

  const handleLengthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLength(parseFloat(event.currentTarget.value));

  return (
    <>
      <form className={classnames(styles.root)} onSubmit={handleSubmit}>
        <TextInput onChange={handleLabelValueChange} name={msg.furnitureLabel} required/>
        <TextInput onChange={handleLengthValueChange} name={msg.lengthLabel} required/>
        <TextInput onChange={handleWidthValueChange} name={msg.widthLabel} required/>
        <TextInput onChange={handleHeightValueChange} name={msg.heightLabel} required/>
        <input type='submit' value={msg.addFurniture} />
      </form>
      <span className={classnames(styles.furnitureVolume)} >{furnitureVolume}</span>
    </>
  );
});

export default InventoryForm;
