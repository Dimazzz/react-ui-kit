import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBulb: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.728 0v2.318h1.546V0H7.728Zm-5.41 7.728H0V6.182h2.318v1.546ZM5.41 18.546h6.182V17H5.409v1.546Zm1.545 1.546h3.091v-1.546H6.954v1.546ZM17 7.728h-2.318V6.182H17v1.546Zm-3.544-3.45 1.64-1.64-1.094-1.092-1.639 1.64 1.093 1.092ZM2.639 1.546l1.64 1.64-1.094 1.092-1.639-1.64 1.093-1.092ZM4.637 8.5a3.864 3.864 0 1 1 5.409 3.542v2.64H6.955v-2.64A3.865 3.865 0 0 1 4.637 8.5ZM8.5 3.091a5.41 5.41 0 0 0-3.09 9.849v3.287h6.181V12.94a5.41 5.41 0 0 0-3.09-9.849ZM16.912 18.865h.001-.001Zm-.413-.161-.015-.007a6.739 6.739 0 0 1-1.006-.537c-.773-.508-1.205-1.065-1.205-1.64v-2.895l2.227-1.233 2.227 1.233v2.895c0 .571-.431 1.128-1.206 1.638a6.765 6.765 0 0 1-1.007.539l-.015.007ZM20 12.938v3.582c0 2.352-3.5 3.48-3.5 3.48S13 18.878 13 16.52v-3.582L16.5 11l3.5 1.938Zm-3.914 5.927h-.001.001Z"
            fill="inherit"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.499 18.595a6.611 6.611 0 0 1-.966-.519c-.766-.503-1.16-1.034-1.16-1.556v-2.836l2.127-1.178 2.127 1.178v2.836c0 .519-.393 1.05-1.16 1.555-.342.225-.693.4-.968.52Zm2.228-4.97L16.5 12.392l-2.227 1.233v2.895c0 .575.432 1.132 1.205 1.64.358.235.724.415 1.006.537l.015.007.015-.007a6.758 6.758 0 0 0 1.007-.539c.775-.51 1.206-1.067 1.206-1.638v-2.895Zm1.373-.746v3.641c0 1.23-.914 2.125-1.795 2.706a8.178 8.178 0 0 1-1.733.855l-.03.01-.008.003h-.003L16.5 20s3.5-1.128 3.5-3.48v-3.582L16.5 11 13 12.938v3.582c0 2.358 3.5 3.48 3.5 3.48l-.03.095h-.004l-.008-.003-.03-.01a8.013 8.013 0 0 1-.515-.202 8.136 8.136 0 0 1-1.218-.652c-.882-.58-1.795-1.476-1.795-2.708v-3.64l3.6-1.994 3.6 1.993ZM16.5 20l.031.095-.031.01-.03-.01.03-.095Zm-.415-1.134Z"
            fill="inherit"
        />
    </svg>
);
export default SvgBulb;