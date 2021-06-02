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
            xs: {
                width: "320px" // 320px
            },
            sm: {
                width: "600px" // 600px
            },
            md: {
                width: "768px" // 768px
            },
            lg: {
                width: "992px" // 992px
            },
            xl: {
                width: "1440px" // 1440px
            },
            xxl: {
                width: "1960px" // 1960px
            }
        }
};
 
smartGrid('src/scss', options);