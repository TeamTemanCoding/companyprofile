import React from 'react'
import Box from '../box/box'

const VisionMission = () => {
    return (
        <React.Fragment>
            <Box label="Vision" description="  To be a trusted team in creating creative and innovative digital
              solutions through high-quality websites that support business and
              technology development." className='animate-[spin_6s_linear_infinite] max-sm:animate-[spin_7s_linear_infinite]'/>
            <Box label="Mission" description="Providing the best service, developing the skills of each team member, building long-term relationships with clients, focusing on professional results." className='animate-[spin_7s_linear_infinite] max-sm:animate-[spin_8s_linear_infinite]' />
        </React.Fragment>
    )
}

export default VisionMission