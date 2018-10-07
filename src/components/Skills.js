import React, { Component } from 'react';
import { MainSection, MainTitle } from '../theme/globalStyle';

class Skills extends Component {
    render() {
        const { skills } = this.props;
        console.log(skills);
        return(
            <MainSection bgw>
                <MainTitle>Skills</MainTitle>
                <p>Section is under construction.</p>
            </MainSection>
        )
    }
}

export default Skills;