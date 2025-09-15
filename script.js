$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        //TODO add startup animation

        term.clear()
        term.echo("Select Task /n 1. Potato /n 2. No")
    } else if (cmd.name === 'progress'){
        var time = cmd.args[0]
        var width = cmd.args[1]
        
    } else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: startup.innerHTML,
    onInit: function(term) {
        //run after term initializes
        //term.exec('startup potato potato')
    }
});
