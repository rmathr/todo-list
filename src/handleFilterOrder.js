import interactDOM from "./interactDom"
import arrowRight  from './right.png'
import filterByList from "./filterByList"
import filterByStatus from "./filterByStatus"
import filterByPriority from "./filterByPriority"
import sortByTitle from "./sortByTitle"





export default function handleFilterOrder (lists, todos){
    const todosGeneralTitles = interactDOM().hookDOMelement('todosGeneralTitles')
    todosGeneralTitles.addEventListener('click', e => {
        if(e.target.id != 'todosTasksTitle'){
            if(e.target.classList.contains('expand-icon')){
                const currentGeneralTitle = e.target.parentNode
                // console.log(currentGeneralTitle)
                // console.log(e.target.getBoundingClientRect())
                let { top, left } = e.target.parentNode.getBoundingClientRect()
                const expandedMenu = interactDOM().createElementWithClassAndId('div', 'expanded-menu', 'expandedMenu')
    
                const options = ['Filter', 'Sort']
                options.forEach((option) => {
                    const optionElement = interactDOM().createElementWithClassAndId('button', 'filter-sort', `filterSortId#${options.indexOf(option)}`)
                    const textElement = interactDOM().createElementWithClassAndId('p', 'filter-sort-text', `filterSortText#${options.indexOf(option)}`)
                    const rightArrow = interactDOM().createElementWithClassAndId('img', 'right-arrow', `rightArrow#${options.indexOf(option)}`)
                    rightArrow.src = arrowRight
                    textElement.textContent = option
                    optionElement.value = option;
                    // optionElement.textContent = option;
                    expandedMenu.appendChild(optionElement);
                    optionElement.appendChild(textElement);
    
                    optionElement.appendChild(rightArrow)
                });
    
                expandedMenu.style.position = 'absolute'
                expandedMenu.style.display = 'flex'
                expandedMenu.style.top = `${top + 26}px`;
                expandedMenu.style.left = `${left}px`;
                document.body.appendChild(expandedMenu);
    
                document.addEventListener('mousedown', e => {
                    if(!e.target.parentNode.classList.contains('filter-sort')){
                        // console.log(e.target)
                        expandedMenu.remove()
                    }
                    
    
            })
    
                expandedMenu.addEventListener('click', e  => {
                    if(e.target.parentNode.classList.contains('filter-sort')){
                        if(e.target.parentNode.value == 'Filter'){
                            const { right } = e.target.parentNode.getBoundingClientRect()  
                            const expandedFilterMenu = interactDOM().createElementWithClassAndId('div', 'expanded-filter-menu', "expandedFilterMenu")
                            // const todoTitle = `${currentGeneralTitle.id}`.replace("todosTitle", "")
                            let todoTitle = currentGeneralTitle.id.slice(10)
                            // console.log(todoTitle)
                            let options
                            switch (todoTitle) {
                                case 'Status':
                                    options = ['to-do', 'doing', 'done', 'wont do']
                                    console.log(options)
                                    break
                                case 'Lists':
                                    options = lists.map( list => list.listName)
                                    console.log(options)
                                    break
                                case 'Priorities':
                                    options = ['low', 'medium', 'high']
                                    console.log(options)
                                    break
                                default:
                                    options = []
                                    break;
                            }
                            options.forEach((option) => {
                                const optionElement = interactDOM().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${options.indexOf(option)}`)
                                optionElement.textContent = option
                                optionElement.value = option;
                                // optionElement.textContent = option;
                                expandedFilterMenu.appendChild(optionElement);
                            });

                            expandedFilterMenu.style.position = 'absolute'
                            expandedFilterMenu.style.display = 'flex'
                            expandedFilterMenu.style.top = `${top + 26}px`;
                            expandedFilterMenu.style.left = `${right + 1}px`;
                            document.body.appendChild(expandedFilterMenu);

                            document.addEventListener('mousedown', e => {
                                    expandedFilterMenu.remove()

                                }
                            )
     
                            expandedFilterMenu.addEventListener('mousedown', e =>{
                                if (e.target.parentNode.classList.contains('expanded-filter-menu')) {
                                    console.log(e.target.value)
                                    console.log(todoTitle)
                                    switch (todoTitle) {
                                        case 'Status':
                                            filterByStatus(e.target, todos)
                                            break
                                        case 'Lists':
                                            // console.log(e.target)    
                                            filterByList(e.target, lists, todos)
                                            break
                                        case 'Priorities':
                                            filterByPriority(e.target, todos)
                                            break
                                        default:
                                            break;
                                    }
                                }
                            })
                            

                            // console.log(e.target.parentNode.value)
                        } else if(e.target.parentNode.value == 'Sort'){
                            const { right, top } = e.target.parentNode.getBoundingClientRect()
                            const expandedSortMenu = interactDOM().createElementWithClassAndId('div', 'expanded-sort-menu', "expandedSortMenu")
                            let todoTitle = currentGeneralTitle.id.slice(10)
                            const options = ['Alphabetical', 'Reverse alphabetical']
                            
                            options.forEach((option) => {
                                const optionElement = interactDOM().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${options.indexOf(option)}`)
                                optionElement.textContent = option
                                optionElement.value = option;
                                // optionElement.textContent = option;
                                expandedSortMenu.appendChild(optionElement);
                            });
                            
                            expandedSortMenu.style.position = 'absolute'
                            expandedSortMenu.style.display = 'flex'
                            expandedSortMenu.style.top = `${top}px`;
                            expandedSortMenu.style.left = `${right + 1}px`;
                            document.body.appendChild(expandedSortMenu);

                            document.addEventListener('mousedown', e => {
                                expandedSortMenu.remove()
                            })

                            expandedSortMenu.addEventListener('mousedown', e => {
                                if (e.target.parentNode.classList.contains('expanded-sort-menu')){
                                    switch (todoTitle) {
                                        case 'Status':
                                            sortByTitle(e.target, todos, 'status')
                                            break
                                        case 'Lists':
                                            console.log(e.target)    
                                            sortByTitle(e.target, todos, 'list')
                                            break
                                        case 'Priorities':
                                            sortByTitle(e.target, todos, 'priority')
                                            break
                                        default:
                                            break;
                                    }
                                }
                            })

                            
                            // const sortedArray = todos.sort((a,b) => a.status > b.status ? 1 : -1) //crescent
                            // console.log(e.target.getBoundingClientRect())
                        }
                    }
                })
    
                
    
    
    
            }
            
    
    
    
        }
        
    })
    

}

