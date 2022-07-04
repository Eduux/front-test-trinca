import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';

import ThemeProvider from '../components/ThemeProvider';

export default function renderWithTheme(component: ReactNode) {
  return render(<ThemeProvider>{component}</ThemeProvider>);
}
