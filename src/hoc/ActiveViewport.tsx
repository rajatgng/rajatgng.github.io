import React, {useEffect, useRef} from 'react';

const ActiveViewport: React.FC<any> = ({component: Component, ...rest}) => {
    const sectionRef = useRef(null);
    const {type} = rest;

    const cb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        let targetElement = document.getElementsByClassName(`sidebar-${type}`);
        console.log(type, entries[0])
        let visibleArea: number = entries[0].intersectionRatio;
        if (visibleArea > 0.7) {
            targetElement[0]?.classList.add('sidebar-border-active');
        } else if (visibleArea < 0.3) {
            targetElement[0]?.classList.remove('sidebar-border-active');
        }
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {threshold: [0.25, 0.75]}
        const observer = new IntersectionObserver(cb, options);
        observer.observe(sectionRef.current!);
        return () => {
            observer.disconnect();
        }
    }, [cb]);

    return (
        <section {...rest} ref={sectionRef}>
            {Component}
        </section>
    );
};

export default ActiveViewport;
