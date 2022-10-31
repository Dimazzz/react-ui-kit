import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgInstagram: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M14.577 6.263a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0ZM10 12.333a2.333 2.333 0 1 1 0-4.666 2.333 2.333 0 0 1 0 4.666Zm0-5.928a3.595 3.595 0 1 0 0 7.19 3.595 3.595 0 0 0 0-7.19Zm0-2.144c1.87 0 2.09.007 2.829.041.682.031 1.053.145 1.3.241.326.127.56.279.804.524.245.245.397.478.524.805.096.246.21.617.241 1.3.034.738.04.96.04 2.828 0 1.87-.006 2.09-.04 2.829-.031.682-.145 1.053-.241 1.3-.127.326-.279.56-.524.805a2.167 2.167 0 0 1-.805.523c-.246.096-.617.21-1.3.241-.737.034-.959.041-2.828.041-1.87 0-2.09-.007-2.829-.04-.682-.032-1.053-.146-1.3-.242a2.17 2.17 0 0 1-.804-.524 2.169 2.169 0 0 1-.524-.804c-.096-.247-.21-.618-.241-1.3-.034-.738-.04-.96-.04-2.829 0-1.869.006-2.09.04-2.828.031-.683.145-1.054.241-1.3a2.17 2.17 0 0 1 .524-.805c.245-.245.478-.397.805-.524.246-.096.617-.21 1.3-.24.738-.035.959-.042 2.828-.042ZM10 3c-1.901 0-2.14.008-2.886.042-.745.034-1.254.152-1.7.326a3.43 3.43 0 0 0-1.24.807c-.388.39-.628.78-.807 1.24-.173.445-.29.954-.325 1.699C3.008 7.86 3 8.099 3 10c0 1.901.008 2.14.042 2.886.034.745.152 1.254.326 1.7.178.46.418.85.807 1.24.39.388.78.628 1.24.806.445.173.954.292 1.699.326.747.034.985.042 2.886.042 1.901 0 2.14-.008 2.886-.042.745-.034 1.254-.152 1.7-.325a3.43 3.43 0 0 0 1.24-.808c.388-.39.628-.78.806-1.24.173-.445.292-.954.326-1.699.034-.746.042-.985.042-2.886 0-1.901-.008-2.14-.042-2.886-.034-.745-.152-1.254-.325-1.7a3.43 3.43 0 0 0-.808-1.24c-.39-.388-.78-.628-1.24-.807-.445-.173-.954-.29-1.699-.325C12.14 3.008 11.901 3 10 3Z"
            fill="inherit"
        />
    </svg>
);
export default SvgInstagram;