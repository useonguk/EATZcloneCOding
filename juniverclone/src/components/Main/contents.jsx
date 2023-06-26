// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import  Img from '../../images/mexicanDance.jpg';
import * as S from './Style';
import * as C from './StyleSlider'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/less/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useRef } from 'react';

export default () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const settions = {
        spaceBetween: 20,
    		navigation: {
                prevEl: prevRef.current, // 이전 버튼
                nextEl: nextRef.current, // 다음 버튼
            },
    		scrollbar: { draggable: true, el: null },
        	slidesPerView: 3,
            onBeforeInit: (swiper) => { // 초기 설정
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
            },
        };
    const StyledRoot = styled.div`
	    .swiper {
    		&-wrapper,
    		&-container {
      			width: 62rem;
      			margin: 0;
    		}
    		&-container {
      			margin: 0 3.2rem;
    		}
    		&-button-disabled {
      			visibility: hidden;
        }
  	}
`;
  return (
    <>
        <S.StyleCenter>
            <StyledRoot>
                <Swiper
                    {...settions}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    infinite
                    autoplay={{ delay: 3000 }} // 3초마다 슬라이드 변경
                    loop // 슬라이드 무한 루프
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/06/22/20230622083700107_3.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/05/30/20230530145424132_7.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/06/01/2023060108385151_6.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/05/22/2023052215405531_9.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/06/01/20230601154507972_9.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/05/31/20230531105551266_8.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/06/01/20230601153314204_6.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/03/30/20230330104225819_9.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/04/27/20230427162521496_1.jpg' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                    <SwiperSlide><img src='https://img.lotteeatz.com/upload/mobile/2023/03/13/20230313134648726_4.png' style={{width: '100%', height:'100%' }} /></SwiperSlide>
                </Swiper>
            </StyledRoot>
        </S.StyleCenter>
    </>
  );
};