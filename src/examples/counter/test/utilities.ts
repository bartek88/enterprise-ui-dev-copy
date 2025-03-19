import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function render(
  ui: Parameters<typeof originalRender>[0],
  options?: Parameters<typeof originalRender>[1],
) {
  return {
    ...originalRender(ui, options),
    user: userEvent.setup(),
  };
}

/**
 * For a complete example, see: test/utilities.ts
 */
