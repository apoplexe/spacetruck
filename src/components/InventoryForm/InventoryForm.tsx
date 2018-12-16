import React, { EventHandler, useEffect } from "react";
import TextInput from "../TextInput";
import volumeCalculator from "../../utils/volumeCalculator";
import Button from "../Button";

const msg = Object.freeze({
  furnitureLabel: "Nom du meuble",
  lengthLabel: "Longueur (cm)",
  widthLabel: "Largeur (cm)",
  heightLabel: "Hauteur (cm)",
  addFurniture: "Ajouter"
});

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

const InventoryForm = () => {
  const [furnitureVolume, setFurnitureVolume] = React.useState(0);
  const [furnitureWidth, setFurnitureWidth] = React.useState(0);
  const [furnitureHeight, setFurnitureHeight] = React.useState(0);
  const [furnitureLength, setFurnitureLength] = React.useState(0);

  useEffect(
    () => {
      console.log("coucou");
      setFurnitureVolume(
        volumeCalculator(furnitureWidth, furnitureHeight, furnitureLength)
      );
    },
    [furnitureWidth, furnitureHeight, furnitureLength]
  );

  const handleWidthValueChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFurnitureWidth(parseFloat(event.currentTarget.value));
  };

  const handleHeightValueChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setFurnitureHeight(parseFloat(event.currentTarget.value));
  };

  const handleLengthValueChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setFurnitureLength(parseFloat(event.currentTarget.value));
  };

  return (
    <>
      <form>
        <TextInput name={msg.furnitureLabel} />
        <TextInput onChange={handleLengthValueChange} name={msg.lengthLabel} />
        <TextInput onChange={handleWidthValueChange} name={msg.widthLabel} />
        <TextInput onChange={handleHeightValueChange} name={msg.heightLabel} />
        <Button>{msg.addFurniture}</Button>
      </form>
      <span>{furnitureVolume}</span>
    </>
  );
};

export default InventoryForm;
