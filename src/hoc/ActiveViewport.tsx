import React, {useEffect, useRef} from 'react';

interface ActiveViewportProps {
    component: React.ReactNode;
    type: string;
}

const ActiveViewport: React.FC<ActiveViewportProps> = ({component: Component, ...rest}) => {
    const sectionRef = useRef(null);
    const {type} = rest;
    let threshold: number[] = [];
    for (let i = 0; i <= 100; i++) {
        threshold.push(i * 0.01);
    }

    const cb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        let targetElement = document.getElementsByClassName(`sidebar-${type}`);
        let parentArea = entries[0].rootBounds!.height;
        let childArea = entries[0].intersectionRect.height;
        let visibleArea = +(childArea / parentArea).toFixed(2);

        if (visibleArea >= 0.7) {
            targetElement[0]?.classList.add('sidebar-border-active');
        } else if (visibleArea <= 0.3) {
            targetElement[0]?.classList.remove('sidebar-border-active');
        }
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {threshold}
        const observer = new IntersectionObserver(cb, options);
        observer.observe(sectionRef.current!);
        return () => {
            observer.disconnect();
        }
    }, [cb, threshold]);

    return (
        <section {...rest} ref={sectionRef}>
            {Component}
        </section>
    );
};

export default ActiveViewport;
