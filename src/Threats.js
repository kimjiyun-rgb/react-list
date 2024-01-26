import { Badge } from 'react-bootstrap';
import styles from './Threats.module.css';

const Threats = (props) =>
{
    return (
        <div className={`${styles.border} ${styles.bggray} ${styles.center}`}>
            <h1>{props.data.locationName}</h1>
            <h1>{props.data.description}</h1>
            <Badge bg="primary">New</Badge>
        </div>
    );
}

export default Threats;