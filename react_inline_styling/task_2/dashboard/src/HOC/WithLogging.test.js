
in task_4/dashboard/src/HOC/WithLogging.test.js, write some tests for the HOC component:

The first test should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html
The second test should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. Component Login is mounted and Component Login is going to unmount should be sent to the console
Tips:

Writing a unit test for HOC can be difficult. Create a variable with the HOC wrapping a function rendering the React component or html. e.g. WithLogging(() => <p />)
Requirements:

Make sure that the messages Component Login is mounted and Component Login is going to unmount are sent when loading the app
In the test file, make sure to restore the console function you mocked
The console in your browser should not show any error or warning

