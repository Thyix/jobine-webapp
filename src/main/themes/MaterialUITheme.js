import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';
import Metrics from './Metrics';
import Fonts from './Fonts';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Helvetica',
    fontSize: Fonts.medium(),
    body1: {
      fontSize: Fonts.small(),
      color: Colors.primaryText,
    },
    body2: {
      color: Colors.primaryText,
    }
  },
  breakpoints: {
    xs: Metrics.breakpoint.xs,
    sm: Metrics.breakpoint.sm,
    md: Metrics.breakpoint.md,
    lg: Metrics.breakpoint.lg,
    xl: Metrics.breakpoint.xl,
  },
});