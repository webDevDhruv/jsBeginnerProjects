const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function (button) {
    // console.log(button);
    button.addEventListener('click', function (colors){
        console.log(colors);
        console.log(colors.target);
        switch (colors.target) {
            case grey:
                body.style.backgroundColor = colors.target.id
                break;
            case white:
                body.style.backgroundColor = colors.target.id
                break;
            case blue:
                body.style.backgroundColor = colors.target.id
                break;
            case yellow:
                body.style.backgroundColor = colors.target.id
                break;
            case purple:
                body.style.backgroundColor = colors.target.id
                break;
            default:
                body.style.backgroundColor = 'white'
                break;
        }
    })
} );