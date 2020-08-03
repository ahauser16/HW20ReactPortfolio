import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Arthur John Hauser</h2>
                        <img
                            src='about-me-octo-removebg-preview.png'
                            alt='avatar'
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Quis laboris laboris amet et anim ut tempor. Laborum reprehenderit aute elit duis sunt. Culpa ad laboris duis laboris irure id non anim consequat proident anim. Culpa voluptate velit excepteur irure non commodo consequat fugiat cupidatat cillum. Eiusmod labore consequat aute Lorem eu anim consequat. Elit voluptate tempor amet in ut Lorem magna ad dolore. Lorem voluptate aliqua cillum id eiusmod irure exercitation enim anim sint velit tempor cupidatat.  </p>

                    </Cell>
                    <Cell col={6}>

                        <h2>Contact Me</h2>
                        <hr />

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ color: 'white', fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        (917)-548 9492
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: 'white', fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-fax' aria-hidden='true'/>
                                        (917)-548 9492
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: 'white', fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        arthur.hauser@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: 'white', fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-skype' aria-hidden='true'/>
                                        my skype ID
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;