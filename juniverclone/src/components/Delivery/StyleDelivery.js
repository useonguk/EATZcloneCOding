import styled from "styled-components";

export const StyleAdder = styled.div`
    background-image: url("https://stat.lotteeatz.com/20230622-1/assets/images/common/comm_ico_location.svg");
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    margin-right: 0.5rem;
`;

export const StyleFlex = styled.div`
    display: flex;
    justify-items: center;
    width: 60%;
`;

export const StyleBordText = styled.div`
    font-weight: 600;
    font-size: 14px;
`;

export const AdderSetting = styled.div`
    position: fixed;
    right: 0px;
    border-radius: 10rem;
    border: 1px solid black;
    padding: 5px;
    font-size: 12px;
    margin-right: 40%;
`;

export const ImgLanderingUp = styled.div`
    width: 3em;
    height: 3em;
    border: 1px solid #000000;
    ${(props) =>
        props.check &&`
            background-color: #ffffff;
            background-image: url('https://stat.lotteeatz.com/20230622-1/assets/images/main/ico_addr_delevery_off.svg');
            background-repeat: no-repeat;
        `
    }
    ${(props) => 
    !props.check &&`
            background-color: #00A5B9;
            background-image: url('https://stat.lotteeatz.com/20230622-1/assets/images/main/ico_addr_delevery_on.svg');
            background-repeat: no-repeat;
        `
    };
`;

export const ImgLanderingDown = styled.div`
    width: 3em;
    height: 3em;
    border: 1px solid #000000;
    align-items: center;
    ${(props) => 
        props.check &&`
            background-color: #00A5B9;
            background-image: url('https://stat.lotteeatz.com/20230622-1/assets/images/main/ico_addr_pickup_on.svg');
            background-repeat: no-repeat;
        `
    }   
    ${(props) => 
        !props.check &&`
            background-color: #ffffff;
            background-image: url('https://stat.lotteeatz.com/20230622-1/assets/images/main/ico_addr_pickup_off.svg');
            background-repeat: no-repeat;
        `
    }
`;

