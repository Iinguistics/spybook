import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Adventurer = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Adventurer</h1>
 
            <p>Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. Adventurers enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase “Don’t box me in!”</p>
            <p>Adventurers live in a colorful, sensual world, inspired by connections with people and ideas. These personalities take joy in reinterpreting these connections, reinventing and experimenting with both themselves and new perspectives. No other type explores and experiments in this way more. This creates a sense of spontaneity, making Adventurers seem unpredictable, even to their close friends and loved ones.</p>
            <p>Despite all this, Adventurers are definitely Introverts, surprising their friends further when they step out of the spotlight to be by themselves to recharge. Just because they are alone though, doesn’t mean people with the Adventurer personality type sit idle – they take this time for introspection, assessing their principles. Rather than dwelling on the past or the future, Adventurers think about who they are. They return from their cloister, transformed.</p>
            <p>Adventurers live to find ways to push their passions. Riskier behaviors like gambling and extreme sports are more common with this personality type than with others. Fortunately their attunement to the moment and their environment allows them to do better than most. Adventurers also enjoy connecting with others, and have a certain irresistible charm.</p>
            <p>However, if a criticism does get through, it can end poorly. Some Adventurers can handle kindly phrased commentary, valuing it as another perspective to help push their passions in new directions. But if the comments are more biting and less mature, Adventurer personalities can lose their tempers in spectacular fashion.</p>
            <p>Adventurers are sensitive to others’ feelings and value harmony. When faced with criticism, it can be a challenge for people with this type to step away from the moment long enough to not get caught up in the heat of the moment. But living in the moment goes both ways, and once the heightened emotions of an argument cool, Adventurers can usually call the past the past and move on as though it never occurred.</p>
            <p>The biggest challenge facing Adventurers is planning for the future. Finding constructive ideals to base their goals on and working out goals that create positive principles is no small task. Adventurers don’t plan their futures in terms of assets and retirement. Rather, they plan actions and behaviors as contributions to a sense of identity, building a portfolio of experiences, not stocks.</p>
            <p>If these goals and principles are noble, Adventurers can act with amazing charity and selflessness – but it can also happen that people with the Adventurer personality type establish a more self-centered identity, acting with selfishness, manipulation and egoism. It’s important for Adventurers to remember to actively become the person they want to be. Developing and maintaining a new habit may not come naturally, but taking the time each day to understand their motivations allows Adventurers to use their strengths to pursue whatever they’ve come to love.</p>

            <Link 
                     activeClass="active" to="explorers" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Adventurer
