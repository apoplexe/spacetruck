import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
}

const TextInput = (props: Props) => {
    const { name, ...childs } = props

    return (
        <input type="text" placeholder={name} {...childs}/>
    )
}

export default TextInput
