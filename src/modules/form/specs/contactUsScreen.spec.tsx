import { render, screen, fireEvent } from '@testing-library/react-native';
import ContactUsScreen from '../screens/ContactUsScreen';
import { test } from '@jest/globals';

describe('Test: Contact Us Screen', () => {

	test('1: disabled button if name and email are empty', () => {
		render(<ContactUsScreen />);

		const submitButton = screen.getByTestId('submit');

		expect(submitButton.props.accessibilityState).toEqual({ disabled: true})
	});

	test('2: disabled button if name and email invalid', () => {

		render(<ContactUsScreen />);

		const name = screen.getByTestId('name');
		fireEvent.changeText(name, 'Test');

		const email = screen.getByTestId('email');
		fireEvent.changeText(email, 'Email');

		const submitButton = screen.getByTestId('submit');

		expect(submitButton.props.accessibilityState).toEqual({ disabled: true})
	});

	test('3: disabled button if name and email is valid', () => {
		render(<ContactUsScreen />);

		const testName: string = 'Test';
		const testEmail: string = 'Email@gmail.com';

		const name = screen.getByTestId('name');
		fireEvent.changeText(name, testName);

		const email = screen.getByTestId('email');
		fireEvent.changeText(email, testEmail);

		const submitButton = screen.getByTestId('submit');
		expect(submitButton.props.accessibilityState).toEqual({ disabled: false})

		fireEvent.press(submitButton);

		const dialogName = screen.getByTestId('dialogName');
		expect(dialogName.props.children).toEqual(`Name: ${testName}`)
		const dialogEmail = screen.getByTestId('dialogEmail');
		expect(dialogEmail.props.children).toEqual(`Email: ${testEmail}`)

	});


  });
