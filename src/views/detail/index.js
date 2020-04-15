import 'css/global.less'
import 'css/detail.less'

function dynamicImports() {
    import(/* webpackChunkName: "jquery" */ 'jquery').then(( { default: $ } ) => {
    
        $('.wrap').append(`<h1>this is the Detail page!</h1>`);
    
    }).catch(error => 'An error occurred while loading the component');
}

dynamicImports()

// import $ from 'jquery'

// $('body').html(`<h1>this is the Detail page!</h1>`);