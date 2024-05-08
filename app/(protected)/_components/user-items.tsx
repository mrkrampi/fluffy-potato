'use client';

import { CircleUser } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCurrentUser } from '@/hooks/use-current-user';
import { Button } from '@/components/ui/button';
import { logout } from '@/actions/logout';
import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const UserItem = () => {
  const user = useCurrentUser();

  const onSignOut = () => {
    void logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5"/>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start" forceMount>
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.email}
          </p>

          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={user?.image ?? ''}/>
                <AvatarFallback>
                  <CircleUser className="h-5 w-5"/>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1">
              <div className="text-sm line-clamp-1">
                {user?.name}
              </div>
            </div>
          </div>
        </div>

        <DropdownMenuItem asChild className="w-full cursor-pointer">
          <Link href="/admin/settings">Налаштування</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator/>

        <DropdownMenuItem asChild className="w-full cursor-pointer">
          <Button onClick={onSignOut}>
            <ExitIcon className="h-5 w-5 mr-2"/>
            Вийти
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
