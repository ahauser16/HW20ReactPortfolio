import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    };

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (

                // card number 1
                <div className="projects-grid">
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                            React Project #1
                    </CardTitle>
                        <CardText>Ipsum blahhhhhhhhhhhhhhhhhhhh Ipsum Ipsum</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                            React Project #2
                    </CardTitle>
                        <CardText>Ipsum blahhhhhhhhhhhhhhhhhhhh Ipsum Ipsum</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                            React Project #3
                    </CardTitle>
                        <CardText>Ipsum blahhhhhhhhhhhhhhhhhhhh Ipsum Ipsum</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>


                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is project 2</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is project 3</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is project 4</h1></div>
            )
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                    <Tab>React</Tab>
                    <Tab>Project-2</Tab>
                    <Tab>Project-3</Tab>
                    <Tab>Project-4</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;