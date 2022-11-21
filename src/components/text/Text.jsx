const Text = ({ text, placeholder = 'no data' }) => {
    console.log(text);
    return (<span>{text ? text : placeholder}</span>)
}

export default Text