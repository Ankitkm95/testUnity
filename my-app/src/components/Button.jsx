import styled from 'styled-components';

const Button = ({btnText}) => {
    return (
        <Wrapper>
            {btnText}
        </Wrapper>
    )
}

export default Button;

const Wrapper = styled.button`
    background-color: white;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 4px;
    color: blue
`