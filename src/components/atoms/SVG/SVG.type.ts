import React from 'react';
import { IconName } from './IconName.type';

export type Size = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'auto' ;

interface SVGIconProps extends React.SVGAttributes<HTMLDivElement> {

    /**
     * The name of SVG placed in icon folder.
     * don't set the value to name and src at the same time,
     * Just one of them should have value.
     */
    name: IconName;
    /**
     * the address of SVG(art-board)
     * e.g.: "/assets/images/name.svg"
     */
    src?: string;
    /**
     *  "extra small" 10px, <br/>
     *  "small" 16px,<br/>
     *  "base" 24px,<br/>
     *  "medium" 32px,<br/>
     *  "large" 40px,<br/>
     *  "auto": 100%(default)
     * @default 'auto'
     */
    size?: Size;
    iconsFolder?: string;
}

interface SVGSourceProps extends React.SVGAttributes<HTMLDivElement> {
    /**
     * The name of SVG placed in icon folder.
     * don't set the value to name and src at the same time,
     * Just one of them should have value.
     */
    name?: IconName;
    /**
     * the address of SVG(art-board)
     * e.g.: "/assets/images/name.svg"
     */
    src: string;
    /**
     *  "extra small" 10px, <br/>
     *  "small" 16px,<br/>
     *  "base" 24px,<br/>
     *  "medium" 32px,<br/>
     *  "large" 40px,<br/>
     *  "auto": 100%(default)
     * @default 'auto'
     */
    size?: Size;
    iconsFolder?: string;
}

// TS will help the component understand which one to pick based on the properties passed by the parent.
// Eg. if dev passes src but not name, it'll pick the SVGSourceProps as type.
// It basically satisfies TS when there are different use cases for required properties in the type.
export type SVGProps = SVGIconProps | SVGSourceProps;
