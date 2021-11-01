import styled from "styled-components";

export const StyledWrapper = styled.div`
padding: 5%;
margin: 0;
height: 100%;
width: 100%;
display: grid;
grid-column: 1;
grid-auto-flow: column;
grid-template-columns: max-content;
gap: 128px;

@media screen and (max-width: 1280px) {
    display: flex;
    gap: 18px;
    padding: 2%;
    padding-bottom: 120px;
}
}

.mainBlock{
    width: 100%;
    height: 100%;
    gap: 18px;
    @media screen and (max-width: 1280px) {
gap:0;

}
`;
