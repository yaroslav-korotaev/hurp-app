import { Group } from 'hurp-cli';
import {
  log,
  error,
  help,
  version,
} from 'hurp-cli-plugins';
import type { RootSpec } from './better-context';
import { main } from './main';

export type ExecuteOptions = {
  name: string;
  description?: string;
  commands: RootSpec<any>;
};

export function execute(options: ExecuteOptions): void {
  const {
    name,
    description,
    commands,
  } = options;
  
  const app = new Group({
    name,
    description,
    plugins: [
      log(),
      error(),
      help(),
      version(),
    ],
    children: commands.children,
  });
  
  main(async () => {
    await app.execute({}, process.argv.slice(2), process.env);
  });
}
