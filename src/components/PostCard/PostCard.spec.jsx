import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { mockPostCard as mock } from './mock';

const props = mock

describe('<PostCard />', () => {
	it('should render PostCard correctly', () => {
		render(<PostCard { ...props } />);

		expect(screen.getByRole('img', { name: /title 1/i }))
			.toHaveAttribute('src', props.post.cover);
		expect(screen.getByRole('heading', { name: /title 1/i }))
			.toBeInTheDocument();
		expect(screen.getByText(props.post.body)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<PostCard { ...props } />);
		expect(container.firstChild).toMatchSnapshot();
	});
});