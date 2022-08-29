import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';

export default function Projects() {
    const location = useLocation();
    const message = location.state ? location.state.message : '';
    const type = location.state ? location.state.type : '';

    return (
        <div>
            <Message msg={message} type={type} />
            <h1>iManager Projects</h1>
        </div>
    );
}
