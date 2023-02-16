document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('delete')) {
        button.classList.add('delete');
        button.parentNode.parentNode.classList.add('removechild')
        setTimeout(() =>
        {
            button.classList.remove('delete')

            button.parentNode.parentNode.classList.add('removetd')
        }

        , 3200);
    }

    e.preventDefault();
}));
