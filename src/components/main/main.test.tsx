import { render, screen } from '@testing-library/react';

import Main from './main';

const children = 'Render of Main component';

describe('<Main />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Main>{children}</Main>);

    expect(container).toMatchSnapshot();
  });

  it('should render Main correctly', () => {
    render(<Main>{children}</Main>);

    expect(screen.getByRole('main')).toHaveTextContent(children);
  });
});
