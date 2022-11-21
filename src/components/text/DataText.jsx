import "style/components/text/text.scss"

const DataText = ({ text, placeholder = 'no data' }) => {
    return (<span>{text ? text : placeholder}</span>)
}

export default DataText