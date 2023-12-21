import { useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
    const [text] = useTypewriter({
        /* Config */
        words: ['Welcome Back Task Management'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    return (
        <>
            <h1 className="flex justify-center items-center font-bold text-2xl mt-3">{text}</h1> 
        </>
    );
};

export default TypeWriter;