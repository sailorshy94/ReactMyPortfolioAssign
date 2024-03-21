
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            textJustify: 'auto',
            fontSize: '3em',
        }}>
            <div>
                <a href='https://github.com/sailorshy94' target='blank'>
                <AiFillGithub />
                </a>
                <a href='https://www.linkedin.com/in/shyla-butler-851bb5143' target='blank'>
                <AiFillLinkedin />
                </a>
            </div>
        </footer>
    );
}

