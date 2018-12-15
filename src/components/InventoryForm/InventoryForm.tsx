import React from 'react'
import TextInput from '../TextInput'

const msg = Object.freeze({
    furnitureLabel: 'Nom du meuble',
    lengthLabel: 'Longueur (cm)',
    widthLabel: 'Largeur (cm)',
    heightLabel: 'Hauteur (cm)'
})

type Props = {
}

const InventoryForm = () => (
    <form>
        <TextInput name={msg.furnitureLabel} />
        <TextInput name={msg.lengthLabel} />
        <TextInput name={msg.widthLabel} />
        <TextInput name={msg.heightLabel} />
    </form>
)

export default InventoryForm
