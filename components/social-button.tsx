import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SocialEnum } from '@/enums/social.enum';
import { SOCIAL_LINKS } from '@/consts/social-links';

interface SocialButtonProps {
  size?: 'sm' | 'md';
  type: SocialEnum;
}

export const SocialButton = ({ type, size }: SocialButtonProps) => {
  const iconsSize = size === 'sm' ? 'w-4 h-4 rounded-md' : 'w-10 h-10 rounded-xl';
  const buttonSize = size === 'sm' ? 'w-6 h-6' : 'w-12 h-12';
  const link = SOCIAL_LINKS[type];

  const renderIcon = () => {
    switch (type) {
      case SocialEnum.FACEBOOK:
        return Facebook;
      case SocialEnum.INSTAGRAM:
        return Instagram;
      case SocialEnum.LINKEDIN:
        return Linkedin;
    }
  };

  const Icon = renderIcon();

  return (
    <Button
      asChild
      size="icon"
      className={cn(
        'flex justify-center bg-primary-white text-primary-black hover:bg-primary-accent hover:text-primary-white',
        buttonSize,
      )}
    >
      <a href={link} target="_blank">
        <Icon className={iconsSize}/>
      </a>
    </Button>
  );
};
