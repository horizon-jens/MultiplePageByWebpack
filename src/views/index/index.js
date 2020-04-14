function dynamicImports() {
    import(/* webpackChunkName: "jquery" */ 'jquery').then(( { default: $ } ) => {
    
        $('body').append(`<h1>this is the Index page!</h1>`);

        $('body').on('click', 'h1', () => {
            alert('Dynamic Imports')
        })
    
    }).catch(error => 'An error occurred while loading the component');
}

dynamicImports()

// import $ from 'jquery'

// $('body').html(`<h1>this is the Index page!</h1>`);

// $('body').on('click', 'h1', () => {
//     alert('Dynamic Imports')
// })
