import '../../assets/css/global.less'

function dynamicImports() {
    import(/* webpackChunkName: "jquery" */ 'jquery').then(( { default: $ } ) => {
    
        $('body').append(`<h1>this is the Detail page!</h1>`);
        
        console.log(1)
    
    }).catch(error => 'An error occurred while loading the component');
}

dynamicImports()

// import $ from 'jquery'

// $('body').html(`<h1>this is the Detail page!</h1>`);