import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className='resume-grid-left'>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                                alt='avatar'
                                style={{ height: '200px' }}
                            />

                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Arthur John Hauser</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Nulla occaecat adipisicing duis ea culpa exercitation ad. Ut do qui quis consequat adipisicing labore exercitation aute ex aute est excepteur non. Non laboris nisi nisi tempor mollit. Ex pariatur et aute dolor eiusmod elit aliqua ex ad aliquip culpa.</p>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(917) 548-9492</p>
                        <h5>Email</h5>
                        <p>arthur.hauser@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2002}
                            endyear={2006}
                            schoolName='S.U.N.Y. Binghamton'
                            schooDescription='Aliqua aute enim tempor aute ullamco aute ad laboris eiusmod est. Labore amet voluptate excepteur deserunt duis enim incididunt nulla occaecat labore voluptate nulla irure eiusmod. Irure veniam duis adipisicing ipsum. Enim id cupidatat cillum cupidatat cillum sit consequat sit pariatur enim labore. Id commodo exercitation aute reprehenderit ea occaecat velit ut. Cillum fugiat non proident esse ipsum. Pariatur non adipisicing esse nulla nostrud excepteur est.'
                        />
                        <Education
                            startYear={2020}
                            endyear={2020}
                            schoolName='Columbia University'
                            schooDescription='Aliqua aute enim tempor aute ullamco aute ad laboris eiusmod est. Labore amet voluptate excepteur deserunt duis enim incididunt nulla occaecat labore voluptate nulla irure eiusmod. Irure veniam duis adipisicing ipsum. Enim id cupidatat cillum cupidatat cillum sit consequat sit pariatur enim labore. Id commodo exercitation aute reprehenderit ea occaecat velit ut. Cillum fugiat non proident esse ipsum. Pariatur non adipisicing esse nulla nostrud excepteur est.'
                        />
                        <hr style={{ borderTop: '3px solid #e22p47' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName='First Job'
                            jobDescription='Tempor commodo mollit duis non reprehenderit ex reprehenderit et anim. Dolor ullamco culpa qui reprehenderit nisi laborum. Nostrud non adipisicing exercitation pariatur. Commodo est et Lorem sunt commodo non ut consequat. Esse consequat non ex deserunt anim sint eu ut incididunt. Labore excepteur tempor ipsum consequat commodo fugiat exercitation proident labore. Enim sint exercitation sit Lorem laboris consectetur consectetur amet officia eu nostrud dolor anim.'
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName='Second Job'
                            jobDescription='Tempor commodo mollit duis non reprehenderit ex reprehenderit et anim. Dolor ullamco culpa qui reprehenderit nisi laborum. Nostrud non adipisicing exercitation pariatur. Commodo est et Lorem sunt commodo non ut consequat. Esse consequat non ex deserunt anim sint eu ut incididunt. Labore excepteur tempor ipsum consequat commodo fugiat exercitation proident labore. Enim sint exercitation sit Lorem laboris consectetur consectetur amet officia eu nostrud dolor anim.'
                        />

                        <hr style={{ borderTop: '3px solid #e22p47' }} />
                        <h2>Skills</h2>
                        <Skills skill='javascript' progress={66}/>
                        <Skills skill='HTML/CSS' progress={75}/>
                        <Skills skill='NodeJS' progress={51}/>
                        <Skills skill='ReactJS' progress={51}/>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;