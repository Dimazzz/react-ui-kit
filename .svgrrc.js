module.exports = {
    ext: 'tsx',
    template: ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
        const formattedName = `${componentName}: FC<SVGAttributes<SVGElement>>`;

        return tpl`
            ${imports};
            import { FC, SVGAttributes } from 'react';
            
            ${interfaces};
            
            const ${formattedName} = (${props}) => (
              ${jsx}
            );
             
            ${exports};
`;
    },
};
