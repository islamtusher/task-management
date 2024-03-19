/* eslint-disable react/prop-types */
import { Badge } from "react-bootstrap";


const CustomBadge = ({ property, children }) => {
    const capitalize = word => word[0].toUpperCase() + word.substring(1)
    console.log(property)
    return (
        <Badge
            bg={`${property === 'low' ? 'secondary' : property === 'high' ? 'danger' : property === 'medium' || property === 'incomplete' ? 'warning' :  property === 'complete' && 'success' }`}
            text={`${property === 'low' || property === 'high' || property === 'complete' ? 'light' : 'dark'}`}
        >            
            {capitalize(property)}
            {children}           
        </Badge>
    );
};

export default CustomBadge;