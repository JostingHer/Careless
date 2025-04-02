import { next_svg, preview_svg } from "./elements_navigation.tsx";
import { type FC, type PropsWithChildren } from "preact/compat";
import useSlider from "./useSlider.tsx";

type PropsNavigator = PropsWithChildren<{
    _idCarousel: string;
}>;

const Navigation: FC<PropsNavigator> = (props: PropsNavigator) => {
    const carousel = document.getElementById(
        props._idCarousel,
    ) as HTMLDivElement;
    if (!carousel) return;
    const {
        isPossibleBackwards,
        isPossibleForward,
        moveForward,
        moveBackwards,
    } = useSlider(carousel, props._idCarousel);

    return (
        <div className={"m-carousel-nav"}>
            <button
                tabIndex={0}
                onClick={moveBackwards}
                aria-label={`desplazar a la izquierda`}
                disabled={!isPossibleBackwards}
                className={`carousel-nav__button`}
            >
                {preview_svg}
            </button>
            <button
                tabIndex={0}
                onClick={moveForward}
                aria-label={`desplazar a la derecha`}
                disabled={!isPossibleForward}
                className={`carousel-nav__button`}
            >
                {next_svg}
            </button>
        </div>
    );
};

export default Navigation;
