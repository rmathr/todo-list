import { easepick } from "@easepick/bundle"
import { AmpPlugin } from '@easepick/amp-plugin';
import interactDOM from "./interactDom";


function definePicker (){
    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
            "./main.css"
            // 'https://easepick.com/css/customize_sample.css',
            // "../src/calendar.css"
            // "./calendar.css"
        ],
        zIndex: 10,
        firstDay: 0,
        inline: true,
        AmpPlugin: {
            dropdown: {
                months: true,
                years: true,
                minYear: 2000,
                maxYear: 2030
            },
            darkMode: false
        },
        plugins: [AmpPlugin]
    })
}



function controlDatePicker(){
    // const containerElem = interactDOM().hookDOMelement(container)
    // datepicker.addEventListener('selectDate', function(event) {
        //     console.log(event.detail);
        //   });
    const datepicker = interactDOM().createElementWithClassAndId('input', 'date-picker', 'datepicker')
    // containerElem.appendChild(datepicker)
    // const picker = new easepick.create({
    //     element: document.getElementById('datepicker'),
    //     css: [
    //         "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
    //         "./main.css"
    //         // 'https://easepick.com/css/customize_sample.css',
    //         // "../src/calendar.css"
    //         // "./calendar.css"
    //     ],
    //     zIndex: 10,
    //     firstDay: 0,
    //     inline: true,
    //     AmpPlugin: {
    //         dropdown: {
    //             months: true,
    //             years: true,
    //             minYear: 2000,
    //             maxYear: 2030
    //         },
    //         darkMode: false
    //     },
    //     plugins: [AmpPlugin]
    // })
    
    // datepicker.addEventListener('click', e => {
    //     console.log(datepicker)
    // })

    return datepicker
}

export { definePicker, controlDatePicker }