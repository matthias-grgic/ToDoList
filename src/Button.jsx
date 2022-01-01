import styled from 'styled-components'

function Button ({isLarge, text}) {
const buttonClass = isLarge ? 'button button--large' : 'button'
    return <Button1 className={buttonClass}>{text}</Button1>

}

export default Button;

const Button1 = styled.button`
background: transparent;
  border-radius: 20px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 2em 0.25em 2em;
  height: 42px;
  font-size: 1rem;
  font-weight: 900;
`
const Button2 = styled(Button1)`
`
