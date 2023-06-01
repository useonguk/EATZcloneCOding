import styled from "styled-components";
import Image from "../../images/mexicanDance.jpg"

const ImageStyled = styled.div`
    width: 90%;
    height: 80%;
    background-size: contain;
    background-image: url(${Image});
    background-repeat: no-repeat;
`;

export default ImageStyled;