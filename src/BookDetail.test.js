import { render } from '@testing-library/react';
import BookDetail from './BookDetail';

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    };

    const { container } = render(<BookDetail {...props} />);

    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          "Martin Fowler's Refactoring define core ideas and techniques that hundreds of thousands of developers have used to improve their softwae.",
      },
    };

    const { container } = render(<BookDetail {...props} />);

    const description = container.querySelector('.book-description');
    expect(description.innerHTML).toEqual(props.book.description);
  });
});
