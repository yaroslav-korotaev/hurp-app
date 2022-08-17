import type {
  Options,
  GroupSpec,
  CommandSpec,
} from 'hurp-cli';

export type RootSpec<C> = {
  children: (GroupSpec<C> | CommandSpec<C, any>)[];
};

export type ContextFactory<C> = {
  extend: <NC>() => ContextFactory<C & NC>;
  group: (spec: GroupSpec<C>) => GroupSpec<C>;
  command: <O extends Options>(spec: CommandSpec<C, O>) => CommandSpec<C, any>;
  root: (spec: RootSpec<C>) => RootSpec<C>;
};

export function context<C>(): ContextFactory<C> {
  const self: ContextFactory<C> = {
    extend: () => self as any,
    group: spec => spec,
    command: spec => spec,
    root: spec => spec,
  };
  
  return self;
}
