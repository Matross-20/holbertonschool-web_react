jest.mock('console');

import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should log on mount and unmount with "Component" for pure HTML', () => {
        const element = <p>Hola!</p>;
        const WithLoggingElement = WithLogging(() => element);

        WithLoggingElement();
        WithLoggingElement().forceUpdate();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenNthCallWith(1, 'Componente montado');
        expect(console.log).toHaveBeenNthCallWith(2, 'Componente se va a desmontar');
    });

    it('should log on mount and unmount with component name for Login component', () => {
        const Login = () => <div>Login</div>;

        const WithLoggingLogin = WithLogging(Login);

        WithLoggingLogin();
        WithLoggingLogin().forceUpdate();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenNthCallWith(1, 'Componente Login is mounted');
        expect(console.log).toHaveBeenNthCallWith(2, 'Componente Login is going to unmount');
    });
});