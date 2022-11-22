import { useNavigate } from "react-router-dom";
import LinkButton from "components/button/LinkButton"
import IconButton from "components/button/IconButton"
import "style/pages/about.scss";

const AboutPage = () => {
    return (
        <div className="page about">
            <section className="profile">
                <h2 className="name">임연수</h2>
                <p className="job-title">프론트 엔드</p>
                <p className="summary">
                    서울에서 일하고 있는 프론트 엔드 개발자입니다.
                    미국에서 UX 엔지니어, 그래픽 디자이너의 경력을 바탕으로 다양한 인터렉션을 구현하는 것에 관심이 있습니다.
                </p>
            </section>
            <section className="tech">
                <p>javascript, css, html</p>
                <p>vue3, react, github, Atlassian Jira, threejs, p5</p>
            </section>
            <section className="sns">
                <IconButton iconName='github' linkUrl='https://github.com/tomlim2' color='#fff' size='16' />
                <IconButton iconName='linkedIn' linkUrl='https://www.linkedin.com/in/tommlimm/' color='#fff' size='16' />
                <IconButton iconName='instagram' linkUrl='https://www.instagram.com/tommlimm/' color='#fff' size='16' />
            </section>
        </div>
    )
}

export default AboutPage;