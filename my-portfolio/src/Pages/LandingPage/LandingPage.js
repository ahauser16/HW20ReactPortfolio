import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12} className='avatarBannerContainer'>
                        <img
                            src="avatar_no_bg.png"
                            alt="avatar"
                            className="avater-img"
                        />

                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTMLS/CSS | Bootstrap | Javascript| React | NodeJS | Express </p>
                            
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="www.linkedin.com/in/arthur-hauser" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/ahauser16" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Freecodecamp
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a> */}
                                {/* Youtube */}
                                {/* <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true" /> */}
                                {/* </a> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;