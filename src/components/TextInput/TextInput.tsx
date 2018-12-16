import React from 'react'
import styles from './TextInput.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
}

const TextInput = (props: Props) => {
    const { name, ...childs } = props

    return (
        <input className={styles.root} type="text" placeholder={name} {...childs}/>
    )
}

export default TextInput
