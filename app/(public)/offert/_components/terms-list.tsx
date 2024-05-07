import { cn } from '@/lib/utils';

type List = {
  title: string;
  items?: Array<List>;
}

type Props = {
  isHeading?: boolean;
  items?: Array<List>;
}

export const TermsList = ({ items, isHeading }: Readonly<Props>) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ol className="pl-4 [counter-reset:section]">
      {
        items?.map((item) =>
          (
            <li key={item.title} className={cn(
              '[counter-increment:section] marker:[content:counters(section,\'.\')_\'._\'] marker:font-normal',
              isHeading && 'my-5 marker:font-bold',
            )}>
              <span className={isHeading ? 'font-bold' : ''} dangerouslySetInnerHTML={{ __html: item.title }}/>
              <TermsList items={item.items ?? []}/>
            </li>
          ))
      }
    </ol>
  );
};
