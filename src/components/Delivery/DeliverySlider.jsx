import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import * as S from './DeliveryStyled';

export default () => {
    const [eattype, setEattype] = useState(true)

    const chooseEat = (e) =>{
        console.log("클릭");
        setEattype(!eattype);
    }
    return(
        <>
            <S.StyleFlex>
                <S.StyleAdder />
                <S.StyleBordText>주소를 설정해 주세요!</S.StyleBordText>
                <S.AdderSetting role="button"><span>주소설정</span></S.AdderSetting>
            </S.StyleFlex>
            <S.StyleFlex>
                <label>
                    <S.ImgLanderingUp role="button" check={eattype} onClick={chooseEat} />
                    <S.ImgLanderingDown role="button" check={eattype} onClick={chooseEat} />
                    <Link to="/serchStore">
                        <S.FindStore>매장찾기</S.FindStore>
                    </Link>
                </label>
                슬라이드 만들어야함
            </S.StyleFlex>
        </>
    );
}