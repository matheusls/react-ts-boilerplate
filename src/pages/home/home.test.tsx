import { render, screen } from '@testing-library/react';

import Home from './home';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should render Home correctly', () => {
    render(<Home />);

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});
