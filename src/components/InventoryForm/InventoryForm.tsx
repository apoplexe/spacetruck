import React, { EventHandler, useEffect } from "react";
import TextInput from "../TextInput";
import volumeCalculator from "../../utils/volumeCalculator";

const msg = Object.freeze({
  furnitureLabel: "Nom du meuble",
  lengthLabel: "Longueur (cm)",
  widthLabel: "Largeur (cm)",
  heightLabel: "Hauteur (cm)",
  addFurniture: "Ajouter"
});

type Furniture = {
  furnitureVolume: number;
  furnitureHeight: number;
  furnitureWidth: number;
  furnitureLength: number;
  furnitureLabel: string;
};

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

const InventoryForm = () => {
  const [furnitureLabel, setFurnitureLabel] = React.useState('');
  const [furnitureVolume, setFurnitureVolume] = React.useState(0);
  const [furnitureWidth, setFurnitureWidth] = React.useState(0);
  const [furnitureHeight, setFurnitureHeight] = React.useState(0);
  const [furnitureLength, setFurnitureLength] = React.useState(0);
  const [furnitureList, setFurnitureList] = React.useState<ReadonlyArray<Furniture>>([]);

  useEffect(() => console.log(furnitureList), [furnitureList])
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

    setFurnitureList([{
      furnitureVolume: furnitureVolume,
      furnitureHeight: furnitureHeight,
      furnitureWidth: furnitureWidth,
      furnitureLength: furnitureLength,
      furnitureLabel: furnitureLabel
    }, ...furnitureList])
  };

  const handleLabelValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLabel(event.currentTarget.value);
 
  const handleWidthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureWidth(parseFloat(event.currentTarget.value));
  
  const handleHeightValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureHeight(parseFloat(event.currentTarget.value));

  const handleLengthValueChange = (event: React.FormEvent<HTMLInputElement>) => setFurnitureLength(parseFloat(event.currentTarget.value));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput onChange={handleLabelValueChange} name={msg.furnitureLabel} required/>
        <TextInput onChange={handleLengthValueChange} name={msg.lengthLabel} required/>
        <TextInput onChange={handleWidthValueChange} name={msg.widthLabel} required/>
        <TextInput onChange={handleHeightValueChange} name={msg.heightLabel} required/>
        <input type='submit' value={msg.addFurniture} />
      </form>
      <span>{furnitureVolume}</span>
    </>
  );
};

export default InventoryForm;
