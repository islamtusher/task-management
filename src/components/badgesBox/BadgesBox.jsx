/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Badge } from 'react-bootstrap';
import CrossIcon from '../icon/CrossIcon';
import CustomBadge from '../badge/CustomBadge';

const BadgesBox = ({ priorities, handleFilterOptionCancel }) => {
    const capitalize = word => word[0].toUpperCase() + word.substring(1)

    return (
        <div className='d-flex bg-white p-1' style={{gap:'10px'}}>
            {
                priorities.map((priority, index) => {
                    return (
                        <CustomBadge key={index} property={priority}>
                            {capitalize(priority)}
                            <CrossIcon onClick={() => handleFilterOptionCancel(priority)} />
                        </CustomBadge>
                    )
                })                
            } 
        </div>
    );
};

export default BadgesBox;