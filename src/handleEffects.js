import interactDOM from "./interactDom";

export default function handleEffects(){
    const titles = interactDOM().returnAllMatchingElements('todos-titles')
    titles.forEach(title => {
        title.addEventListener('mouseenter', e => {
    //    console.log(titles)
       
        titles.forEach(title => title.classList.add('border-right-titles')) 
    })
        title.addEventListener('mouseleave', e => {
        titles.forEach(title => title.classList.remove('border-right-titles'))
        })
}
    )

    const deleteListIcons = interactDOM().returnAllMatchingElements('delete-list-img')
    deleteListIcons.forEach(item => {
        item.addEventListener('mouseenter', e => {
            item.classList.add('delete-image-img-hover')
        })
        item.addEventListener('mouseleave', e => {
            item.classList.remove('delete-image-img-hover')
        })
    })

    const lists = interactDOM().returnAllMatchingElements('lists')
    lists.forEach(list => {
        
        list.addEventListener('mouseenter', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.add('image-visible')
        })
        list.addEventListener('mouseleave', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            interactDOM().hookDOMelement(imageIndex).classList.remove('image-visible')
        })
    })

}



