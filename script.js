document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const colors = ["#FFD1DC", "#A7C7E7", "#C3E6CB", "#FFF5BA", "#D5A6BD"]; // 연한 파스텔톤 색상 리스트
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
        project.style.backgroundColor = colors[index % colors.length]; // 순차적으로 적용
    });
});

// 다크 모드 스타일 추가
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    .dark-mode {
        background-color: #3D3B3A;
        color: white;
        margin: 0; /* 화면 내려가는 현상 방지 */
        padding: 0; /* 화면 내려가는 현상 방지 */
    }
    .dark-mode .project {
        background-color: #3D3B3A;
        color: BLACK;
    }
    .dark-mode body, .dark-mode html {
        margin: 0;
        padding: 0;
    }
`;
document.head.appendChild(darkModeStyle);
