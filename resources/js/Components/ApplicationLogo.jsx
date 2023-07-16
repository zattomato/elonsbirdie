import elonsface from "../../media/ElonsBirdieLogo.png";

export default function ApplicationLogo(props) {
    return (
        <img src={elonsface} alt="Birdies Logo" className="hover:animate-spin" />
    );
}
