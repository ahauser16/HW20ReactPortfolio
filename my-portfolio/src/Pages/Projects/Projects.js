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
                        <CardTitle style={{ color: 'rgba(253,124,34,1)', height: '176px', background: 'url(https://legacy.theskepticsguide.org/wp-content/uploads/2015/11/2015-11-13-e1447423370214.jpg) center / cover' }}>
                            An alarm clock that also gives you the weather!
                    </CardTitle>
                        <CardText>Aersymphonia</CardText>
                        <CardActions border>
                            <Button href='https://github.com/ahauser16/project1_4.0' colored>GitHub</Button>
                            <Button href='https://ahauser16.github.io/project1_4.0/' colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'rgba(253,124,34,1)', height: '176px', background: 'url(https://i.ytimg.com/vi/aG0WdW43yHs/maxresdefault.jpg) center / cover' }}>
                         Five Day Forecast
                    </CardTitle>
                        <CardText>Work in progress</CardText>
                        <CardActions border>
                            <Button href='https://github.com/ahauser16/Unit-6---Weather-API-hw/settings' colored>GitHub</Button>
                            <Button href='https://ahauser16.github.io/Unit-6---Weather-API-hw/' colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'rgba(253,124,34,1)', height: '176px', background: 'url(https://moddogboutique.com/blog/wp-content/uploads/2014/10/Poodle-howling-at-the-moon-2.jpg) center / cover' }}>
                           WhereWoof
                    </CardTitle>
                        <CardText>Facebook for dogs...woof!</CardText>
                        <CardActions border>
                            <Button href='https://github.com/ahauser16/Project3' colored>GitHub</Button>
                            <Button href='https://project3-wherewoof.herokuapp.com/' colored>LiveDemo</Button>
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