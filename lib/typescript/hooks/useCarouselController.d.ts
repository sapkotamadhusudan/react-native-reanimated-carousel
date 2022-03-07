import React from 'react';
import type Animated from 'react-native-reanimated';
import type { TCarouselActionOptions, TCarouselProps } from '../types';
interface IOpts {
    loop: boolean;
    size: number;
    handlerOffsetX: Animated.SharedValue<number>;
    withAnimation?: TCarouselProps['withAnimation'];
    disable?: boolean;
    duration?: number;
    originalLength: number;
    length: number;
    onScrollBegin?: () => void;
    onScrollEnd?: () => void;
    onChange: (index: number) => void;
}
export interface ICarouselController {
    length: number;
    index: Animated.SharedValue<number>;
    sharedIndex: React.MutableRefObject<number>;
    sharedPreIndex: React.MutableRefObject<number>;
    prev: (opts?: TCarouselActionOptions) => void;
    next: (opts?: TCarouselActionOptions) => void;
    computedIndex: () => void;
    getCurrentIndex: () => number;
    to: (index: number, animated?: boolean) => void;
    scrollTo: (opts?: TCarouselActionOptions) => void;
}
export declare function useCarouselController(options: IOpts): ICarouselController;
export {};
