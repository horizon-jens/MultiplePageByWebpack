import 'css/global.less'
import './index.less'


function dynamicImports() {
    import(/* webpackChunkName: "jquery" */ 'jquery').then(( { default: $ } ) => {
    
        $('.main').append(`<h1>这个是追加的内容。。。。。。，点击试试</h1>`);

        $('body').on('click', 'h1', () => {
            alert('Dynamic Imports')
        })
    
    }).catch(error => 'An error occurred while loading the component');
}

dynamicImports()
