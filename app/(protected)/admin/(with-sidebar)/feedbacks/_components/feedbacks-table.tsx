'use client';

import { toast } from 'sonner';
import { useEffect, useState, useTransition } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import { IFeedback } from '@/interfaces/model-types';
import { updateFeedbacksOrder } from '@/actions/update-feedbacks-order';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FeedbackTableRow } from '@/app/(protected)/admin/(with-sidebar)/feedbacks/_components/feedback-table-row';

function reorder<T>(list: Array<T>, startIndex: number, endIndex: number): Array<T> {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

type Props = {
  feedbacksList: Array<IFeedback>;
}

export const FeedbacksTable = ({ feedbacksList }: Readonly<Props>) => {
  const [pending, startTransition] = useTransition();
  const [orderedFeedbacks, setOrderedFeedbacks] = useState<Array<IFeedback>>(feedbacksList);

  useEffect(() => {
    setOrderedFeedbacks(feedbacksList);
  }, [feedbacksList]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      feedbacksList,
      result.source.index,
      result.destination.index,
    );

    setOrderedFeedbacks(items);
    updateOrder(items);
  };

  const updateOrder = (items: Array<IFeedback>): void => {
    startTransition(async () => {
      try {
        const result = await updateFeedbacksOrder(items);
        toast.success(result.success);
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Відгуки</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell"/>

              <TableHead>
                Імʼя
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Відгук
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <TableBody
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {orderedFeedbacks.map((feedback, idx) =>
                    ((<FeedbackTableRow key={feedback.id} feedback={feedback} index={idx}/>)))}
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </DragDropContext>
        </Table>
      </CardContent>
    </Card>
  );
};
