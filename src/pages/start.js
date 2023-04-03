
import $ from 'jquery';
const StartPage = async(props) => {
    const beforeRender = async() => {
        let hasChildren = $('#app').children().length > 0
        if (hasChildren) {
            if (props?.transition && !isNaN(props?.transition)) {
                $('#app').fadeOut(props?.transition ?? 1000)
            } else {
                $('#app').hide()
            }
            $('#app').html()
        }
        
    }

    const render = async() => {
        let page = `
        <div id="start">
            <div class="console">
                <div class="console-header">
                    <div class="console-title">
                        <span class="title">Video Game History [Version 0.0.1]</span>
                        <span class="copyright">Copyright (c) 2023 Aldrin Azucena</span>
                    </div>
                    <div class="console-instructions">
                        <span class="instructions">Type ‘start.exe’ and press [Enter] to start the creating video games.</span>
                        <span class="instructions">Type "credits.exe’ and press [Enter] to show credits & resources for the website.</span>
                    </div>
                </div>
                <div class="console-terminal">
                    <div class="terminal">
                        <span class="terminal-path">
                            V:\\video-games>
                        </span>
                        <span class="terminal-container">
                            <input type="text" id="terminal" class="terminal-cli" autofocus autocomplete="false"/>
                            <span class="caret"> </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>`
        
        if (props?.transition) {
            $('#app').show().html(page).fadeIn(props?.transition ?? 1000)
        } else {
            $('#app').show().html(page)
        }
        
    }

    const afterRender = async() => {
    
        let terminal_id = `terminal`
        let terminal_cli = $(`.${terminal_id} > .terminal-container > .terminal-cli`);
        terminal_cli.trigger('focus')
        let onKeyPress = (event) => {
            terminal_cli.trigger('focus')
            let value = !!event.target.value === false ? $(`.${terminal_id} > .terminal-container > .terminal-cli`).val() : event.target.value;
            value = value === '' && event.originalEvent.key !==  'Enter' ? event.originalEvent.key : value;
            let width = value.length + 1;
            if (width >= 0) {
                terminal_cli.width(`${width}ch`);
            }
        }
        $(document).on('keypress', onKeyPress);
        $(document.body).on('keypress', onKeyPress);

        let onKeyDown = (event) => {
            terminal_cli.trigger('focus')
            let key = event.originalEvent.key;
            let value = !!event.target.value === false ? $(`.${terminal_id} > .terminal-container > .terminal-cli`).val() : event.target.value
            switch (key) {
                case 'Backspace':
                case 'Delete':
                    let width = value.length;
                    if (width >= 0) {
                        width--;
                        terminal_cli.width(`${width}ch`);
                        terminal_cli.val(value)
                    }
                    break;
                case 'Enter':
                    checkCommand(value)
                    terminal_cli.val("")
                    terminal_cli.width(`0ch`);
                    break;
                default:
                    if (key.length === 1) {
                        terminal_cli.val(value)
                        console.log("🚀 ~ file: app.js:19 ~ $ ~ value:", value)
                    }
                    break;
            }
            // $(event.target).width(`${width}ch`)
        }

        $(document).on('keydown', onKeyDown);
        $(document.body).on('keydown', onKeyDown);
        
        
        let checkCommand = async(name) => {
            switch(true) {
                case "start.exe" === name:
                case "start" === name:
                    console.log('Running Video Game History 0.0.1')
                    let page = (await import('./decades.js')).default
                    page()
                    break
                case "credits.exe" === name:
                case "credits" === name:
                    console.log('Running Credits for Video Game History 0.0.1')
                    break
                default:
                    if (name.length > 0) {
                        $('.console-terminal .terminal-popup').remove()
                        let result = name.length > 12 ? name.slice(0, 12)+'...' : name
                        $('.console-terminal').prepend(`<div class="terminal-popup">There is no command: "${result}"</div>`)
                    }
                    break
            }
        }
    }
    beforeRender()
    render()
    setTimeout(() => {
        afterRender()
    }, 500)
}

export default StartPage