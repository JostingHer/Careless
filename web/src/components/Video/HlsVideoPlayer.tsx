import {
    type VideoHTMLAttributes,
    useRef,
    type MutableRefObject,
    useEffect,
} from "preact/compat";
import Hls from "hls.js";

type Props = VideoHTMLAttributes<HTMLVideoElement> & {
    srcHorizontal?: string;
    srcVertical?: string;
};

const HlsVideoPlayer = (props: Props) => {
    const video = useRef() as MutableRefObject<HTMLVideoElement>;
    const poster = props?.poster;
    const muted = props?.muted || true;
    const src = props?.srcHorizontal || props?.srcVertical;
    const autoplay = props?.autoplay || true;
    const controls = props?.controls || false;
    const playsinline = props?.playsinline || true;

    if (!src) return;

    function getSrcByOrientation(): string {
        if (!(props?.srcHorizontal && props?.srcVertical)) return src as string;

        if (window.innerWidth > window.innerHeight) {
            return props.srcHorizontal;
        }

        return props.srcVertical;
    }

    const hls = new Hls();
    let currentLoadedSource: string | undefined = undefined;

    function loadVideo() {
        if (!video.current) return;
        currentLoadedSource = src;
        hls.loadSource(getSrcByOrientation());
        hls.attachMedia(video.current);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.current.play();
        });
    }

    function setOrientation() {
        const currentSrc = getSrcByOrientation();

        if (currentSrc === currentLoadedSource) return;

        if (video.current) {
            hls.stopLoad();
            hls.loadSource(currentSrc);
            hls.attachMedia(video.current);
            currentLoadedSource = currentSrc;
        }
    }

    useEffect(() => {
        loadVideo();

        window.addEventListener("resize", setOrientation);
        return () => {
            window.removeEventListener("resize", setOrientation);
        };
    }, []);

    return (
        <video
            className={`${props?.className || ""}`}
            ref={video}
            id="hls-video"
            controls={controls}
            autoPlay={autoplay}
            poster={poster}
            muted={muted}
            playsinline={playsinline}
            width={"100%"}
        />
    );
};

export default HlsVideoPlayer;
