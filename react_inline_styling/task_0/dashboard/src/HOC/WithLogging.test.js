describe('<MyComponent />', () => {

    it('console.log the text "hello"', () => {
        console.log = jest.fn();
        expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
      });

    it('console.log the text "hello"', () => {
        console.log = jest.fn();
        expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
      });

});
