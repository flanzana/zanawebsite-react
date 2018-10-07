import React, { Component } from 'react';
import { MainSection, MainTitle } from '../theme/globalStyle';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        console.log(projects);

        return(
            <MainSection bgl>
                <MainTitle>Projects</MainTitle>
                <p>Section is under construction.</p>
            </MainSection>
        )
    }
}

export default Projects;