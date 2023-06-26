import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlide = styled(Slider)`
    position: relative;
    margin-top: 30px;
    margin-bottom: -40px;
    width: 100%;

    .slick-list {
        position: absolute;
        width: 700px;
        height: 370px;
        margin: 0 auto;
        overflow: hidden;
        top: -30px;
    }

    .slick-slider {
        display: flex;
        border: 20px solid black;
    }

    .slick-track {
        display: flex;
        height: 100%;
    }

    .slick-dots {
        display: none !important;
    }

    .slick-arrow {
        padding: 4px 6px;
        transform: translate(30px, 150px);
        background-color: transparent;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    .slick-prev {
        position: absolute;
        top: -20px;
        right: -800px;
        cursor: pointer;
        z-index: 100;
    }

    .slick-next::after{
        display: none;
    }

    .slick-next {
        position: absolute;
        top: -20px;
        left: 700px;
        cursor: pointer;
    }
`;