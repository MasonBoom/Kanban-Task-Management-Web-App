import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #F4F7FD;
    border-radius: 6px;
    width: 200px;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

export const Switch = styled.input.attrs(props => ({
    type: "checkbox",
}))`
    border-radius: 50%;
    width: 40px;
    height: 20px;
    background: #635FC7;
    margin: 0 20px;
`
