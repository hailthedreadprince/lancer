$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        term.echo("play")
        term.echo(cmd.args)
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
        term.exec('startup potato potato')
    }
});
