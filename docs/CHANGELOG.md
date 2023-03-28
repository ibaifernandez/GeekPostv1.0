# March 19, 2023

## Updated `webpack.common.js`:32-36

### Original

    {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: {
            loader: "file-loader",
            options: { name: "[name].[ext]" },
        },
    }

for

    {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    },

### Source

[webpack-file-loader-does-not-load-background-image](https://stackoverflow.com/questions/68575859/webpack-file-loader-does-not-load-background-image)
