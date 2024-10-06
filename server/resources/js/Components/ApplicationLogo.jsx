import logo from "../../../public/logoi2c.png"

export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src={logo}
            alt="I2CLogo"
            className="w-auto h-20"
        />
    );
}