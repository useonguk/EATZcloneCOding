import React from 'react';

function Header(){
    return(
        <>
            <p>로고</p>
            <input type='text' placeholder='검색어를 입력하세요'></input>
            <input type='button' value={"검색"}></input>
            <input type='button' value={"로그인"}></input>
        </>
    );
}

export default Header;