declare module 'react-tabs-scrollable' {
  import type { ReactNode, MouseEvent, CSSProperties, RefObject, FC, Ref} from 'react';
  
  export interface TabsBoundingClientRects {
    tabsContainerRects: DOMRect | null;
    tabRects: DOMRect | null;
  }

  export interface TabsProps {
    children?: ReactNode;
    activeTab: number;
    animationDuration?: number;
    navBtnCLickAnimationDuration?: number;
    selectedAnimationDuration?: number;
    isRTL?: boolean;
    didReachEnd?: () => void;
    didReachStart?: () => void;
    onTabClick?: (e: MouseEvent, index: number) => void;
    hideNavBtnsOnMobile?: boolean;
    hideNavBtns?: boolean;
    tabsScrollAmount?: number;
    tabsContainerRef?: RefObject<HTMLDivElement>;
    tabRef?: RefObject<HTMLButtonElement[]>;
    mode?: string;
    tabsContainerStyle?: CSSProperties;
    navBtnStyle?: CSSProperties;
    tabsUpperContainerStyle?: CSSProperties;
    leftNavBtnClassName?: string;
    rightNavBtnClassName?: string;
    navBtnClassName?: string;
    navBtnContainerClassName?: string;
    tabsUpperContainerClassName?: string;
    tabsContainerClassName?: string;
    leftNavBtnRef?: RefObject<HTMLButtonElement>;
    rightNavBtnRef?: RefObject<HTMLButtonElement>;
    showTabsScroll?: boolean;
    navBtnAs?: string;
    action?: () => void;
    rightBtnIcon?: ReactNode;
    leftBtnIcon?: ReactNode;
    getTabsBoundingClientRects?: (rects: TabsBoundingClientRects) => void;
  }

  export const Tabs: FC<TabsProps>;

  export interface TabProps {
    className?: string;
    selected?: boolean;
    style?: CSSProperties;
    tabAs?: string;
    ref?: Ref<HTMLButtonElement>;
    children : ReactNode
  }

  export const Tab: FC<TabProps>;

  export interface TabScreenProps {
    activeTab: number;
    index: number;
    className?: string;
    as?: string;
    style?: CSSProperties;
    children : ReactNode
  }

  export const TabScreen: FC<TabScreenProps>;
}
