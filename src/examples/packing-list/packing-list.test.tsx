import { render, screen, cleanup } from 'test/utilities';
import PackingList from '.';

afterEach(cleanup);

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  const title = screen.getByText('Packing List');

  expect(title).toBeInTheDocument();
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  const input = screen.getByPlaceholderText('New Item');

  expect(input).toBeInTheDocument();
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const button = screen.getByRole('button', { name: /Add New Item/ });
  expect(button).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);

  const button = screen.getByRole('button', { name: /Add New Item/ });
  const input = screen.getByPlaceholderText('New Item');

  await user.type(input, 'test');

  expect(button).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);

  const button = screen.getByRole('button', { name: /Add New Item/ });
  const input = screen.getByPlaceholderText('New Item');

  await user.type(input, 'test');
  await user.click(button);

  expect(screen.getByLabelText('test')).toBeInTheDocument();
});
