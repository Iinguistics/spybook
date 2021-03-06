import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Logistician = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Logistician</h1>
 
            <p>The Logistician personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make Logisticians a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the Logistician personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, Logisticians hold back none of their time and energy completing each relevant task with accuracy and patience.</p>
            <p>Logisticians don’t make many assumptions, preferring instead to analyze their surroundings, check their facts and arrive at practical courses of action. Logistician personalities are no-nonsense, and when they’ve made a decision, they will relay the facts necessary to achieve their goal, expecting others to grasp the situation immediately and take action. Logisticians have little tolerance for indecisiveness, but lose patience even more quickly if their chosen course is challenged with impractical theories, especially if they ignore key details – if challenges becomes time-consuming debates, Logisticians can become noticeably angry as deadlines tick nearer.</p>
            <p>When Logisticians say they are going to get something done, they do it, meeting their obligations no matter the personal cost, and they are baffled by people who don’t hold their own word in the same respect. Combining laziness and dishonesty is the quickest way to get on Logisticians’ bad side. Consequently, people with the Logistician personality type often prefer to work alone, or at least have their authority clearly established by hierarchy, where they can set and achieve their goals without debate or worry over other’s reliability.</p>
            <p>Logisticians have sharp, fact-based minds, and prefer autonomy and self-sufficiency to reliance on someone or something. Dependency on others is often seen by Logisticians as a weakness, and their passion for duty, dependability and impeccable personal integrity forbid falling into such a trap.</p>
            <p>This sense of personal integrity is core to Logisticians, and goes beyond their own minds – Logistician personalities adhere to established rules and guidelines regardless of cost, reporting their own mistakes and telling the truth even when the consequences for doing so could be disastrous. To Logisticians, honesty is far more important than emotional considerations, and their blunt approach leaves others with the false impression that Logisticians are cold, or even robotic. People with this type may struggle to express emotion or affection outwardly, but the suggestion that they don’t feel, or worse have no personality at all, is deeply hurtful.</p>
            <p>Logisticians’ dedication is an excellent quality, allowing them to accomplish much, but it is also a core weakness that less scrupulous individuals take advantage of. Logisticians seek stability and security, considering it their duty to maintain a smooth operation, and they may find that their coworkers and significant others shift their responsibilities onto them, knowing that they will always take up the slack. Logisticians tend to keep their opinions to themselves and let the facts do the talking, but it can be a long time before observable evidence tells the whole story.</p>
            <p>Logisticians need to remember to take care of themselves – their stubborn dedication to stability and efficiency can compromise those goals in the long term as others lean ever-harder on them, creating an emotional strain that can go unexpressed for years, only finally coming out after it’s too late to fix. If they can find coworkers and spouses who genuinely appreciate and complement their qualities, who enjoy the brightness, clarity and dependability that they offer, Logisticians will find that their stabilizing role is a tremendously satisfying one, knowing that they are part of a system that works.</p>

            <Link 
                     activeClass="active" to="sentinels" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Logistician
