import React from 'react'

type Props = {
    name: string
}

const TextInput = (props: Props) => {
    const { name } = props

    return (
        <input type="text" placeholder={name} />
    )
}

export default TextInput
