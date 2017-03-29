var cssnext = require('postcss-cssnext');

// ref http://cssnext.io/usage/
module.exports = {
    plugins: [
        cssnext({
            features: {
                customProperties: {
                    variables: {
                        /*主色；用于重要级文字信息，标题信息*/
                        '--black': '#3c3c3c',
                        /*主色 小面积使用，用于点击状态文字、需要突出的文字、部分按钮和图标*/
                        '--orange': '#ff7700',

                        /*辅色；小面积使用，用于部分标签*/
                        '--blue': '#3495e4',
                        /*辅色；用于普通级文字信息*/
                        '--darkgray': '#535353',
                        /*辅色；用于标签或次要、辅助文字信息*/
                        '--lightorange': '#ffbd84',
                        /*辅色；用于次要、辅助文字信息*/
                        '--gray': '#a0a0a0',

                        /*较弱；用于辅助图形、不可点击区域颜色*/
                        '--lightgray': '#dcdcdc',
                        /*较弱；用于侧栏、内容描边和分割线*/
                        '--whitesmoke': '#eeeeee',
                    }
                },
                autoprefixer: {
                    browsers: [
                        'last 3 versions',
                        'ie >= 8',
                        'ff >= 30',
                        'chrome >= 34',
                        'safari >= 6',
                        'opera >= 12'
                    ]
                },

            }
        })
    ]
}