import Advice from "../interfaces/interface";

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice')
    const data:Advice = await promise.json();

    return data;
}

export { getData }