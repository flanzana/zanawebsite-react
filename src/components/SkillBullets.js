import React from 'react';
import styled from 'styled-components';

const Bullets = styled.span`
    .fa-circle {
        font-size: 0.9em;
        padding: 0 3px;
        transition: all 0.3s ease-out;
    }

    .fill {
        color: ${props => props.theme.secondary};
    }

    .unfill {
        color: ${props => props.theme.secondaryLight};
    }

    .fa-circle:last-of-type {
        padding-right: 0;
    }
`;

const SkillBullets = ({ level }) => (
    <Bullets>
        {(level === 5) && (<div>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
        </div>)}
        {(level === 4) && (<div>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
        </div>)}
        {(level === 3) && (<div>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
        </div>)}
        {(level === 2) && (<div>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
        </div>)}
        {(level === 1) && (<div>
            <i className="fa fa-circle fill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
            <i className="fa fa-circle unfill" aria-hidden="true"></i>
        </div>)}
    </Bullets>
)

export default SkillBullets;