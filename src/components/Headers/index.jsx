import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function header(){
    return(
        <>
            <p>로고</p>
            <input type='text' placeholder='검색어를 입력하세요'></input>
            <input type='button' value={"검색"}></input>
            <Link to="/login">로그인</Link>
            <nav>
                <Link to="/"><div>홈으로</div></Link>
            </nav>
        </>
    );
}

export default header;