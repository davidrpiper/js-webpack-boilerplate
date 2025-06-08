import sampleImage from './sample-image.svg';

// Explicit names for default exports are optional
const SampleApp = () => (
    <>
        <h1>Sample App</h1>
        <img src={sampleImage} width="256" height="256" />
    </>
);

export const sum = (a: number, b: number): number => {
    return a + b;
};

export default SampleApp;
