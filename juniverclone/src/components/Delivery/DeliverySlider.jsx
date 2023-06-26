import React, {useState} from "react";
import * as S from './StyleDelivery';

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
                <S.AdderSetting><span>주소설정</span></S.AdderSetting>
            </S.StyleFlex>
            <S.StyleFlex>
                <label>
                    <S.ImgLanderingUp role="button" check={eattype} onClick={chooseEat} />
                    <S.ImgLanderingDown role="button" check={eattype} onClick={chooseEat} />
                </label>
                슬라이드 만들어야함
            </S.StyleFlex>
        </>
    );
}