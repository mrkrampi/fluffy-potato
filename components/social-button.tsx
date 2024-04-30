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
  const iconsSize = size === 'sm' ? 'w-4 h-4' : 'w-10 h-10';
  const buttonSize = size === 'sm' ? 'w-6 h-6' : 'w-12 h-12';
  const link = SOCIAL_LINKS[type];

  const renderIcon = () => {
    switch (type) {
      case SocialEnum.FACEBOOK:
        return <Facebook className={iconsSize}/>;
      case SocialEnum.INSTAGRAM:
        return <Instagram className={iconsSize}/>;
      case SocialEnum.LINKEDIN:
        return <Linkedin className={iconsSize}/>;
    }
  };

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
        {renderIcon()}
      </a>
    </Button>
  );
};


