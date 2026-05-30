import type { ReactNode } from 'react';

type ContentProps = { children: ReactNode };
type ContentContainerProps = { children: ReactNode };
type ContentDividerProps = { thick?: boolean };
type ContentEmptyProps = { children: ReactNode };
type ContentTitleProps = { subtitle?: ReactNode; title: ReactNode };

type ContentComponent = ((props: ContentProps) => JSX.Element) & {
  Container: (props: ContentContainerProps) => JSX.Element;
  Divider: (props: ContentDividerProps) => JSX.Element;
  Empty: (props: ContentEmptyProps) => JSX.Element;
  Title: (props: ContentTitleProps) => JSX.Element;
};

const Content = (({ children }: ContentProps) => {
  return (
    <div className="flex flex-col h-full p-5 space-y-5 overflow-y-auto md:p-10 md:w-3/4">
      {children}
    </div>
  );
}) as ContentComponent;

Content.Container = ({ children }: ContentContainerProps) => {
  return <div className="flex flex-col pb-10 space-y-5">{children}</div>;
};

Content.Divider = ({ thick }: ContentDividerProps) => {
  return thick ? (
    <hr className="border-2 dark:border-gray-600" />
  ) : (
    <hr className="border dark:border-gray-700" />
  );
};

Content.Empty = ({ children }: ContentEmptyProps) => {
  return (
    <div>
      <div className="flex items-center justify-center p-5 bg-gray-100 border-4 border-dashed rounded">
        <p>{children}</p>
      </div>
    </div>
  );
};

Content.Title = ({ subtitle, title }: ContentTitleProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <h3 className="text-gray-400">{subtitle}</h3>
    </div>
  );
};

export default Content;
