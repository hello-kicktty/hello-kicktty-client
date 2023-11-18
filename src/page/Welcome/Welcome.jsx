import React, { useEffect, useRef } from "react";

const Intro = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const duration = 1500; // 페이드 인의 전환 시간(밀리초)

        const handleTransitionEnd = () => {
            // 페이드 인 완료 후 이벤트 리스너 삭제
            video.removeEventListener('transitionend', handleTransitionEnd);
            // 2초 뒤에 '/main'으로 이동
            setTimeout(() => {
                window.location.href = '/main';
            }, 2000);
        };

        if (video) {
            video.style.transition = `opacity ${duration / 1000}s ease-in-out`;

            // 페이드 인
            video.style.opacity = 1;

            // 페이드 인이 완료되면 다음 페이지로 이동하도록 설정
            video.addEventListener('transitionend', handleTransitionEnd);
        }
    }, []);

    return (
        <video muted autoPlay style={{ width: '100vw', height: '100vh', opacity: 0 }} ref={videoRef}>
            <source src="/Welcome.mp4" type="video/mp4" />
        </video>
    )
}

export default Intro;
