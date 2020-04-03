import React, {FunctionComponent, useEffect, useRef} from 'react';
import './Sidebar.scss';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DescriptionIcon from '@material-ui/icons/Description';

interface OwnProps {
    className?: string;
}

type Props = OwnProps;

const Sidebar: FunctionComponent<Props> = (props) => {

    return (
        <nav className={'sidebar'}>
            <ul>
                <li className={'sidebar__listitem sidebar-logo'}>
                    <a id={"logo-container"} aria-label={"Navigate to the beginning of the page"} href={"#intro"}>
                        <h1>
                            Rajat Verma<span>Full Stack Developer</span>
                        </h1>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-about'}>
                    <a aria-label={"Navigate to the About section"} href={"#about"}>
                        <PersonIcon className={'icon-about'}/>
                        <span>About</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-exp'}>
                    <a aria-label="Navigate to the Experience section" href={"#experience"}>
                        <TrendingUpIcon className={'icon-exp'}/>
                        <span>Experience</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-pro'}>
                    <a aria-label="Navigate to the Projects section" href={"#projects"}>
                        <AssignmentIcon className={'icon-pro'}/>
                        <span>Projects</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-skill'}>
                    <a aria-label="Navigate to the Skills section" href={"#skills"}>
                        <AssessmentIcon className={'icon-skill'}/>
                        <span>Skills</span>
                    </a>
                </li>
                <li id={'edu'} className={'sidebar__listitem sidebar-edu'} onClick={()=>{
                    let k = document.getElementById('edu');
                    k?.classList.add('sidebar-edu--active');
                }}>
                    <a aria-label="Navigate to the Education section" href={"#education"}>
                        <SchoolIcon className={'icon-edu'}/>
                        <span>Education</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-cert'}>
                    <a aria-label="Navigate to the Certificates section" href={"#certificates"}>
                        <CardMembershipIcon className={'icon-cert'}/>
                        <span>Certificates</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-cont'}>
                    <a aria-label="Navigate to the Contact section" href={"#contact"}>
                        <ContactMailIcon className={'icon-cont'}/>
                        <span>Contact</span>
                    </a>
                </li>
                <li className={'sidebar__listitem sidebar-resume'}>
                    <a aria-label="Open Rajat's resume in a new tab" onClick={()=>alert("Hell")}>
                        <DescriptionIcon className={'icon-resume'}/>
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;


//
// const useDragExpander = ({min, max}:any) => {
//     const [dragState, setDragState] = useState()
//     const initialPos = useRef(0)
//     const timer = useRef<Timeout>()
//
//     const update = useCallback(xPos =>
//             setDragState((state:any) => ({...state, delta:initialPos.current - xPos + state.lastDelta}))
//         , [])
//
//     const onDragMouseDown = (e:any) => {
//         if (e.button != 0) return  // only allow left-mouse clicks
//         e.preventDefault()
//         initialPos.current = e.screenX; // re-set initial position
//         timer.current = setTimeout(dragStart, 0, e) // only allow dragging after N duration mouse down
//         window.addEventListener('mouseup', unbind)
//     }
//
//     const dragStart = (e:any) => {
//         setDragState((state:any) => ({...state, lastDelta:state.delta || 0, isDragging:true}))
//         window.addEventListener('mousemove', onDragMove)
//     }
//
//     const onDragMove = useCallback(e => update(e.screenX), [])
//
//     const unbind = () => {
//         if (timer?.current instanceof Timeout) {
//             clearTimeout(timer.current);
//         }
//         window.removeEventListener('mousemove', onDragMove)
//         setDragState((state:any) => ({...state, isDragging:false}))
//     }
//
//     const limitDragRange = useCallback(delta =>
//             Math.min(max, Math.max(min, delta || 0))
//         , [])
//
//     return { onDragMouseDown, onDragMove, dragState, limitDragRange }
// };
// const spyScroll = (scrollParent:any, _targetElements:any) => {
//     if (!scrollParent) return false;
//
//     // create an Object with all children that has data-name attribute
//     const targetElements =
//         _targetElements ||
//         [...scrollParent.children].reduce(
//             (map, item) =>
//                 item.dataset.name ? { [item.dataset.name]: item, ...map } : map,
//             {}
//         );
//
//     let bestMatch = {};
//
//     for (const sectionName in targetElements) {
//         if (Object.prototype.hasOwnProperty.call(targetElements, sectionName)) {
//             const domElm = targetElements[sectionName];
//             const delta = Math.abs(scrollParent.scrollTop - domElm.offsetTop); // check distance from top, takig scroll into account
//
//             if (!bestMatch.sectionName)
//                 bestMatch = { sectionName, delta };
//
//             // check which delet is closest to "0"
//             if (delta < bestMatch.delta) {
//                 bestMatch = { sectionName, delta };
//             }
//         }
//     }
//
//     // update state with best-fit section
//     return bestMatch.sectionName;
// };
// const CurrentScrolledSection = ({ sectionsWrapperRef, children }) => {
//     const [currentSection, setCurrentSection] = useState()
//     const throttledOnScroll = _.throttle(
//         e => setCurrentSection(spyScroll(e.target)),
//         100
//     )
//
//     // adding the scroll event listener inside this component, and NOT the parent component, to prevent re-rendering of the parent component when
//     // the scroll listener is fired and the state is updated, which causes noticable lag.
//     useEffect(() => {
//         const wrapperElm = sectionsWrapperRef.current;
//         if (wrapperElm) {
//             wrapperElm.addEventListener('scroll', throttledOnScroll)
//             setCurrentSection( spyScroll(wrapperElm) )
//         }
//
//         // unbind
//         return () => wrapperElm.removeEventListener('scroll', throttledOnScroll)
//     }, [])
//
//     return children(currentSection)
// }
// function Aside({data}){
//     const sectionsWrapperRef = useRef()
//     const { onDragMouseDown, dragState, limitDragRange } = useDragExpander({min:-50, max:200})
//
//     // prepare DOM refs
//     const sectionsRefs = {}
//     data.forEach(section => sectionsRefs[section.name] = useRef())
//
//     const scrollToTarget = refName => () => {
//         if (refName && sectionsRefs[refName] && sectionsRefs[refName].current)
//             // MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
//             sectionsRefs[refName].current.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
//     }
//
//     // side section
//     const SideSection = useCallback(({children, name, ...rest}) =>
//         <section ref={sectionsRefs[name]} {...rest}>
//             <header>{name}</header>
//             <div className='sideSectionContent'>
//                 {children}
//             </div>
//         </section>, [])
//
//
//     // render-props method: get currently viewed section while scrolling:
//     return <CurrentScrolledSection sectionsWrapperRef={sectionsWrapperRef}>
//         {currentSection =>
//             <aside
//                 className={`asideComp ${dragState.isDragging ? "isDragging" : ""}`}
//                 style={{"--delta":limitDragRange(dragState.delta)}}
//             >
//                 <nav onMouseDown={onDragMouseDown}>
//                     {data.map(item => (
//                         <button
//                             type="button"
//                             key={item.name}
//                             title={_.capitalize(item.name)}
//                             className={currentSection === item.name ? 'active' : ''}
//                             onClick={scrollToTarget(item.name)}>
//                             {item.icon}
//                         </button>
//                     ))}
//                 </nav>
//
//                 <div className='asideContent' ref={sectionsWrapperRef}>
//                     {data.map(item => (
//                         <SideSection name={item.name} data-name={item.name} className={currentSection === item.name ? 'active' : ''}>
//                             {item.content}
//                         </SideSection>
//                     ))}
//                 </div>
//             </aside>
//         }
//     </CurrentScrolledSection>
// }