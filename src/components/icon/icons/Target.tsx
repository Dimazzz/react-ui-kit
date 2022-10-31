import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgTarget: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path
            d="M16.966 15.697A8.986 8.986 0 0 0 19 10c0-4.968-4.032-9-9-9s-9 4.032-9 9 4.032 9 9 9a8.985 8.985 0 0 0 6.399-2.673c.027-.027.045-.054.063-.072.18-.18.351-.369.504-.558ZM10 17.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2a7.131 7.131 0 0 1-1.521 4.41l-1.287-1.287c.621-.882.99-1.953.99-3.114 0-2.979-2.421-5.4-5.4-5.4a5.404 5.404 0 0 0-5.4 5.4c0 2.979 2.421 5.4 5.4 5.4 1.17 0 2.259-.378 3.141-1.017l1.278 1.278A7.04 7.04 0 0 1 10 17.2Zm1.728-6.741a1.782 1.782 0 0 0-.441-1.71l-.018-.018a1.79 1.79 0 0 0-2.502-.036c-.009.009-.027.018-.045.036a1.803 1.803 0 0 0 0 2.547l.018.018a1.777 1.777 0 0 0 1.719.441l1.359 1.359a3.549 3.549 0 0 1-1.836.522 3.599 3.599 0 0 1-3.6-3.6c0-1.989 1.611-3.6 3.6-3.6s3.6 1.611 3.6 3.6c0 .657-.189 1.269-.504 1.8l-1.35-1.359Z"
            fill="inherit"
        />
    </svg>
);
export default SvgTarget;