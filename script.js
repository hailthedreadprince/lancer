$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        term.echo("play")
        term.echo(cmd.args)
    } else if (cmd.name === 'progress'){

    } else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: 'Welcome to the combined terminal!',
    onInit: function(term) {
        //run after term initializes
        term.exec('startup potato potato')
    }
});
