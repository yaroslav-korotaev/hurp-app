import type {
  LogContext,
  HelpContext,
  VersionContext,
} from 'hurp-cli-plugins';
import { context } from './better-context';

export default context<{}>()
  .extend<LogContext>()
  .extend<HelpContext>()
  .extend<VersionContext>()
;
