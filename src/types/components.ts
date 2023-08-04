import { ChildrenProps } from './default';

export interface LayoutProps extends ChildrenProps {
  className?: any;
  title?: string;
  navbar?: boolean;
  footer?: boolean;
  noindex?: boolean;
}

export interface AnchorProps extends ChildrenProps {
  href: string;
  newWindow?: boolean;
}

export interface CardProps {
  title: string;
  desc: string;
  icon?: any;
}

export interface HeroProps extends ChildrenProps {
  className?: any;
  id?: string;
  label?: string;
}
