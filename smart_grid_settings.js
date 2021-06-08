const smartGrid = require('smart-grid');
 
const options = {
   outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.9375rem" // side fields - 15px
        },
        breakPoints: {
            xxs: {
                width: "320px" // 320px
            },
            xs: {
                width: "375x" // 375px
            },
            sm: {
                width: "768x" // 768x
            },
            md: {
                width: "1024x" // 1024x
            },
            lg: {
                width: "1280px" // 1280px
            },
            xl: {
                width: "1440px" // 1440px
            },
            zl: {
                width: "1920px" // 1920px
            }
        }
};
 
smartGrid('src/scss', options);