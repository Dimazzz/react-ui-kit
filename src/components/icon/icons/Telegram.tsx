import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgTelegram: FC<SVGAttributes<SVGElement>> = (props) => (
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-6.75-1.832c-.68.283-2.041.869-4.082 1.758-.331.132-.505.26-.52.387-.027.213.24.297.603.41l.153.05c.357.116.838.252 1.088.257.227.005.48-.088.759-.28 1.907-1.287 2.89-1.938 2.953-1.952.043-.01.104-.022.145.014.04.037.037.105.032.124-.026.113-1.073 1.086-1.615 1.59a18.59 18.59 0 0 0-.478.457c-.332.32-.581.56.014.952.285.188.514.344.742.5.25.169.498.338.82.55.082.053.16.109.236.163.29.207.55.392.873.363.187-.017.38-.193.478-.718.232-1.24.688-3.926.793-5.032a1.232 1.232 0 0 0-.012-.276.295.295 0 0 0-.1-.19.46.46 0 0 0-.27-.081c-.264.005-.668.145-2.612.954Z"
            fill="inherit"
        />
    </svg>
);
export default SvgTelegram;
