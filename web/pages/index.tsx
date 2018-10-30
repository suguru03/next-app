import App from '../src/App';

export default () => {
    const n = 1 + 2;
    return <App id={`${process.pid}`} count={n} />;
};
