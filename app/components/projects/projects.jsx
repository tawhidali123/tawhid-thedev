import React, {Component} from 'react';
import path from "path";

// import styles
import "style-loader!css-loader!sass-loader!./projects.scss";

const projects = [
    {
        name : `Income-Expense Planner`,
        link : `https://tawhidali123.github.io/monthly_planner/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/expense-planner.png" )}`,
            alt : `Income Expense`
        }
    },

    {
        name : `Memory Game`,
        link : `https://tawhidmemorygame.herokuapp.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/memory-game.png" )}`,
            alt : `Memory Game`
        }
    },

    {
        name : `Github Cards`,
        link : `https://git-cards.herokuapp.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/git.png" )}`,
            alt : `Github Cards`
        }
    },

    {
        name : `FitAli`,
        link : `https://fitali.netlify.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/fitali.png" )}`,
            alt : `HCI Live`
        }
    },

    {
        name : `ALLHDD`,
        link : `https://www.allhdd.com/`,
        img : {
            src : `${ path.resolve(__dirname, "/public/img/allhdd.png" )}`,
            alt : `HCI Live`
        }
    },

];


const Card = props => {
    return(
        <div className="card wow fadeInUP">
            <div className="card-wrapper">
                <div className="card-front">
                    <img src={ props.img.src } alt={props.img.alt}></img>
                </div>
                <div className="card-back">
                    <div className="card-back-wrapper">
                        <a href={props.link} target="_blank">
                            <h5> { props.name } </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = props => {

    let loopCards = cards => {
        return cards.map( (card, key) =>{
            return <Card key={key} {...card}></Card>;
        })
    }

    const wowConfig = {
    
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    
    }

    const animateOnScroll = new WOW();

    animateOnScroll.init();

    return(
        <div id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-wrapper">
                    <div className="project-heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="project-section">
                        <div className="project-section-wrapper">
                            { loopCards(projects) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;