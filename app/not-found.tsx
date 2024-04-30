import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Header } from '@/components/markup/header';

import image404 from '@/public/404.webp';

const NotFound = () => {
  return (
    <main className="h-screen flex flex-col justify-between p-10 lg:px-24 py-10 relative bg-black">
      <Header/>
      <div/>
      <div>
        <h1 className="font-unbounded text-8xl lg:text-[200px] font-medium text-primary-accent leading-none">404</h1>
        <p className="pt-14 pb-10 font-unbounded text-5xl text-primary-white">
          Упс!  ви не туди потрапили
        </p>
        <p className="text-primary-white font-medium text-2xl max-w-2xl">
          Схоже, сторінки яку ви шукаєте на жаль немає на нашому сайті
        </p>
      </div>
      <Button
        asChild
        size="5xl"
        variant="outline"
        className="bg-transparent font-semibold py-10 px-24 w-fit text-primary-white text-3xl"
      >
        <Link href="/">Головна</Link>
      </Button>

      <Image
        src={image404}
        alt="404"
        className="object-cover max-h-screen object-center absolute right-0 top-0 bottom-0 hidden lg:block"
      />
    </main>
  );
}

export default NotFound;
