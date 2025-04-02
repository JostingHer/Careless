import { useEffect, useState } from "preact/compat";

export const enum TypeSlider {
    BY_ITEM = "BY_ITEM",
    BY_SCREEN = "BY_SCREEN",
}
const useSlider = (
    ref: HTMLDivElement,
    watch: unknown,
    _typeSlider?: TypeSlider,
    _items?: number,
) => {
    const typeSlider = _typeSlider || TypeSlider.BY_SCREEN;
    const items = _items || 0;
    const [position, setPosition] = useState<number>(0);
    const [move, setMove] = useState(350);
    const [isPossibleForward, setIsPossibleForward] = useState(true);
    const [isPossibleBackwards, setIsPossibleBackwards] = useState(false);
    const [index, setIndex] = useState<number>(0);
    let observer: IntersectionObserver;
    let scrolling: NodeJS.Timeout;
    let autoSelect: boolean;

    function onClickCard(position: number) {
        if (position === index) {
            return;
        }
        if (position > index) {
            moveForward();
        }
        if (position < index) {
            moveBackwards();
        }
        setIndex(position);
    }

    function endOfStroke() {
        if (!ref) {
            return;
        }
        if (typeSlider === TypeSlider.BY_ITEM) {
            setIsPossibleBackwards(true);
            setIsPossibleForward(true);
            return;
        }
        if (ref.clientWidth < ref.scrollWidth) {
            setIsPossibleForward(false);
            setIsPossibleBackwards(false);
        }
        if (ref.scrollLeft < 320) {
            setIsPossibleBackwards(false);
        } else {
            setIsPossibleBackwards(true);
        }
        if (ref.scrollWidth - ref.scrollLeft <= ref.clientWidth) {
            setIsPossibleForward(false);
        } else {
            setIsPossibleForward(true);
        }
    }

    function centerItemSelected() {
        if (!ref || typeSlider === TypeSlider.BY_SCREEN) {
            return;
        }
        const element = ref.children[position] as HTMLDivElement;
        const center = element.offsetLeft + element.offsetWidth / 2;
        const half = ref.clientWidth / 2;
        ref.scrollLeft = center - half;
    }

    function calculateMove() {
        if (ref && ref.children.length > 0) {
            endOfStroke();
            const element = ref.children[0] as HTMLDivElement;
            setMove(
                (ref.scrollWidth - element.offsetWidth) / ref.children.length,
            );
        }
    }

    function moveForward() {
        if (typeSlider === TypeSlider.BY_ITEM) {
            if (position + 1 >= items) {
                setPosition(0);
                return;
            }
            setPosition(position + 1);
            return;
        }
        goto(+1);
    }
    function moveBackwards() {
        if (typeSlider === TypeSlider.BY_ITEM) {
            if (position - 1 < 0) {
                setPosition(items - 1);
                return;
            }
            setPosition(position - 1);
            return;
        }
        goto(-1);
    }
    useEffect(() => {
        if (ref && ref.children.length > 0) {
            centerItemSelected();
        }
    }, [position]);

    function windowsResize() {
        calculateMove();
        centerItemSelected();
    }

    function refScroll() {
        clearTimeout(scrolling);
        scrolling = setTimeout(() => {
            endOfStroke();
        }, 100);
    }
    function createObserver() {
        const options = {
            root: ref,
            rootMargin: "20px",
            delay: 500,
            threshold: 1,
        };
        function handlerIntersect(
            entries: IntersectionObserverEntry[],
            _observer: IntersectionObserver,
        ) {
            entries.forEach((entry, _index) => {
                if (entry.isIntersecting) {
                    const idHtml: string = entries[_index].target.id;
                    if (autoSelect) {
                        setPosition(Number(idHtml));
                    }
                }
            });
        }
        observer = new IntersectionObserver(handlerIntersect, options);
        for (let i = 0; i < ref.children.length; i++) {
            observer.observe(ref.children[i]);
        }
    }

    function refTouchMove() {
        autoSelect = true;
    }

    function refTouchEnd() {
        setTimeout(() => {
            autoSelect = false;
        }, 350);
    }

    useEffect(() => {
        if (ref && ref.children.length > 0) {
            calculateMove();
            ref.addEventListener("scroll", refScroll, {
                passive: true,
            });
            ref.addEventListener("touchmove", refTouchMove, {
                passive: true,
            });
            ref.addEventListener("touchend", refTouchEnd, {
                passive: true,
            });
            window.addEventListener("resize", windowsResize);
            if (typeSlider === TypeSlider.BY_ITEM) {
                createObserver();
            }
        }
        return () => {
            if (ref) {
                ref.removeEventListener("scroll", refScroll);
                ref.removeEventListener("touchmove", refTouchMove);
            }
            window.removeEventListener("resize", windowsResize);
            // window.removeEventListener("keydown", keyboard);
        };
    }, [watch]);
    const goto = (index: number) => {
        if (!ref) {
            return;
        }
        ref.scrollLeft = ref.scrollLeft + move * index;
    };

    return {
        moveForward,
        moveBackwards,
        isPossibleForward,
        isPossibleBackwards,
        onClickCard,
        position,
        setPosition,
    };
};

export default useSlider;
