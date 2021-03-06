import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Virtuoso = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Virtuoso</h1>
 
            <p>Virtuosos love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, Virtuosos find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.</p>
            <p>Virtuosos explore ideas through creating, troubleshooting, trial and error and first-hand experience. They enjoy having other people take an interest in their projects and sometimes don’t even mind them getting into their space. Of course, that’s on the condition that those people don’t interfere with Virtuosos’ principles and freedom, and they’ll need to be open to Virtuosos returning the interest in kind.</p>
            <p>Virtuosos enjoy lending a hand and sharing their experience, especially with the people they care about, and it’s a shame they’re so uncommon, making up only about five percent of the population. Virtuoso women are especially rare, and the typical gender roles that society tends to expect can be a poor fit – they’ll often be seen as tomboys from a young age.</p>
            <p>While their mechanical tendencies can make them appear simple at a glance, Virtuosos are actually quite enigmatic. Friendly but very private, calm but suddenly spontaneous, extremely curious but unable to stay focused on formal studies, Virtuoso personalities can be a challenge to predict, even by their friends and loved ones. Virtuosos can seem very loyal and steady for a while, but they tend to build up a store of impulsive energy that explodes without warning, taking their interests in bold new directions.</p>
            <p>Virtuosos’ decisions stem from a sense of practical realism, and at their heart is a strong sense of direct fairness, a “do unto others” attitude, which really helps to explain many of Virtuosos’ puzzling traits. Instead of being overly cautious though, avoiding stepping on toes in order to avoid having their toes stepped on, Virtuosos are likely to go too far, accepting likewise retaliation, good or bad, as fair play.</p>
            <p>The biggest issue Virtuosos are likely to face is that they often act too soon, taking for granted their permissive nature and assuming that others are the same. They’ll be the first to tell an insensitive joke, get overly involved in someone else’s project, roughhouse and play around, or suddenly change their plans because something more interesting came up.</p>
            <p>Virtuosos will come to learn that many other personality types have much more firmly drawn lines on rules and acceptable behavior than they do – they don’t want to hear an insensitive joke, and certainly wouldn’t tell one back, and they wouldn’t want to engage in horseplay, even with a willing party. If a situation is already emotionally charged, violating these boundaries can backfire tremendously.</p>
            <p>Virtuosos have a particular difficulty in predicting emotions, but this is just a natural extension of their fairness, given how difficult it is to gauge Virtuosos’ emotions and motivations. However, their tendency to explore their relationships through their actions rather than through empathy can lead to some very frustrating situations. People with the Virtuoso personality type struggle with boundaries and guidelines, preferring the freedom to move about and color outside the lines if they need to.</p>
            <p>Finding an environment where they can work with good friends who understand their style and unpredictability, combining their creativity, sense of humor and hands-on approach to build practical solutions and things, will give Virtuosos many happy years of building useful boxes – and admiring them from the outside.</p>

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

export default Virtuoso
