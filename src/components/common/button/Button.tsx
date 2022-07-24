import styles from './Button.module.css'

type TVariant = 'Transparent' | 'Filled'
type Props = {
    value: string;
    onClick: () => void;
    variant?: TVariant
}
const Button = ({
    value,
    onClick = () => { },
    variant = 'Filled'
}: Props) => {

    const VariantStyle = variant === 'Filled' ? styles.filledBg : styles.whiteBg;
    const btnStyle = styles.button
    const className = `${btnStyle} ${VariantStyle}`

    return (
        <button onClick={onClick} className={className}>
            {value}
        </button>
    )
}

export default Button