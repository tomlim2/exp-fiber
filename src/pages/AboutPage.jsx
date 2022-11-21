import { useNavigate } from "react-router-dom";
import LinkButton from "components/button/LinkButton"
import IconButton from "components/button/IconButton"
import "style/pages/about.scss";

const AboutPage = () => {
    return (
        <div className="page about">
            <section className="profile">
                <h2>임연수</h2>
                <p>프론트 엔드</p>
                <p>
                    서울에서 일하고 있는 프론트 엔드 개발자입니다. 
                    미국에서 UX 엔지니어, 그래픽 디자이너의 경력을 바탕으로 다양한 인터렉션을 구현하는 것에 관심이 있습니다.
                    다양한 직군의 사람들과 목표를 달성하기 위해 협업하고 생각을 공유하는 것을 좋아하고, 도전하고 꾸준히 배우는 것을 좋아합니다.
                </p>
            </section>
            <section className="tech">
                <h3>Tech</h3>
                <p>javascript, css, html</p>
                <p>vue3, react, github, Atlassian Jira, threejs, p5</p>
            </section>
        </div>
    )
}

export default AboutPage;