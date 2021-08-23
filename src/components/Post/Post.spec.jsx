import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { mockPost as mock } from './mock';

const props = mock;

describe('<Post />', () => {
	it('should render Post', () => {
		render(<Posts {...props} />);
		expect(screen.getAllByRole('heading', { name: /title/i }))
			.toHaveLength(3);

		expect(screen.getAllByRole('img', { name: /title/i }))
			.toHaveLength(3);

		expect(screen.getAllByText(/body/i))
			.toHaveLength(3);

		expect(screen.getByRole('img', { name: /title 3/i }))
			.toHaveAttribute('src', 'static/logo3.svg');
	});

	it('should match snapshot', () => {
		const { container } = render(<Posts  {...props} />);
		expect(container.firstChild).toMatchSnapshot();
	})
});
