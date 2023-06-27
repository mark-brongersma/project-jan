let matchMedia = window.matchMedia("(max-width:800px)");
// let matchMedia = window.matchMedia("(pointer: coarse)");

        
// mobile tippys
        if (matchMedia.matches) {
        	tippy('#tooltip', {
        		theme: 'tooltip',
        		placement: 'top-end',
        		arrow: true,
        		interactive: true, zIndex: 50,
                allowHTML: true,
        		trigger: 'click',
        		content(reference) {
              const id = reference.getAttribute('data-template');
              const template = document.getElementById(id);
              return template.innerHTML;
            },
        	});

// desktop tippy and scroll disable 
        } else {
        	tippy('#tooltip', {
        		theme: 'tooltip',
        		placement: 'top-start',
        		arrow: true,
                allowHTML: true,
        		content(reference) {
              const id = reference.getAttribute('data-template');
              const template = document.getElementById(id);
              return template.innerHTML;
            },
        	});
        }

        // https://tippyjs.bootcss.com/html-content/